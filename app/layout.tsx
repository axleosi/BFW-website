import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from 'next/script';
import Head from 'next/head';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bamzy Footwear",
  description: "A footwear brand focused on catering to the unique needs of all our customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A footwear website that shows various footwears and allows for ordering" />
        <meta name="keywords" content="footwear, palm, shoes, slippers" />
        <meta name="author" content="Mbonu Michael" />

        <meta property="og:title" content="Bamzy footwear" />
        <meta property="og:description" content="A footwear website that shows various footwears and allows for ordering" />
        <meta property="og:image" content="/logo.jpg" />
        <meta property="og:url" content="https://bamzyfootwear.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="Footwear brand" />
        <meta name="twitter:title" content="Bamzy footwear" />
        <meta name="twitter:description" content="A footwear website that shows various footwears and allows for ordering" />
        <meta name="twitter:image" content="/logo.jpg" />

        {/* Title for the webpage */}
        <title>Bamzy Footwear</title>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Navbar/>
          {children}
          <Footer/>

          <Script 
          id="emailjs-script"
          strategy="afterInteractive" 
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
          </Script>
      </body>
    </html>
  );
}
