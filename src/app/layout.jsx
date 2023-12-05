import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marketplace",
  description: "A marketplace for buying and selling digital goods.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-secondary`}
      >
        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
