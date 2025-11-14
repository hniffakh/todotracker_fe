import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Todo Tracker",
  description: "Simple Todo App with Next.js + Express + MySQL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen p-10">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold text-gray-700 flex items-center gap-2 mb-6 justify-center">
            🧠 To do Tracker</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
