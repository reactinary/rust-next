import { Navbar } from "@/components/navbar";
import { AppProviders } from "@/lib/providers/providers-app";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rust App",
  description: "Rust App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>
          <div>
            <Navbar />
            {children}
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
