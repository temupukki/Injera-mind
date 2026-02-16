"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Vegan,
  Beef,
  Fish,
  Wheat,
  Flame,
  Clock,
  Users,
  ChefHat,
  ArrowRight,
  Sparkles,
  Salad,
  Pizza,
  Coffee,
  Globe,
} from "lucide-react";

const categories = [
  { name: "Vegan", icon: Vegan, color: "bg-green-100 text-green-700" },
  { name: "Keto", icon: Beef, color: "bg-red-100 text-red-700" },
  { name: "Pescatarian", icon: Fish, color: "bg-blue-100 text-blue-700" },
  { name: "Gluten-Free", icon: Wheat, color: "bg-yellow-100 text-yellow-700" },
  { name: "Low-Carb", icon: Flame, color: "bg-orange-100 text-orange-700" },
  { name: "Quick (<30min)", icon: Clock, color: "bg-purple-100 text-purple-700" },
  { name: "Family", icon: Users, color: "bg-pink-100 text-pink-700" },
  { name: "Ethiopian", icon: Coffee, color: "bg-amber-100 text-amber-700" },
];

const recipes = [
  {
    id: 1,
    title: "Spiced Red Lentil Stew",
    cuisine: "Ethiopian",
    time: "35 min",
    calories: 320,
    protein: "18g",
    fat: "12g",
    image: <Salad size={48} className="text-orange-400" />,
    tags: ["Vegan", "Gluten-Free"],
    heritage: true,
  },
  {
    id: 2,
    title: "Berbere Chicken Tibs",
    cuisine: "Ethiopian",
    time: "45 min",
    calories: 480,
    protein: "42g",
    fat: "22g",
    image: <ChefHat size={48} className="text-orange-400" />,
    tags: ["High-Protein"],
    heritage: true,
  },
  {
    id: 3,
    title: "Mediterranean Quinoa Bowl",
    cuisine: "Mediterranean",
    time: "25 min",
    calories: 410,
    protein: "15g",
    fat: "18g",
    image: <Salad size={48} className="text-orange-400" />,
    tags: ["Vegan", "Gluten-Free"],
    heritage: false,
  },
  {
    id: 4,
    title: "Cauliflower Crust Pizza",
    cuisine: "Italian",
    time: "40 min",
    calories: 290,
    protein: "14g",
    fat: "16g",
    image: <Pizza size={48} className="text-orange-400" />,
    tags: ["Keto", "Gluten-Free"],
    heritage: false,
  },
  {
    id: 5,
    title: "Miso-Glazed Salmon",
    cuisine: "Japanese",
    time: "30 min",
    calories: 380,
    protein: "34g",
    fat: "22g",
    image: <Fish size={48} className="text-orange-400" />,
    tags: ["Pescatarian"],
    heritage: false,
  },
  {
    id: 6,
    title: "Shiro Wat",
    cuisine: "Ethiopian",
    time: "50 min",
    calories: 350,
    protein: "16g",
    fat: "14g",
    image: <Coffee size={48} className="text-orange-400" />,
    tags: ["Vegan", "Heritage"],
    heritage: true,
  },
];

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-white">
 
      <section className="bg-linear-to-b from-orange-50 to-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Explore <span className="text-orange-500">Recipes</span>
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Discover AI‑generated dishes, cultural classics, and healthy meals
            tailored to your taste.
          </p>

 
          <div className="max-w-3xl mx-auto relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by ingredient, cuisine, or diet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white shadow-sm"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition flex items-center gap-2">
              Search <Search size={16} />
            </button>
          </div>

          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-orange-200 rounded-full text-gray-700 hover:bg-orange-50 transition">
              <Filter size={16} /> All Filters
            </button>
            <button className="px-4 py-2 bg-white border border-orange-200 rounded-full text-gray-700 hover:bg-orange-50 transition">
              <span className="flex items-center gap-1"><Vegan size={16} /> Vegan</span>
            </button>
            <button className="px-4 py-2 bg-white border border-orange-200 rounded-full text-gray-700 hover:bg-orange-50 transition">
              <span className="flex items-center gap-1"><Beef size={16} /> High-Protein</span>
            </button>
            <button className="px-4 py-2 bg-white border border-orange-200 rounded-full text-gray-700 hover:bg-orange-50 transition">
              <span className="flex items-center gap-1"><Flame size={16} /> Low-Carb</span>
            </button>
            <button className="px-4 py-2 bg-white border border-orange-200 rounded-full text-gray-700 hover:bg-orange-50 transition">
              <span className="flex items-center gap-1"><Clock size={16} /> Quick</span>
            </button>
            <button className="px-4 py-2 bg-white border border-orange-200 rounded-full text-gray-700 hover:bg-orange-50 transition">
              <span className="flex items-center gap-1"><Globe size={16} /> Heritage</span>
            </button>
          </div>
        </div>
      </section>


      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Sparkles size={24} className="text-orange-500" /> Browse by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.name}
                className={`flex flex-col items-center p-4 rounded-2xl transition hover:scale-105 ${cat.color} bg-opacity-50 hover:bg-opacity-100 border border-transparent hover:border-orange-200`}
              >
                <Icon size={28} />
                <span className="text-sm font-medium mt-2 text-center">{cat.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Trending Recipes</h2>
          <Link href="#" className="text-orange-600 hover:text-orange-700 flex items-center gap-1 font-medium">
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-3xl shadow-md border border-orange-100 overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-orange-100 relative flex items-center justify-center">
                {recipe.image}
                {recipe.heritage && (
                  <span className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Globe size={12} /> Heritage
                  </span>
                )}
                <span className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {recipe.cuisine}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{recipe.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1"><Clock size={14} /> {recipe.time}</span>
                  <span className="flex items-center gap-1"><Flame size={14} /> {recipe.calories} kcal</span>
                  <span className="flex items-center gap-1"><Beef size={14} /> {recipe.protein}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {recipe.tags.map((tag) => (
                    <span key={tag} className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/recipe/${recipe.id}`}
                  className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition"
                >
                  View Recipe <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition">
            Load More Recipes
          </button>
        </div>
      </section>

      {/* AI Generated Suggestion */}
      <section className="bg-orange-50/50 py-16 px-4 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles size={32} className="text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Can't find what you're looking for?
            </h2>
            <p className="text-gray-600 mb-6">
              Let our AI generate a custom recipe based on your ingredients, diet, and cravings.
            </p>
            <Link
              href="/generate"
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition inline-flex items-center gap-2"
            >
              Generate with AI <Sparkles size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}