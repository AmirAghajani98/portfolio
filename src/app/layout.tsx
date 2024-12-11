"use client";

import "./globals.css";
import "./i18";
import { Suspense } from "react";
import ProviderTheme from "./component/ProviderTheme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth">
      <body>
        <Suspense fallback={<div></div>}>
          <ProviderTheme>
            <>{children}</>
          </ProviderTheme>
        </Suspense>
      </body>
    </html>
  );
}
