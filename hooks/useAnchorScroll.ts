"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const useAnchorScroll = () => {
  const pathname = usePathname();

  // On GitHub Pages with basePath, pathname will be "/" for the home page.
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          // Let the browser's CSS 'scroll-behavior: smooth' handle the animation
          // to avoid "double-scrolling" or stuttering.
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    };

    // Handle hash on initial load and when pathname changes
    handleHashScroll();

    // Listen for hash changes (e.g. back/forward button)
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, [pathname]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.includes("#")) {
      const hash = href.split("#")[1];
      const element = document.getElementById(hash);

      if (element) {
        e.preventDefault();
        window.history.pushState(null, "", `#${hash}`);
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return { handleAnchorClick };
};