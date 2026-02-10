import type { Metadata } from "next";
import { Zen_Maru_Gothic, Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const zenMaru = Zen_Maru_Gothic({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-maru",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Poodle Glow | 顔タイプ診断",
  description: "作りすぎないのにちゃんと可愛い。あなただけの魅力を引き出す顔タイプ診断。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${zenMaru.variable} ${inter.variable} ${playfair.variable} font-sans antialiased text-foreground bg-background`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
