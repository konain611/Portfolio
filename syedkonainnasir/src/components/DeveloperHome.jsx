"use client";

import About from "@/components/About";
import Header from "@/components/Header";
import HomepageLayout from "@/components/layout";
import Terminal from "@/components/Terminal";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import GithubStats from "@/components/GithubStats";
import Education from "@/components/Education";
import Social from "./Social";
import Projects from "./Projects";

export default function DeveloperHome() {
  return (
    <HomepageLayout
      firstRow={<Header />}
      secondRowBig={<About />}
      secondRowSmall1={<Social />}
      secondRowSmall2={<Skills />}
      thirdRowMiddle={<Experience />}
      thirdRowLeft={<Education />}
      fourthRowRight={<GithubStats username="konain611" />}
      fourthRowLeft={<Terminal />}
      thirdRowRight={<Projects />}
    />
  );
}
