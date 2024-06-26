import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";

const roboto = Roboto({ weight: '400',subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spendr",
  description: "Your Companion in tracking your expenses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
          <body className={roboto.className}>
            <Header />
            <main className="container">{children}</main>
          </body>
      </html>
    </ClerkProvider>
  );
}
