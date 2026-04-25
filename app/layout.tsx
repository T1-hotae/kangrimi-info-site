import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "강림이",
  description: "강림이 앱 공식 페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-gray-50 text-gray-800 font-sans min-h-screen">
        <header className="bg-white border-b border-gray-200">
          <Link href={"/"}>
            <div className="max-w-2xl mx-auto px-6 py-4 flex items-center gap-3">
              <span className="text-[#006DB8] font-bold text-xl">강림이</span>
              <span className="text-gray-400 text-sm">캠퍼스 공지 앱</span>
            </div>
          </Link>
        </header>
        <main className="max-w-2xl mx-auto px-6 py-10">{children}</main>
        <footer className="border-t border-gray-200 mt-16">
          <div className="max-w-2xl mx-auto px-6 py-6 text-center text-sm text-gray-400">
            © 2026 강림이. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
