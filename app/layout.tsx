import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import { Theme } from "@radix-ui/themes";


export const metadata: Metadata = {
  title: "Issue Tracking Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <Navbar />
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
