import { Inter, Rubik_Glitch, Averia_Gruesa_Libre } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });
const rubikGlitch = Rubik_Glitch({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rubik-glitch',
});
const averia = Averia_Gruesa_Libre({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-averia',
});

export const metadata = {
  title: "Mann Patel | Full Stack Developer | Portfolio",
  description: "Creative Developer Portfolio",
  icons: {
    icon: '/favicon1.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${rubikGlitch.variable} ${averia.variable} bg-[#121212] text-white relative overflow-x-hidden`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
