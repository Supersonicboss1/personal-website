
import Link from "next/link";

interface UnderlinedLinkProps {
  children: React.ReactNode;
  href: string; // i.e. "/about"
  className?: string; // Optional className prop
}

export default function UnderlinedLink({ children, href, className }: UnderlinedLinkProps) {
  return (
    <div className={className}>
      <Link
        href={href}
        className="transition-all duration-300 text-white group hover:text-purple-300"
      >
        <span
          className="bg-left-bottom bg-gradient-to-r from-purple-600 to-purple-600 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-700 ease-out"
        >
          {children}
        </span>
      </Link>
    </div>
  );
}