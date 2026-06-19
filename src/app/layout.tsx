import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Nouvelle Maison | Luxury Real Estate in Accra, Ghana",
  description:
    "Nouvelle Maison is a digital-driven realty solutions provider in Accra, Ghana — offering premium property listings, acquisitions, and design services crafted for exceptional living.",
  keywords: [
    "luxury real estate",
    "Accra",
    "Ghana",
    "property listings",
    "Nouvelle Maison",
    "homes for sale",
    "realty",
  ],
  openGraph: {
    title: "Nouvelle Maison | Luxury Real Estate in Accra, Ghana",
    description:
      "Discover premium property listings and digital-driven realty solutions in Accra, Ghana.",
    siteName: "Nouvelle Maison",
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nouvelle Maison | Luxury Real Estate in Accra, Ghana",
    description:
      "Discover premium property listings and digital-driven realty solutions in Accra, Ghana.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
