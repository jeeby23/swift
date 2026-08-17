import type { Metadata } from "next";
import { IBM_Plex_Sans,EB_Garamond  } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

// Configure the font
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Select the weights you need
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  style: ["normal", "italic"],          // you're using italic on "Welcome To"
  variable: "--font-eb-garamond",       // exposes it as a CSS variable
})

export const metadata: Metadata = {
  title: "Next.js App",
  description: "swift meat empire",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
            <body className={`${ibmPlexSans.className} ${ebGaramond.variable}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
