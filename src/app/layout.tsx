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
      <body>
        <ProviderTheme>
          <Navbar />
          <> {children}</>
        </ProviderTheme>
      </body>
    </html>
  );
}
