import "./globals.css";
import HeadTop from "./Component/HeadTop";
import HeadDown from "./Component/HeadDown";
import BeforLogin from "./Component/BeforLogin";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeadTop />
        <BeforLogin/>
        <HeadDown />
        {children}
      </body>
    </html>
  );
}
