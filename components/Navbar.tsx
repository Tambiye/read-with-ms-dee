"use client";

import { useState, useEffect, useCallback } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiBookOpen,
} from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Why Read With Us", href: "#why-choose-us" },
  // { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBg, setShowBg] = useState(false);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBg(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  return (
    <nav
      className={`navbar ${showBg ? "navbar-bg" : ""} ${
        isOpen ? "navbar-menu-open" : ""
      }`}
      aria-label="Main navigation"
    >
      <Link
        href="#home"
        className="logo"
        onClick={closeMenu}
        aria-label="Read With Mrs Dee home"
      >
        <Image
          src="/images/logo.png"
          alt="Read With Mrs Dee"
          width={200}
          height={60}
          priority
          className="logo-image"
        />
      </Link>

      <ul className="nav-links">
        {navLinks.map((link, index) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={index === 0 ? "active" : ""}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <Link
  href="https://wa.me/2348062768868?text=Hello%20I%20would%20like%20to%20inquire%20about..."
  className="nav-cta"
  target="_blank"
  rel="noopener noreferrer"
  onClick={closeMenu}
>
  <span>Start Reading</span>
  <FiArrowUpRight size={16} />
</Link>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          type="button"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <button
        type="button"
        className={`mobile-overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
        aria-label="Close navigation menu"
        tabIndex={isOpen ? 0 : -1}
      />

      <div
        id="mobile-navigation"
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        {/* <p className="mobile-menu-header">
          <FiBookOpen size={17} />
          <span>Explore Read With Mrs Dee</span>
        </p> */}

        {navLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            style={{ "--i": index } as CSSProperties}
            tabIndex={isOpen ? 0 : -1}
          >
            <span>{link.label}</span>
            <FiArrowUpRight size={17} />
          </Link>
        ))}

     <Link
  href="https://wa.me/2348062768868?text=Hello%20I%20would%20like%20to%20inquire%20about..."
  onClick={closeMenu}
  className="mobile-menu-button"
  tabIndex={isOpen ? 0 : -1}
  target="_blank"
  rel="noopener noreferrer"
>
  Start Reading
  <FiArrowUpRight size={18} />
</Link>

        <p className="mobile-menu-note">
          Discover stories. Grow through reading.
        </p>
      </div>
    </nav>
  );
}