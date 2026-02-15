"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Globe,
  MapPin,
  Clock,
  Users,
  ChefHat,
  BookOpen,
  Heart,
  ArrowRight,
  Sparkles,
  Coffee,
  UtensilsCrossed,
  ScrollText,
  Camera,
  Flame,
} from "lucide-react";

const heritageRecipes = [
  {
    id: 1,
    title: "Doro Wat",
    culture: "Ethiopian",
    region: "Amhara",
    story: "A spicy chicken stew slow-cooked with berbere spice and hard-boiled eggs, traditionally served during holidays and celebrations.",
    time: "2.5 hours",
    difficulty: "Intermediate",
    image: <ChefHat size={48} className="text-orange-400" />,
    tags: ["Spicy", "Stew", "Festive"],
  },
  {
    id: 2,
    title: "Injera",
    culture: "Ethiopian",
    region: "Tigray",
    story: "The national flatbread, a spongy sourdough made from teff flour, used as both plate and utensil for scooping up stews.",
    time: "3 days",
    difficulty: "Advanced",
    image: <UtensilsCrossed size={48} className="text-orange-400" />,
    tags: ["Fermented", "Gluten-Free", "Staple"],
  },
  {
    id: 3,
    title: "Kitfo",
    culture: "Ethiopian",
    region: "Gurage",
    story: "A traditional dish of minced raw beef seasoned with mitmita and niter kibbeh, often served with greens and cheese.",
    time: "30 min",
    difficulty: "Expert",
    image: <Coffee size={48} className="text-orange-400" />,
    tags: ["Raw", "Special Occasion"],
  },
  {
    id: 4,
    title: "Misir Wot",
    culture: "Ethiopian",
    region: "Gonder",
    story: "A fragrant red lentil stew simmered with berbere and spiced clarified butter, a vegan staple in Ethiopian cuisine.",
    time: "1 hour",
    difficulty: "Easy",
    image: <BookOpen size={48} className="text-orange-400" />,
    tags: ["Vegan", "Lentils", "Everyday"],
  },
  {
    id: 5,
    title: "Tibs",
    culture: "Ethiopian",
    region: "Addis Ababa",
    story: "Sautéed meat (beef, lamb, or goat) with onions, peppers, and rosemary, often served sizzling on a hot plate.",
    time: "45 min",
    difficulty: "Medium",
    image: <Flame size={48} className="text-orange-400" />,
    tags: ["Meat", "Quick"],
  },
  {
    id: 6,
    title: "Shiro",
    culture: "Ethiopian",
    region: "Eritrea/Ethiopia",
    story: "A smooth, thick stew made from ground chickpeas or broad beans, cooked with garlic, onion, and berbere.",
    time: "1 hour",
    difficulty: "Easy",
    image: <ScrollText size={48} className="text-orange-400" />,
    tags: ["Vegan", "Comfort Food"],
  },
];

export default function HeritagePage() {
  const [selectedCulture, setSelectedCulture] = useState("all");

  const cultures = ["all", "Ethiopian", "Eritrean", "Moroccan", "Ghanaian"];

  const filteredRecipes =
    selectedCulture === "all"
      ? heritageRecipes
      : heritageRecipes.filter((r) => r.culture === selectedCulture);

  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-linear-to-b from-orange-50 via-white to-orange-50/30 pt-16 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/map-pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            Preserving Culinary Traditions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cultural <span className="text-orange-500">Heritage</span> Kitchen
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Explore authentic recipes passed down through generations. Each dish
            tells a story of tradition, celebration, and community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#recipes"
              className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
            >
              Discover Recipes <ArrowRight size={20} />
            </Link>
            <Link
              href="/submit-recipe"
              className="bg-white border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition flex items-center justify-center gap-2"
            >
              <Camera size={20} /> Share Your Heritage
            </Link>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-linear-to-br from-orange-500 to-orange-600 text-white">
              <Globe size={40} className="mb-4 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">The Soul of Ethiopian Cuisine</h2>
              <p className="text-orange-100 mb-6 leading-relaxed">
                Ethiopian food is more than sustenance—it's a communal experience.
                Meals are shared from a single platter, using injera to scoop up
                vibrant stews. Each region adds its own twist, preserving ancient
                techniques and spices.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1"><Clock size={16} /> 3000+ years</span>
                <span className="flex items-center gap-1"><Users size={16} /> Communal dining</span>
              </div>
            </div>
            <div className="p-8 md:p-12 bg-orange-50 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Featured Dish: Doro Wat</h3>
              <p className="text-gray-600 mb-4">
                Often called the "king of Ethiopian stews," Doro Wat is a spicy
                chicken stew that's a centerpiece of holidays and family gatherings.
                The slow cooking process and blend of berbere spices create an
                unforgettable depth of flavor.
              </p>
              <Link
                href="/recipe/doro-wat"
                className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition"
              >
                Learn the story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pt-20 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Globe className="text-orange-500" size={28} /> Recipes by Culture
          </h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {cultures.map((culture) => (
              <button
                key={culture}
                onClick={() => setSelectedCulture(culture)}
                className={`px-4 py-2 rounded-full font-medium transition whitespace-nowrap ${
                  selectedCulture === culture
                    ? "bg-orange-500 text-white"
                    : "bg-orange-50 text-gray-700 hover:bg-orange-100"
                }`}
              >
                {culture === "all" ? "All Cultures" : culture}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="recipes" className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-3xl border border-orange-100 overflow-hidden hover:shadow-xl transition group">
              <div className="h-48 bg-orange-100 relative flex items-center justify-center">
                {recipe.image}
                <span className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <MapPin size={12} /> {recipe.region}
                </span>
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                  {recipe.culture}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{recipe.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{recipe.story}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Clock size={12} /> {recipe.time}</span>
                  <span className="flex items-center gap-1"><ChefHat size={12} /> {recipe.difficulty}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {recipe.tags.map((tag) => (
                    <span key={tag} className="bg-orange-50 text-orange-700 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/recipe/${recipe.id}`}
                  className="text-orange-600 font-medium flex items-center gap-1 group-hover:gap-2 transition"
                >
                  Read Story <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-orange-50/70 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-orange-100">
            <Heart className="text-orange-500 mx-auto mb-4" size={48} />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Help Preserve Culinary Traditions
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Have a family recipe passed down through generations? Share it with
              our community and ensure your cultural heritage lives on.
            </p>
            <Link
              href="/submit-heritage"
              className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition inline-flex items-center gap-2"
            >
              <Camera size={20} /> Submit Your Heritage Recipe
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <MapPin className="text-orange-500" size={24} /> Culinary Map
        </h2>
        <div className="bg-orange-100 h-64 rounded-3xl flex items-center justify-center text-orange-700 border border-orange-200">
          <div className="text-center">
            <Globe size={48} className="mx-auto mb-2 opacity-50" />
            <p>Interactive map coming soon — explore recipes by region</p>
          </div>
        </div>
      </section>
    </main>
  );
}