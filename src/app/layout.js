import { Metadata } from "next";
import { DM_Sans } from "next/font/google"
import localFont from 'next/font/local'
import "./globals.css";

const mango = localFont({ src: [{
  path: './HKGroteskWide-Medium.woff2',
  style: 'normal',
}
],
variable: ['--font-Mango'],
display: 'block'
 })
const dmsans = DM_Sans({ 
  weight: '400',
  subsets: ['latin'],
  display: 'block',
  variable: ['--font-DM']
 })
export const metadata = {
  title: "Lenny Cinema",
  description: "This is the homapage of lenny cinema",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className="bg-transparent">
      <body className={`${mango.className} `}>{children}</body>
    </html>
  );
}
