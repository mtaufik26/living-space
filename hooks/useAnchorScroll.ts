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
              block: "start",
            });
          }, 50);
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
      const [path, hash] = href.split("#");
      
      const normalizedPath = path === "" || path === "/" ? "/" : path;

      if (pathname === normalizedPath) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          // Use history.pushState to update URL without jump
          window.history.pushState(null, "", `#${hash}`);
          
          // Then trigger the scroll (CSS will make it smooth)
          element.scrollIntoView({
            block: "start",
          });
        }
      }
    }
  };

  return { handleAnchorClick };
};