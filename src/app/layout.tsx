import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/NavbarComponent";
// Import bootstrap first then global css so the bootstrap doesnt overwrite the global css
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RaihanKP Portfolio Website",
  description: "RaihanKP Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
