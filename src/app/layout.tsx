import Script from 'next/script';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chandigarh University - Best University in Punjab, India",
  description: "Chandigarh University (CU) offers various UG and PG courses in Engineering, Management, Pharmacy, Law, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" />
        <link rel="stylesheet" href="/latest-assets/css/bootstrap-5-3-7.min.css" />
        <link rel="stylesheet" href="/latest-assets/css/all.min.css" />
        <link rel="stylesheet" href="/latest-assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/latest-assets/css/header-footer-2025.css" />
        <link rel="stylesheet" href="/latest-assets/css/landing-page-2025.css" />
        <link rel="stylesheet" href="/latest-assets/css/main-landing-2025.css" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Script src="https://code.jquery.com/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/latest-assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/latest-assets/js/plugins.js" strategy="afterInteractive" />
        <Script src="/latest-assets/js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
