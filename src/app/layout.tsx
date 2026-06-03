import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "SESEGERitu | Minuman Herbal",
  description:
    "Minuman herbal segar dari bunga telang, bunga rosella yang dipadukan dengan berbagai rempah pilihan dan menggunakan gula singkong sebagai pemanis alami yang rendah kalori.",
  openGraph: {
    type: "website",
    url: "https://sesegeritu.my.id",
    title: "SESEGERitu | Minuman Herbal",
    description:
      "Minuman herbal segar dari bunga telang, bunga rosella yang dipadukan dengan berbagai rempah pilihan dan menggunakan gula singkong sebagai pemanis alami yang rendah kalori.",
    siteName: "SESEGERitu",
    images: [{ url: "/assets/brand.webp" }],
  },
};

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${fraunces.variable} ${plusJakartaSans.variable}`}
    >
      <body suppressHydrationWarning={true} className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
