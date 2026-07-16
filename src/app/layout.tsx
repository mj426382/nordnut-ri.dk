import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NordNutri.dk",
  description: "Supplement distribution in Denmark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
