import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Metadata } from "next"

export const metadata = {
  metadataBase: new URL("https://guntenaar.org"),
  title: {
    default: "Guntenaar Family",
    template: "%s | Guntenaar Family",
  },
  description: "Welcome to the Guntenaar family website",
  openGraph: {
    title: "Guntenaar Family",
    description: "Welcome to the Guntenaar family website",
    url: "https://guntenaar.org",
    siteName: "Guntenaar Family",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guntenaar Family",
    description: "Welcome to the Guntenaar family website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
