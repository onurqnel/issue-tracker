import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { Inter } from "next/font/google";
import "./theme-config.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Issue Tracking Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} data-color-mode="light">
      <body>
        <Theme accentColor="purple" radius="large">
          <Navbar />
          <main className="p-5">{children}</main>
          <ThemePanel />
        </Theme>
      </body>
    </html>
  );
}
