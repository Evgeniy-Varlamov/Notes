import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/app/Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Заметки",
  description: "Приложение для создания заметок",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className='container'>
              {children}
        </div>
      </body>
    </html>
  );
}
