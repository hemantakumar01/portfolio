import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { SparklesPreview } from "@/components/Sprinkler";
import { ThemeProvider } from "@/components/TheamProvider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
const roboto = Roboto({
  weight: ["400", "500", "900", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hemanta Kumar",
  description: "A web designer and developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} px-2`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <ScrollProgressBar />
          <SparklesPreview />
          <Toaster position="top-center" />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
