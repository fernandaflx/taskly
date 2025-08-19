import type { Metadata } from "next";
import { Fira_Code, Work_Sans } from "next/font/google";
import "./globals.css";
import RootClient from "@/store/rootClient";
import { ReactQueryProvider } from "./provider/ ReactQueryProvider";
import { Toast } from "@/components/Toast";

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
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>

        <Toast />

      </body>
    </html>
  );
}
