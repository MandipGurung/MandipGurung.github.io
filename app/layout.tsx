import "./globals.css";
import { HeroImg } from "@/assets";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://mandipgurung.com.np"),
  title: "Mandip Gurung ",
  description:
    "Bonjour!",
  openGraph: {
    images: [HeroImg.src],
    title: "Mandip Gurung",
    description:
      "Bonjour!",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics mode="production" debug={false} />
      </body>
    </html>
  );
}