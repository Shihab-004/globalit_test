import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://globalit.technology"),
  title: "Global IT Technology | Business IT & Telecommunications Services Melbourne",
  description:
    "Global IT Technology is an Australian family-owned IT and telecommunications company based in Melbourne. We provide managed IT, cloud services, cybersecurity, procurement, consultancy, and infrastructure solutions for businesses.",
  keywords:
    "IT support Melbourne, managed IT services, cloud services, cybersecurity, telecommunications, IT consultancy, network solutions, business IT",
  authors: [{ name: "Global IT Technology" }],
  openGraph: {
    title: "Global IT Technology | Business IT & Telecommunications Services",
    description:
      "Technology that keeps your business moving. Managed IT, cloud, security, and telecommunications solutions for Melbourne businesses.",
    url: "https://globalit.technology",
    siteName: "Global IT Technology",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/logo.webp",
        width: 800,
        height: 200,
        alt: "Global IT Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global IT Technology | Business IT & Telecommunications Services",
    description:
      "Technology that keeps your business moving. Managed IT, cloud, security, and telecommunications solutions for Melbourne businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `@media (pointer: fine) { *, *::before, *::after, html, body, a, button, input, textarea, select, label, [role="button"], .cursor-pointer { cursor: none !important; } }`,
          }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
