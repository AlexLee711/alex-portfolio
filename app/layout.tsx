import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yi-Chian (Alex) Lee | Full-Stack Developer",
  description:
    "Portfolio of Yi-Chian (Alex) Lee, MSIS graduate student at UNC Chapel Hill focusing on Frontend Engineering, UX, and Scalable Web Systems.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${monoFont.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#fafaf9] text-stone-800 font-sans selection:bg-stone-200 selection:text-stone-900 flex flex-col">
        {children}
      </body>
    </html>
  );
}