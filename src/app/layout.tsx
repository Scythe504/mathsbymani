import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "./config/site-config";
import NavBar from "@/components/new-headers";

const font = Inter({ subsets: ["latin"]});

export const metadata: Metadata = siteConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background antialiased",font.className)}>
          <NavBar/>
          {children}
        </body>
    </html>
  );
}
