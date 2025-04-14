import "./globals.css";
import UnderlinedNextLink from "@/components/UnderlinedNextLink";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`bg-[#1a1a1a] text-white scheme-dark transition-all duration-200 h-[100vh] background-dots`}>
    <header>
        <nav className=" text-white">
            <div className="container mx-auto flex justify-between items-center p-4 pr-0">
                <div>
                    <UnderlinedNextLink href="/" className="text-xl font-bold">Leo&apos;s Portfolio</UnderlinedNextLink>
                </div>
                <div className="flex items-center">
                    <UnderlinedNextLink href="/about">About</UnderlinedNextLink>
                    <UnderlinedNextLink href="/projects" className="ml-4">Projects</UnderlinedNextLink>
                    <UnderlinedNextLink href="/contact" className="ml-4">Contact</UnderlinedNextLink>
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
