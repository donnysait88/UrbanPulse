import Footer from "./Footer";
import Navbar from "./Navbar/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import SessionProvider from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UrbanPulse",
  description: "We make your worth it!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          <main className="p-10 w-full min-h-screen min-w-[300px] bg-gray-200">
            {children}
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
;
