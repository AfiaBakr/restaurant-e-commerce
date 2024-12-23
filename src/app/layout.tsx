import type { Metadata } from "next";
import { Inter, Poppins, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


const inter = Inter({ 
  subsets: ["latin"],
  weight:["100", "400", "700"]
 });
 
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "600"]
});

const greatvibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "A beautifully designed app using Next.js and Google Fonts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

