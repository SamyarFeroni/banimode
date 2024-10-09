import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeadTop from "./Component/HeadTop";
import HeadDown from "./Component/HeadDown";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeadTop/>
        <HeadDown/>
        {children}
      </body>
    </html>
  );
}
