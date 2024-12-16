import type { Metadata, Viewport } from "next";
import { Inter, Roboto } from "next/font/google";

// STYLE SHEETS SOURCE
import "./globals.css";

// WEBSITE PATH
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// FONT CONFIGURATIONS
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

// WEBSITE METADATA AND VIEWPORT
export const metadata: Metadata = {
  title: "Legal Trademark Office",
  description:
    "Legal Trademark Office offers professional trademark registration services to protect your business name, logo, and brand identity. Start safeguarding your brand today!",
  creator: "Zevi Tech",
  applicationName: "Legal Trademark Office",

  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        url: "/logos/logo-96x96.png",
        sizes: "96x96",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/logos/logo-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/logos/logo-512x512.png",
        sizes: "512x512",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/logos/logo.svg",
      },
      {
        rel: "icon",
        type: "image/x-icon",
        url: "/logos/favicon.ico",
      },
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        url: "/logos/favicon.ico",
      },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        url: "/logos/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${BASE_URL}`,
    title: "Legal Trademark Office",
    description:
      "Legal Trademark Office offers professional trademark registration services to protect your business name, logo, and brand identity. Start safeguarding your brand today!",
    siteName: "Legal Trademark Office",
    images: [
      {
        url: "/logos/logo.svg",
        width: 96,
        height: 58,
        alt: "Legal Trademark Office",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Legal Trademark Office",
    description:
      "Legal Trademark Office offers professional trademark registration services to protect your business name, logo, and brand identity. Start safeguarding your brand today!",
    images: "/logos/logo.svg",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
