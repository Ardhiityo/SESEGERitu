import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sesegeritu.tridayasembadaind.com"),
  title: "Herbal Rosa",
  description: "Indonesian herbal infusion products inspired by botanical traditions.",
  openGraph: {
    type: "website",
    url: "https://www.sesegeritu.tridayasembadaind.com/",
    title: "Herbal Rosa",
    description: "Indonesian herbal infusion products inspired by botanical traditions.",
    siteName: "Herbal Rosa",
    images: [
      {
        url: "/assets/brand.webp",
        width: 1200,
        height: 630,
        alt: "Herbal Rosa Indonesian Herbal Infusion",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body suppressHydrationWarning={true} className="min-h-screen">
        {children}
      </body>
    </html>
  );
}