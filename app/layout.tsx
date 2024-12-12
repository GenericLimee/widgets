import type { Metadata } from "next";
import "@/css/globals.css";

export const metadata: Metadata = {
  title: "eeeeee eeee eee",
  description: "eeeeeeeee ee eeeeee eeee eee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="overflow-hidden transition-transform">
        {children}
      </body>
    </html>
  );
}
