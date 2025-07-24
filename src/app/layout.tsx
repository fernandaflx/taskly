import type { Metadata } from "next";
import { Fira_Code, Work_Sans } from "next/font/google";
import "./globals.css";
import RootClient from "@/store/rootClient";
import { useState } from "react";
import { ReactQueryProvider } from "./provider/ ReactQueryProvider";

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taskly",
  description: "Your ultimate task and habits manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} ${workSans.variable} antialiased`}
      >
        <RootClient />
        <ReactQueryProvider>{children}</ReactQueryProvider>

      </body>
    </html>
  );
}
