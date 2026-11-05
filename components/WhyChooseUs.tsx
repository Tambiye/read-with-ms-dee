"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

const reasons = [
  "Flexible online and in-person lessons",
  "Child-friendly and engaging lessons",
  "Personalised support and encouragement",
  "Builds confidence and independence",
  "A love for reading that lasts a lifetime",
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose" id="why-choose-us">
      <div className="why-choose-container">
        {/* Left Content */}
        <div className="why-choose-content">
          <div className="why-choose-badge">
            <HiOutlineSparkles size={14} />
            <span>Why Choose Us</span>
          </div>

          <h2 className="why-choose-title">
            Why Choose <br />
            <span className="why-choose-title-accent">Read with Mrs Dee?</span>
          </h2>

          <ul className="why-choose-list">
            {reasons.map((reason, index) => (
              <li
                key={reason}
                className="why-choose-item"
                style={{ "--delay": `${index * 120}ms` } as React.CSSProperties}
              >
                <span className="why-choose-check" aria-hidden="true">
                  <FiCheck size={14} strokeWidth={3} />
                </span>
                <span className="why-choose-text">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Illustration */}
        <div className="why-choose-illustration">
          <div className="why-choose-image-wrapper">
            <Image
              src="/images/image-removebg-preview (12).png" // Replace with your actual illustration
              alt="A young girl reading a book surrounded by books"
              width={500}
              height={500}
              className="why-choose-image"
            />
          </div>

          <div className="why-choose-note">
            <p>
              Small <br />
              steps...
            </p>
            <p className="why-choose-note-highlight">
              Big <br />
              progress
            </p>
            <svg
              className="why-choose-note-decoration"
              viewBox="0 0 80 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5 25C15 5 40 0 70 10"
                stroke="#f5c56b"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M65 4L72 9L64 13"
                stroke="#f5c56b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom CTA Bar */}
      <div className="why-choose-cta-wrapper">
        <div className="why-choose-cta">
          <div className="why-choose-cta-icon" aria-hidden="true">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 8C14 8 10 12 10 12V30C10 30 14 26 20 26C26 26 30 30 30 30V12C30 12 26 8 20 8Z"
                fill="#f5c56b"
              />
              <path
                d="M20 8V26"
                stroke="#5a3a6e"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="why-choose-cta-text">
            Let&apos;s get your child reading, writing and growing!
          </p>
          <Link href="#contact" className="why-choose-cta-button">
            <span>Get In Touch</span>
            <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}