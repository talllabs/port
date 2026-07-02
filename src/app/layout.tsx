import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Alex's Long List — LGBTQ Guide to Lisbon & Portugal",
    template: "%s | Alex's Long List",
  },
  description:
    "The curated LGBTQ guide to Lisbon and Portugal. Discover queer venues, events, beaches, health services, and essential visitor info. Updated monthly.",
  keywords: ["LGBTQ Lisbon", "gay Lisbon", "queer Portugal", "gay guide Lisbon", "LGBTQ travel Portugal"],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Alex's Long List",
    title: "Alex's Long List — LGBTQ Guide to Lisbon & Portugal",
    description:
      "The curated LGBTQ guide to Lisbon and Portugal. Venues, events, map, and essential info.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-text-primary antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
