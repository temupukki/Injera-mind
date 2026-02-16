"use client"

import { Utensils } from "lucide-react"
import Link from "next/link"

export default function DashFooter(){
    return(
          <footer className="border-t border-orange-100 py-8 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <Utensils className="text-orange-500" size={20} />
            <span>EnjeraMind — Your AI Culinary Companion</span>
          </div>
          <div className="flex gap-6">
            <Link href="/dashboard/about" className="hover:text-orange-600">About</Link>
            <Link href="/dashboard/privacy" className="hover:text-orange-600">Privacy</Link>
            <Link href="/dashboard/terms" className="hover:text-orange-600">Terms</Link>
          </div>
        </div>
      </footer>
    )
}