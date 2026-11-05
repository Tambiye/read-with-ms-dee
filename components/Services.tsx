"use client";

import type { CSSProperties } from "react";
import { FiBookOpen, FiEdit3, FiFeather } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { TbAbc } from "react-icons/tb";

const services = [
  {
    id: "phonics",
    icon: TbAbc,
    title: "Phonics",
    description:
      "Build strong sound-letter connections for confident and fluent reading.",
  },
  {
    id: "grammar",
    icon: FiEdit3,
    title: "Grammar",
    description:
      "Make sense of language and express ideas clearly and correctly.",
  },
  {
    id: "creative-writing",
    icon: FiFeather,
    title: "Creative Writing",
    description:
      "Spark imagination and help your child tell their own amazing stories.",
  },
  {
    id: "vocabulary",
    icon: FiBookOpen,
    title: "Vocabulary",
    description:
      "Grow word power for better understanding, communication and confidence.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      {/* Decorative top wave */}
      <div className="services-wave-top" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V0H0V30Z"
            fill="#fdf8f2"
          />
        </svg>
      </div>

      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <div className="services-header-badge">
            <HiOutlineSparkles size={14} />
            <span>Our Approach</span>
          </div>
          <h2 className="services-title">
            What We <span className="services-title-accent">Focus On</span>
          </h2>
          <p className="services-subtitle">
            Four essential pillars that build confident, curious, and capable
            young readers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="service-card"
                style={{ "--delay": `${index * 100}ms` } as CSSProperties}
              >
                <div className="service-card-inner">
                  <div className="service-icon-wrapper">
                    <div className="service-icon-bg" aria-hidden="true" />
                    <Icon className="service-icon" size={32} />
                  </div>

                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>

                  <div className="service-card-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Decorative bottom curve */}
      <div className="services-curve-bottom" aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0C240 80 480 120 720 100C960 80 1200 20 1440 40V120H0V0Z"
            fill="#5a3a6e"
          />
        </svg>
      </div>
    </section>
  );
}