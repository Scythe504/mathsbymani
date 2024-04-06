import type { Metadata } from "next";
import { Inter as FontSans} from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import { cn } from "@/lib/utils";

const font = FontSans({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "MathsByMani",
  description: "Best Mathematics Institute for JEE Mains and JEE Advance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased",font.variable)}>
          <Header/>
          {children}
        </body>
    </html>
  );
}
