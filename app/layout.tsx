
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
    default:
      "A-produce株式会社｜中古車・軽貨物運送・物流・内職・検品｜福岡・大阪",
    template: "%s｜A-produce株式会社",
  },

  description:
    "A-produce株式会社は福岡・大阪を拠点に、自動車販売・買取、軽貨物・一般貨物運送、倉庫・発送代行、内職・検品・セット組み、レッカーなど幅広いサービスを展開。法人の運送・物流・作業委託の無料見積もりも受付中。",

  keywords: [
    "A-produce株式会社",
    "福岡 中古車",
    "福岡 軽貨物",
    "福岡 軽運送",
    "福岡 運送会社",
    "福岡 スポット便",
    "福岡 チャーター便",
    "福岡 物流代行",
    "福岡 発送代行",
    "福岡 検品 外注",
    "福岡 内職 委託",
    "福岡 セット組み",
    "大阪 軽貨物",
    "大阪 物流",
    "福岡 レッカー",
    "Styling Garage",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "A-produce株式会社｜自動車・運送・物流・内職・検品",
    description:
      "クルマから、運送・物流・作業代行まで。福岡・大阪を拠点に幅広い事業を展開するA-produce株式会社。",
    url: "https://www.a-produce.net/",
    siteName: "A-produce株式会社",
    locale: "ja_JP",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
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
