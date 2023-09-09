import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "../globals.css";

// SEO
export const metadata = {
  title: "E-Rental",
  description: "Car Rental Application",
};

//const inter ini font optimization dari next js untuk ambil dari google font
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // kemudian return dari layout dan di wrap dengan clerk
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          {/* dimasukan inter di classname body supaya apply font di semua bodynya 
          dan juga diubah menjadi variabel supaya bisa menambahkan class yang lain */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
