"use client";

import Image from "next/image";
import Link from "next/link";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: FiInstagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FiFacebook,
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    icon: FaPinterestP,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      {/* Decorative top wave */}
      <div className="footer-wave-top" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 80 480 0 720 30C960 60 1200 10 1440 40V0H0V40Z"
            fill="#5a3a6e"
          />
        </svg>
      </div>

      <div className="footer-container">
        {/* Left - Logo + Copyright */}
        <div className="footer-brand">
          <Link
            href="#home"
            className="footer-logo"
            aria-label="Read With Mrs Dee home"
          >
            <Image
              src="/images/logo.png"
              alt="Read With Mrs Dee"
              width={180}
              height={54}
              className="footer-logo-image"
            />
          </Link>
          <p className="footer-copyright">
            &copy; {currentYear} Read with Mrs Dee. All rights reserved.
          </p>
        </div>

        {/* Center - Social Links */}
        <div className="footer-social">
          <p className="footer-social-label">Follow along</p>
          <ul className="footer-social-list">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="footer-social-link"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right - Tagline */}
        <div className="footer-tagline">
          <p className="footer-tagline-text">
            Because every child <br />
            has a story to tell
          </p>
          <svg
            className="footer-tagline-decoration"
            viewBox="0 0 120 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M5 30C25 5 60 0 115 15"
              stroke="#4a9b8e"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M108 8L116 14L106 18"
              stroke="#4a9b8e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
}