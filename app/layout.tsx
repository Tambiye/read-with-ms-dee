import type { Metadata } from "next";

import { Lobster, Lilita_One } from "next/font/google";
import "./globals.css";
import "../styles/navbar.css";
import "../styles/hero.css";
import "../styles/bookingcta.css";
import "../styles/services.css";
import "../styles/whychooseus.css";
import "../styles/footer.css";


const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const lilitaOne = Lilita_One({
  variable: "--font-lilita",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "Read With Mrs Dee | Discover the Joy of Reading",
    template: "%s | Read With Mrs Dee",
  },
  description:
    "Welcome to Read With Mrs Dee, a welcoming space to discover books, nurture a love of reading, and enjoy stories that inspire, educate, and entertain.",
  applicationName: "Read With Mrs Dee",
  keywords: [
    "Read With Mrs Dee",
    "reading",
    "books",
    "reading community",
    "book recommendations",
    "love of reading",
  ],
  openGraph: {
    title: "Read With Mrs Dee | Discover the Joy of Reading",
    description:
      "Explore stories, discover books, and nurture a lifelong love of reading with Read With Mrs Dee.",
    siteName: "Read With Mrs Dee",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Read With Mrs Dee | Discover the Joy of Reading",
    description:
      "Discover books, explore stories, and celebrate the joy of reading.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en-GB" className={`${lobster.variable} ${lilitaOne.variable}`}>
  <body>{children}</body>
</html>
  );
}