"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import siteConfig from "@/config/siteConfig";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const router = useRouter();

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      if (pathname !== "/") {
        router.push(`/${href}`);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 bg-white py-4 ${
        isScrolled ? "border-[#e7dfd2] shadow-sm" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-4 sm:px-16 2xl:px-48">
        <Link href="/" className="relative z-50 flex shrink-0 items-center">
          <Image
            src="/logo/FIDI Mezzanine.png"
            alt="The Mezzanine"
            width={180}
            height={50}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-8 font-heading uppercase">
          {siteConfig.navigation.map((item) => {
            const isPageLink = item.href.startsWith("/");

            if (isPageLink) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium tracking-[0.08em] transition-colors  ${
                    pathname === item.href
                      ? "text-[#c8a96b]"
                      : "text-[#3f3a34] hover:text-[#c8a96b]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="font-heading uppercase text-sm font-medium tracking-[0.08em] text-[#3f3a34] transition-colors hover:text-[#c8a96b]"
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <button
            onClick={() => scrollToSection("#contact")}
            className="font-heading inline-flex min-h-[46px] items-center justify-center border border-[#c8a96b] bg-[#c8a96b] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#b89345]"
          >
            Secure Your Date
          </button>
        </div>

        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center xl:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`absolute h-0.5 w-6 bg-[#111111] transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-[#111111] transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-[#111111] transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>

        <div
          className={`fixed inset-y-0 right-0 w-[85%] sm:w-[380px] z-40 bg-white transition-transform duration-300 xl:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex min-h-screen flex-col px-6 pb-8 pt-24">
            <nav className="flex flex-1 flex-col justify-center gap-7 font-heading uppercase">
              {siteConfig.navigation.map((item) => {
                const isPageLink = item.href.startsWith("/");

                if (isPageLink) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-2xl font-medium tracking-[0.06em] transition-colors ${
                        pathname === item.href
                          ? "text-[#c8a96b]"
                          : "text-[#222222]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="font-heading uppercase text-left text-2xl font-medium tracking-[0.06em] text-[#222222] transition-colors hover:text-[#c8a96b]"
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <button
              onClick={() => scrollToSection("#contact")}
              className="font-heading mt-8 inline-flex min-h-[54px] text-white w-full items-center justify-center border border-[#c8a96b] bg-[#c8a96b] px-6 text-sm font-semibold uppercase tracking-[0.12em]"
            >
              Secure Your Date
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
