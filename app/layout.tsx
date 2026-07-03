import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import type { Viewport } from "next";
import OrganizationSchema from "@/components/seo/organization-secheme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://nirayam.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Nirayam Technologies | Custom Software & AI Solutions",
    template: "%s | Nirayam Technologies",
  },

  description: "Nirayam Technologies builds high-performance AI solutions, custom web applications, mobile apps, and business workflow automation software.",

  generator: "Next.js",
  classification: "Business",

  keywords: [
    "AI Solutions",
    "Custom Software Development",
    "Website Development",
    "Mobile App Development",
    "Business Automation",
    "Workflow Automation Software",
    "Nirayam Technologies"
  ],
  
  applicationName: "Nirayam Technologies",
  category: "Technology",
  referrer: "origin-when-cross-origin",
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // EXPLICIT CANONICAL ANCHOR
  alternates: {
    canonical: SITE_URL,
  },

  authors: [{ name: "Nirayam Technologies", url: SITE_URL }],
  creator: "Nirayam Technologies",
  publisher: "Nirayam Technologies",

  // ABSOLUTE OPEN GRAPH ARCHITECTURE
  openGraph: {
    title: "Nirayam Technologies | Custom Software & AI Solutions",
    description: "Architecting high-performance web applications, native mobile frameworks, and intelligent AI automation layers.",
    url: SITE_URL,
    siteName: "Nirayam Technologies",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Nirayam Technologies - Engineered for performance. Built for scale.",
      },
    ],
  },

  // ABSOLUTE TWITTER METRICS CARD
  twitter: {
    card: "summary_large_image",
    title: "Nirayam Technologies | Custom Software & AI Solutions",
    description: "Architecting high-performance web applications, native mobile frameworks, and intelligent AI automation layers.",
    images: [`${SITE_URL}/opengraph-image.png`],
  },

  // STRICT CRAWLER DIRECTIVES
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ADVANCED APPLE TOUCH SYSTEM
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nirayam Technologies",
  },

  // COMPLETE ICON COMPASS MATRIX
  // icons: {
  //   icon: [
  //     { url: "/favicon.ico" },
  //     { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  //     { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  //   ],
  //   apple: [
  //     {
  //       url: "/apple-touch-icon.png",
  //       sizes: "180x180",
  //     },
  //   ],
  //   shortcut: "/favicon.ico",
  // },

  // PROGRESSIVE WEB APP MATRIX LINK
  // manifest: `${SITE_URL}/manifest.webmanifest`,

  // CACHING METADATA
  archives: [SITE_URL],

  // APP DEEP LINKS MATRIX
  appLinks: {
    web: {
      url: SITE_URL,
      should_fallback: true,
    },
  },

  // PENDING VERIFICATION DEPLOYMENT SLOTS
  // verification: {
  //   google: "your-google-verification-hash-here",
  //   other: {
  //     "msvalidate.01": "your-bing-verification-hash-here",
  //   },
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" }
  ],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground flex flex-col font-sans">
        {/* INJECTED ORGANIZATION STRUCTURE MATRIX */}
        <OrganizationSchema />
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main className="grow flex flex-col w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}