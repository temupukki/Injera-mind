
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ChefHat,
  Compass,
  Settings,
  Search,
  Flame,
  Leaf,
  Wheat,
  Sparkles,
  Smile,
  Coffee,
  Pizza,
} from "lucide-react";

interface DashboardClientProps {
  user: {
    name: string;
    email: string;
    image?: string;
  };
}

type Filter = "vegetarian" | "quick" | "spicy" | "gluten-free";

export default function DashboardClient({ user }: DashboardClientProps) {
  const router = useRouter();
  const [ingredients, setIngredients] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<Filter[]>([]);

  const toggleFilter = (filter: Filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const handleGenerate = () => {
    const params = new URLSearchParams();
    if (ingredients) params.set("q", ingredients);
    selectedFilters.forEach((f) => params.append("filters", f));
    router.push(`/generate?${params.toString()}`);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-orange-100 via-amber-50 to-white">

      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-10 pointer-events-none">
        <div className="flex justify-around text-6xl mt-4 text-orange-300 rotate-12 scale-150">
          🥑 🍅 🧄 🥕 🧅 🫑
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-8 sm:py-12">
      
        <div className="mb-10 flex items-center gap-3">
          <div className="bg-orange-200 p-3 rounded-full border-4 border-white shadow-lg">
            <Smile size={32} className="text-orange-600" />
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-800">
              Hey, Chef! 
            </h1>
            <p className="text-lg text-gray-600 mt-1">Ready to cook something amazing today?</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          <QuickOption
            href="/dashboard/generate"
            icon={<ChefHat size={28} />}
            title="Generate Recipe"
            description="From your ingredients"
            color="orange"
          />
          <QuickOption
            href="/dashboard/explore"
            icon={<Compass size={28} />}
            title="Explore Recipes"
            description="Discover new dishes"
            color="amber"
          />
          <QuickOption
            href="/dashboard/preferences"
            icon={<Settings size={28} />}
            title="Preferences"
            description="Diet & health goals"
            color="orange"
          />
        </div>

        <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border-2 border-orange-200 p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles size={32} className="text-orange-500" />
            <h2 className="text-3xl font-bold text-gray-800">What's in your kitchen?</h2>
          </div>
          <p className="text-gray-600 text-lg mb-6">
            List the ingredients you have — we'll whip up a custom recipe just for you.
          </p>

          {/* Ingredient input – big textarea */}
          <div className="mb-8">
            <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-2 sr-only">
              Ingredients
            </label>
            <div className="relative">
              <Search className="absolute left-5 top-5 text-gray-400" size={24} />
              <textarea
                id="ingredients"
                rows={4}
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="e.g., chicken, tomatoes, onions, garlic, maybe some leftover rice..."
                className="w-full pl-14 pr-5 py-5 text-lg border-2 border-orange-200 rounded-3xl focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-400 bg-white/80 placeholder:text-gray-400 resize-none"
              />
            </div>
          </div>

          {/* Filters – chip buttons with icons */}
          <div className="mb-10">
            <p className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Flame size={16} className="text-orange-500" /> Optional filters (pick your vibe)
            </p>
            <div className="flex flex-wrap gap-3">
              <FilterChip
                label="🌱 Vegetarian"
                icon={<Leaf size={16} />}
                active={selectedFilters.includes("vegetarian")}
                onClick={() => toggleFilter("vegetarian")}
              />
              <FilterChip
                label="⚡ Quick (<30min)"
                icon={<Flame size={16} />}
                active={selectedFilters.includes("quick")}
                onClick={() => toggleFilter("quick")}
              />
              <FilterChip
                label="🔥 Spicy"
                icon={<Flame size={16} />}
                active={selectedFilters.includes("spicy")}
                onClick={() => toggleFilter("spicy")}
              />
              <FilterChip
                label="🌾 Gluten-Free"
                icon={<Wheat size={16} />}
                active={selectedFilters.includes("gluten-free")}
                onClick={() => toggleFilter("gluten-free")}
              />
            </div>
          </div>

          {/* Generate button – big, juicy, with animation */}
          <button
            onClick={handleGenerate}
            disabled={!ingredients.trim()}
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-5 px-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles size={24} />
            Generate My Recipe
          </button>
        </div>

        {/* Fun extra section – recent activity or just a cute tip */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 border-2 border-orange-100 shadow-lg flex items-start gap-4">
            <div className="bg-orange-200 p-3 rounded-full">
              <Coffee size={24} className="text-orange-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">Recently cooked</h3>
              <p className="text-gray-500">Your last recipes will show up here. Start generating!</p>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 border-2 border-orange-100 shadow-lg flex items-start gap-4">
            <div className="bg-orange-200 p-3 rounded-full">
              <Pizza size={24} className="text-orange-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">Tip of the day</h3>
              <p className="text-gray-600">Add a pinch of cinnamon to tomato sauce – you'll thank us later!</p>
            </div>
          </div>
        </div>

        {/* Subtle food icons at bottom */}
        <div className="mt-12 text-center text-gray-400 text-sm flex items-center justify-center gap-4">
          <span>🥘</span> <span>🍲</span> <span>🥗</span> <span>🍛</span> <span>🍜</span>
        </div>
      </div>
    </main>
  );
}

// Quick option card – more playful
function QuickOption({ href, icon, title, description, color }: { href: string; icon: React.ReactNode; title: string; description: string; color: string }) {
  return (
    <Link
      href={href}
      className="group bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl border-2 border-orange-100 hover:border-orange-300 transition-all hover:shadow-2xl flex items-center gap-5 transform hover:-translate-y-1"
    >
      <div className={`bg-${color}-100 p-4 rounded-2xl group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-800 text-xl">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </Link>
  );
}


function FilterChip({
  label,
  icon,
  active,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${
        active
          ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
          : "bg-white border-2 border-orange-200 text-gray-700 hover:bg-orange-50 hover:border-orange-300"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}