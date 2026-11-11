import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "НАДО — найдите лучшее предложение",
  description: "Опишите, что вы ищете. Продавцы сами предложат варианты, а вы выберете лучший.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}