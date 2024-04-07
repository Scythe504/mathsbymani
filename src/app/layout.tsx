import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import { cn } from "@/lib/utils";
// import NavBar from "@/components/new-headers";

const font = Inter({ subsets: ["latin"]});

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
      <body className={cn("min-h-screen bg-background antialiased",font.className)}>
          <Header/>
          {children}
        </body>
    </html>
  );
}
