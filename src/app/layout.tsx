import "./globals.css";
import type { Metadata } from "next";
import Provider from "./component/Provider";
import Navbar from "./component/Navbar";

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
        <Provider>
          <Navbar />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
