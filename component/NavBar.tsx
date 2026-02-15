"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Utensils,
  Home,
  Compass,
  Calendar,
  Globe,
  Heart,
  Bot,
  Menu,
  X,
  SearchSlash,
  CircleUserRound,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Explore", href: "/explore", icon: Compass },
  { name: "About us", href: "/about", icon: SearchSlash },
  { name: "Contact us", href: "/contact", icon: CircleUserRound},

];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between px-4 py-8 bg-white border-b border-orange-100 shadow-sm lg:px-8">
      <Link href="/" className="flex items-center gap-2 text-2xl font-semibold text-orange-600">
        <Utensils className="text-orange-500" size={28} />
        <span>EnjeraMind</span>
      </Link>

      <ul className="hidden md:flex gap-1 bg-orange-50/50 p-1 rounded-full">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                }`}
              >
                <item.icon size={18} />
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors">
          <Bot size={24} />
        
        </button>

        <div className="hidden sm:flex items-center gap-3">
          <Link href="/signin" className="text-gray-700 hover:text-orange-600 font-medium transition">
            Sign in
          </Link>
          <Link
            href="/signup"
            className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition"
          >
            Sign up
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 hover:text-orange-600"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden w-full mt-4 bg-white rounded-2xl shadow-lg border border-orange-100 p-3">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${
                      isActive
                        ? "bg-orange-500 text-white"
                        : "text-gray-700 hover:bg-orange-50"
                    }`}
                  >
                    <item.icon size={18} />
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <li className="border-t border-orange-100 pt-2 mt-2">
              <div className="flex flex-col gap-2 px-2">
                <Link
                  href="/signin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2 text-gray-700 hover:text-orange-600 font-medium"
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-orange-500 text-white py-2 rounded-full font-medium hover:bg-orange-600"
                >
                  Sign up
                </Link>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}