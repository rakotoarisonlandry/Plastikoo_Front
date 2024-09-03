"use client"; // Gardez cette ligne pour indiquer que c'est un Client Component

import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/section/header/Header";
import Footer from "@/components/section/footer/Footer";
import HeaderCommunity from "@/components/sectionCommunity/HeaderCommunity";
import { usePathname } from "next/navigation";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const noHeaderFooterRoutes = ["/community/login", "/community/register"];
  const communityRoutes = ["/community", "/community/someOtherPage"]; 

  return (
    <html lang="en">
      <body className={inter.className}>
        {!noHeaderFooterRoutes.includes(pathname) && !communityRoutes.includes(pathname) && <Header />}
        {communityRoutes.includes(pathname) && <HeaderCommunity />} 
        {children}
        {!noHeaderFooterRoutes.includes(pathname) && <Footer />}
      </body>
    </html>
  );
}
