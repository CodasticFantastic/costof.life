import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RegisterSW from "./pwa-register";
import { ThemeSwitcher } from "@/theme/ThemeSwitcher";
import { ThemeInitializer } from "@/theme/themeInitializer.script";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "costof.life",
  description: "Global price tracker",
  manifest: "/manifest.json",
  icons: {
    icon: "/branding/favicon.png",
    apple: "/branding/favicon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "costof.life",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeInitializer />
        <RegisterSW />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="px-4 py-2 flex items-center justify-between">
          <Image
            src="/branding/logo-white-(bad-quality).webp"
            alt="logo"
            width={124}
            height={32}
          />{" "}
          <ThemeSwitcher variant="icon" />
        </header>
        {children}
      </body>
    </html>
  );
}
