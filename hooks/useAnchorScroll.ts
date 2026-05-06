"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export const useAnchorScroll = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Support localhost + production dengan basePath
  const isHomePage =
    pathname === "/" || pathname === "/living-space";

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;

      if (hash) {
        const id = hash.replace("#", "");

        const element = document.getElementById(id);

        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 200);
        }
      }
    };

    handleHashScroll();
  }, [pathname]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Hanya handle link anchor
    if (!href.startsWith("/#")) return;

    const id = href.replace("/#", "");

    // Jika sedang di homepage
    if (isHomePage) {
      e.preventDefault();

      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.pushState(null, "", `#${id}`);
      }
    } else {
      // Dari halaman lain → pindah ke homepage lalu scroll
      e.preventDefault();

      router.push(`/#${id}`);
    }
  };

  return { handleAnchorClick };
};