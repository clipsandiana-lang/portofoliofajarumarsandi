import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fajarumarsandi.vercel.app"),

  title: {
    default: "Fajar Umarsandi | Trainer • Learning & Development • Digital Creator",
    template: "%s | Fajar Umarsandi",
  },

  description:
    "8+ years of experience in Learning & Development, Business Partnership, Account Management, Digital Strategy, and AI-powered Content Creation. Passionate about building people, growing businesses, and creating impactful digital experiences.",

  keywords: [
    "Fajar Umarsandi",
    "Portfolio",
    "Learning and Development",
    "Trainer",
    "Digital Creator",
    "AI Workflow",
    "Digital Strategy",
    "Business Development",
    "Content Creator",
    "Indonesia",
  ],

  authors: [
    {
      name: "Fajar Umarsandi",
    },
  ],

  publisher: "Fajar Umarsandi",
  creator: "Fajar Umarsandi",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Fajar Umarsandi",
    description:
      "Building People. Growing Business. Creating Digital Experiences.",
    url: "https://fajarumarsandi.vercel.app",
    siteName: "Fajar Umarsandi",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fajar Umarsandi — Trainer, Learning & Development, Digital Creator",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fajar Umarsandi",
    description:
      "Building People. Growing Business. Creating Digital Experiences.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}