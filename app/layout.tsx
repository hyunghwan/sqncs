import type { Metadata } from "next";
import { Chewy, Fredoka } from "next/font/google";
import "./globals.css";

const chewy = Chewy({
  weight: "400",
  variable: "--font-chewy",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sqncs.com"),
  title: "sqncs studio | Software from the Pacific",
  description: "A premium software studio situated around the Pacific Ocean. Est. 2022.",
  keywords: ["Software", "Design", "Web", "App", "Pacific", "Surfing", "Creative Studio"],
  openGraph: {
    title: "sqncs studio | Software from the Pacific",
    description: "A premium software studio situated around the Pacific Ocean. Est. 2022.",
    url: "https://sqncs.com",
    siteName: "sqncs studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "sqncs studio | Software from the Pacific",
    description: "A premium software studio situated around the Pacific Ocean. Est. 2022.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chewy.variable} ${fredoka.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
