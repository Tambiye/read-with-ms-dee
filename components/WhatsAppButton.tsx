"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "YOUR_WHATSAPP_NUMBER";

  const message = encodeURIComponent(
    "Hello DonDrive, I would like to enquire about automatic driving lessons."
  );

  return (
  <a
  href="https://wa.me/2348062768868?text=Hello%20I%20would%20like%20to%20inquire%20about..."
  className="whatsapp-button"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with Ms Dee on WhatsApp"
>
  <FaWhatsapp size={32} aria-hidden="true" />
</a>
  );
}