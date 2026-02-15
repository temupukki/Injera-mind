// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaUtensils,
  FaHome,
  FaCompass,
  FaCalendarAlt,
  FaGlobeAfrica,
  FaHeart,
  FaRobot,
  FaUser,
  FaChevronDown,
  FaBars,
} from "react-icons/fa";

const navItems = [
  { name: "Home", href: "/", icon: FaHome },
  { name: "Explore", href: "/explore", icon: FaCompass },
  { name: "Planner", href: "/planner", icon: FaCalendarAlt },
  { name: "Heritage", href: "/heritage", icon: FaGlobeAfrica },
  { name: "Saved", href: "/saved", icon: FaHeart },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between px-4 py-3 bg-white/85 backdrop-blur-md border-b border-amber-100 shadow-sm lg:px-8">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 text-2xl font-semibold">
        <FaUtensils className="text-terracotta-600 text-3xl" />
        <span className="bg-gradient-to-br from-green-800 to-green-900 bg-clip-text text-transparent">
          EnjeraMind
        </span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-1 bg-amber-50/40 p-1 rounded-full backdrop-blur-sm">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all ${
                  isActive
                    ? "bg-terracotta-600 text-white shadow-md"
                    : "text-green-800 hover:bg-terracotta-600/10 hover:text-terracotta-700"
                }`}
              >
                <item.icon className={isActive ? "text-white" : "text-amber-700"} />
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Right side actions */}
      <div className="flex items-center gap-3">
        {/* Chatbot button */}
        <button className="relative flex items-center justify-center w-11 h-11 rounded-full bg-amber-50/70 text-green-700 hover:bg-terracotta-600 hover:text-white transition-colors">
          <FaRobot className="text-xl" />
          <span className="absolute -top-1 -right-1 bg-terracotta-600 text-white text-xs px-1.5 py-0.5 rounded-full border-2 border-white">
            ✨
          </span>
        </button>

        {/* Profile dropdown (simplified) */}
        <button className="hidden sm:flex items-center gap-2 bg-amber-50/70 pl-2 pr-4 py-1 rounded-full hover:bg-amber-100/80 transition">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-terracotta-500 to-amber-400 flex items-center justify-center text-white">
            <FaUser />
          </div>
          <span className="font-medium text-green-800">Meron</span>
          <FaChevronDown className="text-sm text-amber-700" />
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-3xl text-green-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full mt-4 bg-white rounded-2xl shadow-lg border border-amber-100 p-3">
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
                        ? "bg-terracotta-600 text-white"
                        : "text-green-800 hover:bg-amber-50"
                    }`}
                  >
                    <item.icon className={isActive ? "text-white" : "text-amber-700"} />
                    {item.name}
                  </Link>
                </li>
              );
            })}
            {/* Mobile profile option */}
            <li className="border-t border-amber-100 pt-2 mt-2">
              <button className="flex items-center gap-3 px-4 py-3 w-full text-left text-green-800 hover:bg-amber-50 rounded-xl">
                <FaUser className="text-amber-700" />
                <span>Meron</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}