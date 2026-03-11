"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import ActionButton from "./ui/buttons/ctaButton";

export default function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { label: "Home", sectionId: "home" },
    { label: "About", sectionId: "about" },
    { label: "Services", sectionId: "services" },
    { label: "Pages", routePath: "/pages" },
    { label: "Blog", routePath: "/blog" },
    { label: "Contact Us", routePath: "/contact-us" },
  ];

  const handleSectionScroll = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const navbarOffset = 90;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  };

  const handleNavClick = (link, closeMobileMenu = false) => {
    if (link.sectionId) {
      handleSectionScroll(link.sectionId);
    } else if (link.routePath) {
      router.push(link.routePath);
    }

    if (closeMobileMenu) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-3 sx:px-5 md:px-10">
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex w-full items-center justify-between rounded-sm bg-[#313131] px-4 py-2.5 md:px-6 md:py-2.5 lg:py-4"
      >
        <Image
          src="/logo/ironpeak-logo.png"
          alt="Logo"
          width={100}
          height={20}
          onClick={() => handleSectionScroll("home")}
          className="cursor-pointer w-[74px] md:w-[78px] lg:w-[100px] h-auto"
        />
        <ul className="flex gap-8 items-center text-white hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.label} className="flex list-none cursor-pointer gap-2.5">
              <button
                type="button"
                onClick={() => handleNavClick(link)}
                className="cursor-pointer"
              >
                {link.label}
              </button>
              {link.label !== "Contact Us" && (
                <Image
                  src="/icons/down-carrot.svg"
                  alt="Arrow Down"
                  width={9}
                  height={4}
                />
              )}
            </li>
          ))}
        </ul>
        <div className="hidden md:flex">
          <ActionButton
            label="Get Free Quote"
            className="px-3 lg:px-5"
            link="/get-quote"
          />
        </div>
        
        {/* Mobile View */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        >
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden bg-[#313131] border-t border-white/20 px-8 py-6">
            <ul className="flex flex-col gap-4 text-white">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link, true)}
                    className="cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 w-full max-w-[220px]">
              <ActionButton
                label="Get Free Quote"
                className="px-4 w-full justify-center"
                link="/try-free"
              />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
