const FETCH_TIMEOUT_MS = 6000;

const CODE_HOST_HOSTNAMES = [
  "github.com",
  "npmjs.com",
  "gitlab.com",
  "bitbucket.org",
];

function isCodeHost(url){
  try {
    const { hostname } = new URL(url);
    return CODE_HOST_HOSTNAMES.some((h) => hostname === h || hostname.endsWith(`.${h}`));
  } catch {
    return false;
  }
}

function extractGithubRepo(url) {
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.includes("github.com")) return null;
    const [, owner, repo] = parsed.pathname.split("/");
    if (!owner || !repo) return null;
    return { owner, repo: repo.replace(/\.git$/, "") };
  } catch {
    return null;
  }
}

function extractMetaImage(html){
  const patterns = [
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i,
  ];
  for (const p of patterns) {
    const match = html.match(p);
    if (match?.[1]) return match[1];
  }
  return null;
}

function microlinkScreenshot(url) {
  const params = new URLSearchParams({
    url,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
  });
  return `https://api.microlink.io/?${params.toString()}`;
}

export async function getLinkPreview(url){
  // Code hosts (GitHub, npm, GitLab, Bitbucket) — use their metatag / social-card image.
  const repo = extractGithubRepo(url);
  if (repo) {
    return `https://opengraph.githubassets.com/1/${repo.owner}/${repo.repo}`;
  }

  if (isCodeHost(url)) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
      const res = await fetch(url, {
        signal: controller.signal,
        headers: { "User-Agent": "Mozilla/5.0 (compatible; LinkPreviewBot/1.0)", Accept: "text/html" },
        next: { revalidate: 60 * 60 * 24 },
      });
      clearTimeout(timeout);
      if (res.ok) {
        const html = await res.text();
        const image = extractMetaImage(html);
        if (image) return new URL(image, url).toString();
      }
    } catch {
      // fall through
    }
    // no meta image found even on a code host — screenshot as last resort
    return microlinkScreenshot(url);
  }

  // Everything else = a live website — always show a real homepage screenshot,
  // never the meta tag, even if the site has a nice og:image set.
  return microlinkScreenshot(url);
}