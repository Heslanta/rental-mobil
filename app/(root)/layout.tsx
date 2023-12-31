import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { Inter } from "next/font/google";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";
import Topbar from "@/components/shared/Topbar";
import About from "@/components/About";
import Search from "@/components/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Rental",
  description: "Car Rental Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <main>
            <LeftSidebar />

            <section className="main-container">
              <div className="w-full">{children}</div>
            </section>
          </main>
          <About />
          {/* <Search /> */}
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
