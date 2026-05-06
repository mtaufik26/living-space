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
          // Add a small delay to ensure the content is rendered
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
    // Only handle links with hashes
    if (!href.includes("#")) return;

    const [path, hash] = href.split("#");
    
    // Normalize path for comparison (Next.js pathname is always leading-slash)
    const normalizedPath = path === "" || path === "/" ? "/" : path;

    // Check if we are already on the target page
    if (pathname === normalizedPath) {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Update hash without jumping and preserving basePath
        window.history.pushState(null, "", `#${hash}`);
      }
    }
    // If not on same page, let Next.js <Link> handle it (it prefixes basePath correctly)
  };

  return { handleAnchorClick };
};