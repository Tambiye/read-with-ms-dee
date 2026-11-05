"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "YOUR_WHATSAPP_NUMBER";

  const message = encodeURIComponent(
    "Hello DonDrive, I would like to enquire about automatic driving lessons."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DonDrive on WhatsApp"
    >
      <FaWhatsapp size={32} aria-hidden="true" />
     
    </a>
  );
}