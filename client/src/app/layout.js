import Providers from "@/store/provider";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import store from "@/store";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers store={store}>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
