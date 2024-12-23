// import { Inter } from "next/font/google";
import "./globals1.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Guntenaar Family",
  description: "Welcome to the Guntenaar family website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={"inter.className"}>{children}</body>
    </html>
  );
}
