import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

// Configure the font
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Select the weights you need
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Using IBM Plex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.className}>
        {children}
      </body>
    </html>
  );
}
