import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nirayamtechnologies.com"),

  title: {
    default: "Nirayam Technologies",
    template: "%s | Nirayam Technologies",
  },

  description:
    "Nirayam Technologies helps businesses build scalable web applications, mobile apps, AI automation solutions, and custom software systems.",

  keywords: [
    "web development",
    "mobile app development",
    "AI automation",
    "software development company",
    "custom software",
    "Next.js development",
    "AI solutions",
  ],

  authors: [
    {
      name: "Nirayam Technologies",
    },
  ],

  creator: "Nirayam Technologies",

  openGraph: {
    title: "Nirayam Technologies",
    description:
      "Web Development, Mobile Apps, AI Automation and Custom Software Solutions.",
    url: "https://nirayamtechnologies.com",
    siteName: "Nirayam Technologies",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nirayam Technologies",
    description:
      "Web Development, Mobile Apps, AI Automation and Custom Software Solutions.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} select-none h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <>
            <NavBar />
            {children}
            <Footer />
          </>
        </ThemeProvider>

      </body>
    </html>
  );
}
