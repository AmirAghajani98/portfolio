import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amir Mohammad Aghajnai",
  description: "web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen sm:overflow-hidden">
      {children}
      </body>
    </html>
  );
}
