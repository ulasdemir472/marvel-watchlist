"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Film, Users } from "lucide-react";

export default function Navbar() {
    const { language, toggleLanguage, t } = useLanguage();
    const pathname = usePathname();

    return (
        <nav className="bg-comic-black text-white border-b-4 border-comic-red sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-comic-red px-3 py-1 font-black text-xl border-2 border-white transform -skew-x-6 group-hover:skew-x-0 transition-transform">
                            MCU
                        </div>
                        <span className="font-bold text-lg hidden sm:block">TRACKER</span>
                    </Link>

                    {/* Nav Links */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <NavLink href="/" active={pathname === "/"} icon={<Film size={18} />}>
                            {t("nav.watchlist")}
                        </NavLink>
                        <NavLink href="/characters" active={pathname === "/characters"} icon={<Users size={18} />}>
                            {t("nav.characters")}
                        </NavLink>

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="ml-2 sm:ml-4 px-3 py-1 bg-comic-yellow text-black font-bold border-2 border-white hover:bg-yellow-300 transition-colors flex items-center gap-1"
                        >
                            <span className="text-lg">{language === "en" ? "🇬🇧" : "🇹🇷"}</span>
                            <span className="hidden sm:inline">{language === "en" ? "EN" : "TR"}</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function NavLink({ href, active, icon, children }) {
    return (
        <Link
            href={href}
            className={`
        flex items-center gap-1 px-3 py-2 font-bold text-sm uppercase tracking-tight
        border-2 transition-all hover:-translate-y-0.5
        ${active
                    ? "bg-comic-red border-white text-white"
                    : "bg-transparent border-transparent hover:border-white/50"
                }
      `}
        >
            {icon}
            <span className="hidden sm:inline">{children}</span>
        </Link>
    );
}
