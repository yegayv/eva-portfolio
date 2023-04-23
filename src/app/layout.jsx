import { Inter as FontSans } from "next/font/google";
import { siteConfig } from "../config/site";
import "../styles/globals.css";
import { AppNavigation } from "../components/app-navigation";
import { AppFooter } from "../components/app-footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: "makcum",
      url: "/",
    },
  ],
  creator: "makcum",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "black" },
    { media: "(prefers-color-scheme: light)", color: "white" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "makcum",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontSans.variable}>
        <AppNavigation />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
