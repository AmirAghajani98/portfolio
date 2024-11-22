import "./globals.css";
import "./i18";
import ProviderTheme from "./component/ProviderTheme";
import { Metadata } from "next";

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
    <html lang="en" className="scroll-smooth">
      <body>
        <ProviderTheme>
          <> {children}</>
        </ProviderTheme>
      </body>
    </html>
  );
}
