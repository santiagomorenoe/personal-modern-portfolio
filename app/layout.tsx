"use client";

import { Inter, Libre_Baskerville } from "next/font/google";
import LoadingScreen from "@/components/ui/Loader";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/santi-logo.png" sizes="any" />
      </head>
      <body className={`${inter.variable} ${libreBaskerville.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
          {!loading && children}
        </ThemeProvider>
      </body>
    </html>
  );
}
