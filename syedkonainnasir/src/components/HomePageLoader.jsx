'use client';

import { useEffect, useState } from 'react';
import About from '@/components/About';
import Header from '@/components/Header';
import HomepageLayout from '@/components/layout';
import Terminal from '@/components/Terminal';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import GithubStats from '@/components/GithubStats';
import Education from '@/components/Education';

const STORAGE_KEY = 'portfolio-home-loaded';
const LOADING_DURATION = 2000;

export default function HomePageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hasSeenHome = window.localStorage.getItem(STORAGE_KEY) === 'true';

    if (hasSeenHome) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const startedAt = performance.now();

    const tick = (now) => {
      const elapsed = now - startedAt;
      const nextProgress = Math.min(100, Math.round((elapsed / LOADING_DURATION) * 100));
      setProgress(nextProgress);

      if (elapsed < LOADING_DURATION) {
        requestAnimationFrame(tick);
      } else {
        setProgress(100);
        window.localStorage.setItem(STORAGE_KEY, 'true');
        setIsLoading(false);
      }
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-999 flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="w-full max-w-md px-6">
          <div className="mb-4 flex items-center justify-between text-sm font-medium uppercase tracking-[0.35em] text-(--muted)">
            <span>Preparing portfolio</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-(--border)/30">
            <div
              className="h-full rounded-full bg-(--accent) transition-[width] duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <HomepageLayout
      firstRow={<Header />}
      secondRowBig={<About />}
      secondRowSmall1={<Skills />}
      secondRowSmall2={<Experience />}
      thirdRowLeft={<Terminal />}
      thirdRowMiddle={<GithubStats username="konain611" />}
      thirdRowRight={<Education />}
    />
  );
}
