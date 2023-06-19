import "./globals.css";
import { Kumbh_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const kumb = Kumbh_Sans({
  weight: ["400", "700", "300"],
  subsets: ["latin", "latin-ext", "math"],
  style: ["normal"],
});

export const metadata = {
  title: "Akhil P A",
  description: "Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kumb.className}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
