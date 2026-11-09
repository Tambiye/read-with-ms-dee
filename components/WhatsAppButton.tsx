"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348062768868?text=Hello%20I%20would%20like%20to%20inquire%20about..."
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Read With Mrs Dee on WhatsApp"
    >
      <FaWhatsapp size={32} aria-hidden="true" />
    </a>
  );
}