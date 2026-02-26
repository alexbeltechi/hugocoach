import type { Metadata } from "next";
import { Bricolage_Grotesque, Sacramento } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

const sacramento = Sacramento({
  variable: "--font-sacramento",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Hugo | Leadership Coach",
  description:
    "Create your leadership blueprint. Executive coaching to uncover your hidden genius and architect your own future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${sacramento.variable} antialiased`}>{children}</body>
    </html>
  );
}
