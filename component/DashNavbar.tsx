"use client";

import { useEffect, useState } from "react";
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
import { authClient } from "@/lib/auth-client";

const { data: session } = await authClient.getSession();

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Explore", href: "/dashboard/explore", icon: Compass },
  { name: "About us", href: "/dashboard/about", icon: SearchSlash },
  { name: "Contact us", href: "/dashboard/contact", icon: CircleUserRound },
];

export default function DashNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between px-4 py-8 bg-white border-b border-orange-100 shadow-sm lg:px-8">
      <Link
        href="/dashboard"
        className="flex items-center gap-2 text-2xl font-semibold text-orange-600"
      >
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
          <Link
            href="/dashboard/profile"
            className="flex items-center gap-2 text-gray-700 hover:text-orange-600 font-medium transition"
          >
            <img
              src="/default-avatar.png"
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover border"
            />
            <span>{mounted ? session?.user?.name : ""}</span>
          </Link>
          <button
            onClick={async () => {
              await authClient.signOut();
            }}
          >
            <Link
              href="/"
              className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition"
            >
              Log out
            </Link>
          </button>
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
