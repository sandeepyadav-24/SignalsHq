import { Inter } from "next/font/google";
//import "../styles/globals.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SignalsHQ - AI-Powered Audit & Advisory Solutions",
  description:
    "SignalsHQ improves the performance of Audit & Advisory firms with AI agents to collect, extract, analyze, verify and reference documentation at scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
