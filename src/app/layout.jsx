import { Inter } from "next/font/google";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AppJitsu - Web and Mobile Apps Development Agency, Midland, TX USA",
  description:
    "AppJitsu is a web and mobile apps development agency based in Midland, TX USA.",
  robots: { index: true, follow: true },
  manifest: "manifest.json",
  openGraph: {
    url: "https://appjitsu.net",
    title: "AppJitsu - Web and Mobile Apps Development Agency, Midland, TX USA",
    description:
      "AppJitsu is a web and mobile apps development agency based in Midland, TX USA.",
    siteName:
      "AppJitsu - Web and Mobile Apps Development Agency, Midland, TX USA",
    images: ["https://www.appjitsu.net/logo.png"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AppJitsu - Web and Mobile Apps Development Agency, Midland, TX USA",
    description:
      "AppJitsu is a web and mobile apps development agency based in Midland, TX USA.",
    images: ["https://www.appjitsu.net/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <script src="//code.tidio.co/pjwfauwzp7xthmndkn829uf2wtjrchl4.js" async></script>
      </head>
      <body className={inter.className}>
        <div className="min-h-screen overflow-hidden text-black">
          <div className="h-full mx-auto">
            <Nav />
            {children}
            <Footer />
          </div>
        </div>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      </body>
    </html>
  );
}
