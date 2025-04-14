"use client";
import "./globals.css";
import { useState } from "react";
import { LucideDot, LucidePlus } from "lucide-react";
import UnderlinedNextLink from "@/components/UnderlinedNextLink";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSquare, setIsSquare] = useState(false);
  return (
    <html lang="en">
    <body className={`bg-[#1a1a1a] text-white scheme-dark transition-all duration-200 h-[100vh] ${isSquare ? "background-crosses" : "background-dots"}`}>
    <header>
        <nav className=" text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div>
                    <UnderlinedNextLink href="/" className="text-xl font-bold">Leo&apos;s Portfolio</UnderlinedNextLink>
                </div>
                <div className="flex items-center">
                    <UnderlinedNextLink href="/about">About</UnderlinedNextLink>
                    <UnderlinedNextLink href="/projects" className="ml-4">Projects</UnderlinedNextLink>
                    <UnderlinedNextLink href="/contact" className="ml-4">Contact</UnderlinedNextLink>
                    <button aria-label="Switch background" onClick={() => setIsSquare(!isSquare)} className="ml-4 cursor-pointer outline-1 rounded-md outline-[#494242] p-0.5 hover:outline-[#777070] transition-all">
                      {isSquare == true ? <LucideDot/> : <LucidePlus/>}
                    </button>
                </div>
            </div>
        </nav>
    </header>
    <div className="text-center">
        {children}
    </div>
</body>
</html>

  );
}
