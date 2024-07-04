import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./component/Navbar";
import ProviderTheme from "./component/ProviderTheme";

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
      <body className="h-auto">
        <ProviderTheme>
          <Navbar />
          <main>{children}</main>
        </ProviderTheme>
      </body>
    </html>
  );
}
