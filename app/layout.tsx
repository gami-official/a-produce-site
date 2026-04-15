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
  metadataBase: new URL("https://www.a-produce.net"),

  title: {
    default: "A-PRODUCE株式会社｜福岡の中古車・レッカー・軽運送・物流",
    template: "%s｜A-PRODUCE株式会社",
  },

  description:
    "福岡でアメ車・輸入車販売、レッカー、軽運送、法人物流まで対応。A-PRODUCE株式会社が24時間365日対応でご相談を承ります。",

  keywords: [
    "福岡 中古車",
    "福岡 レッカー",
    "福岡 軽運送",
    "福岡 物流",
    "アメ車 福岡",
    "輸入車 福岡",
    "事故車 レッカー 福岡",
    "軽貨物 福岡",
    "法人配送 福岡",
    "A-PRODUCE株式会社",
    "Styling Garage",
  ],

  openGraph: {
    title: "A-PRODUCE株式会社",
    description:
      "福岡で中古車販売・レッカー・軽運送・物流まで対応。24時間365日対応。",
    url: "https://www.a-produce.net",
    siteName: "A-PRODUCE株式会社",
    locale: "ja_JP",
    type: "website",
  },

  verification: {
    google: "P-3UoahDAvp6Ew3-np4sIYT5P2bTzVmfmdKq7ZcEdW4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
