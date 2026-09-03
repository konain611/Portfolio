const TOKEN_COLORS = {
  keyword: "#569cd6",
  string: "#ce9178",
  comment: "#6a9955",
  number: "#b5cea8",
  function: "#dcdcaa",
  type: "#4ec9b0",
  tag: "#4ec9b0",
  attribute: "#9cdcfe",
  punctuation: "#cccccc",
  property: "#9cdcfe",
  default: "#d4d4d4",
  heading: "#569cd6",
  bold: "#cccccc",
  link: "#4ec9b0",
  key: "#9cdcfe",
};

const KEYWORDS = new Set([
  "import",
  "export",
  "default",
  "function",
  "const",
  "let",
  "var",
  "return",
  "from",
  "interface",
  "type",
  "extends",
  "implements",
  "new",
  "if",
  "else",
  "for",
  "while",
  "class",
  "async",
  "await",
  "true",
  "false",
  "null",
  "undefined",
]);

function span(type, text) {
  const color = TOKEN_COLORS[type] || TOKEN_COLORS.default;
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return `<span style="color:${color}">${escaped}</span>`;
}

function highlightTsx(code) {
  const lines = code.split("\n");

  return lines.map((line) => {
    let result = "";
    let i = 0;

    while (i < line.length) {
      const rest = line.slice(i);

      if (rest.startsWith("//")) {
        result += span("comment", rest);
        break;
      }

      if (rest[0] === '"' || rest[0] === "'" || rest[0] === "`") {
        const quote = rest[0];
        let j = 1;
        while (j < rest.length && rest[j] !== quote) {
          if (rest[j] === "\\") j++;
          j++;
        }
        result += span("string", rest.slice(0, j + 1));
        i += j + 1;
        continue;
      }

      if (/^<\/?[A-Za-z]/.test(rest)) {
        const match = rest.match(/^<\/?[A-Za-z][\w.]*/);
        result += span("tag", match[0]);
        i += match[0].length;
        continue;
      }

      if (/^[A-Za-z_]\w*(?=\s*=)/.test(rest) && !KEYWORDS.has(rest.match(/^[A-Za-z_]\w*/)[0])) {
        const match = rest.match(/^[A-Za-z_]\w*/);
        result += span("attribute", match[0]);
        i += match[0].length;
        continue;
      }

      if (/^\d+/.test(rest)) {
        const match = rest.match(/^\d+/);
        result += span("number", match[0]);
        i += match[0].length;
        continue;
      }

      if (/^[A-Za-z_]\w*/.test(rest)) {
        const match = rest.match(/^[A-Za-z_]\w*/);
        const word = match[0];

        if (KEYWORDS.has(word)) {
          result += span("keyword", word);
        } else if (/^[A-Z]/.test(word)) {
          result += span("type", word);
        } else if (line[i + word.length] === "(") {
          result += span("function", word);
        } else {
          result += span("default", word);
        }

        i += word.length;
        continue;
      }

      result += span("punctuation", rest[0]);
      i += 1;
    }

    return result;
  });
}

function highlightJson(code) {
  return code.split("\n").map((line) => {
    return line.replace(
      /("(?:\\.|[^"\\])*")(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?/g,
      (match, quoted, colon, keyword) => {
        if (keyword) return span("keyword", match);
        if (colon) return span("key", quoted) + span("punctuation", colon);
        if (quoted) return span("string", quoted);
        if (/^-?\d/.test(match)) return span("number", match);
        return span("default", match);
      }
    );
  });
}

function highlightMarkdown(code) {
  return code.split("\n").map((line) => {
    if (line.startsWith("#")) {
      const hashes = line.match(/^#+/)[0];
      const text = line.slice(hashes.length);
      return span("keyword", hashes) + span("heading", text);
    }

    if (line.startsWith(">")) {
      return span("comment", line);
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      return span("punctuation", line.slice(0, 2)) + span("default", line.slice(2));
    }

    if (line.startsWith("```")) {
      return span("comment", line);
    }

    let result = line;
    result = result.replace(/`([^`]+)`/g, (_, inner) => {
      return span("string", "`" + inner + "`");
    });
    result = result.replace(/\*\*([^*]+)\*\*/g, (_, inner) => {
      return span("bold", "**" + inner + "**");
    });
    result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, url) => {
      return span("link", `[${text}](${url})`);
    });

    if (result === line) {
      return span("default", line);
    }

    return result;
  });
}

export function highlightCode(code, language) {
  if (language === "json") return highlightJson(code);
  if (language === "markdown") return highlightMarkdown(code);
  return highlightTsx(code);
}
