import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Nurbergen App",
  description: "A simple Telegram App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            style={
                {
                    '--tg-viewport-height': '100vh',
                    '--tg-viewport-stable-height': '100vh',
                } as React.CSSProperties
            }
            suppressHydrationWarning // важно для предотвращения mismatch
        >
        <head>
            {/* Telegram WebApp SDK */}
            <Script src="https://telegram.org/js/telegram-web-app.js" />
        </head>
        <body className="bg-[var(--tg-theme-bg-color)] text-[var(--tg-theme-text-color)]">
        {children}
        </body>
        </html>
    );
}
