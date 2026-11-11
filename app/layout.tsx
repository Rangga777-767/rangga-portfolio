import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portofolio Rangga",
  description: "Portofolio Rangga, siswa kelas X TKJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
