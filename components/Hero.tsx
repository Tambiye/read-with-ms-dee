"use client";

import Link from "next/link";
import { FiArrowRight, FiBookOpen } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
<span className="hero-eyebrow-icon">
  <FiBookOpen size={17} />
</span>
<span>Welcome to Read With Mrs Dee</span>
</div>
       
<h1 className="hero-title">
  From "I Can't Read"
  <br />
  <span>to "I Can Read!"</span>
</h1>
<p className="hero-tagline">
 If your child is struggling to read or hasn't started reading yet, Mrs Dee can help, with online and in-person lessons.
</p>

          <div className="hero-actions">
  <Link href="#contact" className="hero-cta">
    <span>Enroll Your Child</span>
    <FiArrowRight size={19} />
  </Link>
</div>

          {/* <div className="hero-note">
            <span className="hero-note-line" />
           <p>Little steps today. Confident readers tomorrow.</p>
          </div> */}
        </div>

        <div className="hero-image-caption" aria-hidden="true">
          <span className="hero-caption-icon">
            <FiBookOpen size={19} />
          </span>

          <div>
            <p className="hero-caption-title">Reading opens doors</p>
            <p className="hero-caption-text">
              To imagination, knowledge and big dreams.
            </p>
          </div>
        </div>
      </div>

 
    </section>
  );
}