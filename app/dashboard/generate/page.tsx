"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ChefHat,
  Leaf,
  Flame,
  Wheat,
  Sparkles,
  ArrowLeft,
  Loader2,
  Clock,
  Users,
  Heart,
  Share2,
  Bookmark,
  CheckCircle,
  XCircle,
  Shuffle,
} from "lucide-react";

// -------------------- Types --------------------
interface GenerateClientProps {
  user: {
    name: string;
    email: string;
    image?: string;
  };
  initialIngredients: string; // May be undefined on first visit
  initialFilters: string[]; // May be undefined
}

type Filter = "vegetarian" | "quick" | "spicy" | "gluten-free";

interface Recipe {
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  tags: string[];
  image?: string;
}

// -------------------- Constants --------------------
const ALLOWED_FILTERS: Filter[] = [
  "vegetarian",
  "quick",
  "spicy",
  "gluten-free",
];

// Type guard
const isValidFilter = (filter: string): filter is Filter =>
  ALLOWED_FILTERS.includes(filter as Filter);

// Mock recipe (simulates AI generation)
const MOCK_RECIPE: Recipe = {
  title: "Spiced Chicken & Rice Bowl",
  description:
    "A fragrant one-pot meal with tender chicken, aromatic spices, and fluffy rice – perfect for a cozy dinner.",
  prepTime: "15 min",
  cookTime: "25 min",
  servings: 4,
  ingredients: [
    "500g chicken thighs, diced",
    "1 cup basmati rice",
    "1 onion, chopped",
    "2 garlic cloves, minced",
    "1 tsp cumin",
    "1 tsp paprika",
    "½ tsp cinnamon",
    "2 cups chicken broth",
    "Salt and pepper to taste",
    "Fresh parsley for garnish",
  ],
  instructions: [
    "Heat oil in a large pot over medium heat. Add chicken and cook until browned. Remove and set aside.",
    "In the same pot, sauté onion and garlic until soft. Add spices and cook for 1 minute.",
    "Add rice and stir to coat. Pour in broth and bring to a boil.",
    "Return chicken to the pot, reduce heat, cover and simmer for 20 minutes until rice is tender.",
    "Fluff with fork, garnish with parsley, and serve.",
  ],
  nutrition: {
    calories: 480,
    protein: "32g",
    carbs: "45g",
    fat: "18g",
  },
  tags: ["High-Protein", "One-Pot", "Dairy-Free"],
};

// Random ingredient sets for the "Surprise Me" button
const SURPRISE_INGREDIENTS = [
  "chicken, tomatoes, onions, garlic, rice",
  "salmon, lemon, dill, potatoes, asparagus",
  "tofu, broccoli, carrots, soy sauce, noodles",
  "ground beef, bell peppers, black beans, corn, tortillas",
  "mushrooms, spinach, cream, pasta, parmesan",
];

// -------------------- Helper Components --------------------
function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
          : "bg-white border-2 border-orange-200 text-gray-700 hover:bg-orange-50 hover:border-orange-300"
      }`}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
function RecipeSkeleton() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl border-2 border-orange-200 overflow-hidden animate-pulse">
      <div className="h-48 bg-linear-to-r from-orange-200 to-amber-200" />
      <div className="p-6 sm:p-8 space-y-4">
        <div className="h-8 bg-orange-100 rounded w-3/4" />
        <div className="h-4 bg-orange-100 rounded w-1/2" />
        <div className="flex gap-4">
          <div className="h-4 bg-orange-100 rounded w-20" />
          <div className="h-4 bg-orange-100 rounded w-20" />
          <div className="h-4 bg-orange-100 rounded w-20" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <div className="h-6 bg-orange-100 rounded w-24" />
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 bg-orange-100 rounded w-full" />
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-6 bg-orange-100 rounded w-24" />
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-4 bg-orange-100 rounded w-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GenerateClient({
  user,
  initialIngredients = "",
  initialFilters = [],
}: GenerateClientProps) {
  const router = useRouter();

  const [ingredients, setIngredients] = useState(initialIngredients);
  const [selectedFilters, setSelectedFilters] = useState<Filter[]>(
    initialFilters.filter(isValidFilter),
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedRecipe, setGeneratedRecipe] = useState<Recipe | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (ingredients.trim() && !generatedRecipe && !isGenerating) {
      handleGenerate();
    }
  }, []);

  const toggleFilter = useCallback((filter: Filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter],
    );
  }, []);

  const handleGenerate = async () => {
    if (!ingredients.trim()) {
      setError("Please enter some ingredients first.");
      return;
    }

    setIsGenerating(true);
    setError(null);
    setGeneratedRecipe(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setGeneratedRecipe(MOCK_RECIPE);
    } catch (err) {
      setError("Failed to generate recipe. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleNewGeneration = () => {
    setGeneratedRecipe(null);
  };

  const surpriseMe = () => {
    const random =
      SURPRISE_INGREDIENTS[
        Math.floor(Math.random() * SURPRISE_INGREDIENTS.length)
      ];
    setIngredients(random);
  };

  const clearIngredients = () => {
    setIngredients("");
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 mb-6 transition group"
          aria-label="Back to Dashboard"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition"
          />
          Back to Dashboard
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <ChefHat size={32} className="text-orange-500" />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Recipe Generator
          </h1>
        </div>

        {!generatedRecipe ? (
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-orange-200 p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Sparkles size={24} className="text-orange-500" />
              What ingredients are you working with?
            </h2>
            <p className="text-gray-600 mb-6">
              List everything you have, and we&apos;ll create a custom recipe
              just for you.
            </p>

            <div className="mb-6">
              <label
                htmlFor="ingredients"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Ingredients (separate by commas)
              </label>
              <div className="relative">
                <textarea
                  id="ingredients"
                  rows={4}
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  placeholder="e.g., chicken, tomatoes, onions, garlic, rice"
                  className="w-full p-4 border-2 border-orange-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-400 bg-white/80 placeholder:text-gray-400 resize-none pr-24"
                  aria-describedby="ingredients-help"
                />
                <div className="absolute bottom-3 right-3 flex gap-2">
                  {ingredients && (
                    <button
                      onClick={clearIngredients}
                      className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition"
                      aria-label="Clear ingredients"
                    >
                      <XCircle size={18} />
                    </button>
                  )}
                  <button
                    onClick={surpriseMe}
                    className="p-2 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition"
                    aria-label="Surprise me with random ingredients"
                  >
                    <Shuffle size={18} />
                  </button>
                </div>
              </div>
              <p id="ingredients-help" className="text-sm text-gray-500 mt-2">
                Try &quot;Surprise Me&quot; for a random combination!
              </p>
            </div>

            <div className="mb-8">
              <p className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                <Flame size={16} className="text-orange-500" /> Optional filters
              </p>
              <div className="flex flex-wrap gap-3">
                <FilterChip
                  label="🌱 Vegetarian"
                  active={selectedFilters.includes("vegetarian")}
                  onClick={() => toggleFilter("vegetarian")}
                />
                <FilterChip
                  label="⚡ Quick (<30min)"
                  active={selectedFilters.includes("quick")}
                  onClick={() => toggleFilter("quick")}
                />
                <FilterChip
                  label="🔥 Spicy"
                  active={selectedFilters.includes("spicy")}
                  onClick={() => toggleFilter("spicy")}
                />
                <FilterChip
                  label="🌾 Gluten-Free"
                  active={selectedFilters.includes("gluten-free")}
                  onClick={() => toggleFilter("gluten-free")}
                />
              </div>
            </div>

            {error && (
              <div
                className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-2"
                role="alert"
              >
                <XCircle size={20} />
                <span>{error}</span>
              </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !ingredients.trim()}
              className="w-full bg-linear-to-r from-orange-500 to-amber-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              aria-busy={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 size={24} className="animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles size={24} />
                  Generate Recipe
                </>
              )}
            </button>

            <p className="text-xs text-gray-400 text-center mt-4">
              ⚡ This is a demo – recipes are simulated. In production,
              they&apos;d be generated by AI.
            </p>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                Your Custom Recipe
              </h2>
              <button
                onClick={handleNewGeneration}
                className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1 transition"
              >
                <Sparkles size={18} /> Generate New
              </button>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl border-2 border-orange-200 overflow-hidden">
              <div className="h-48 bg-linear-to-r from-orange-300 to-amber-300 relative flex items-center justify-center">
                <ChefHat size={64} className="text-white drop-shadow-lg" />
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center gap-1">
                  <Sparkles size={14} /> AI Generated
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {generatedRecipe.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {generatedRecipe.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock size={16} /> Prep: {generatedRecipe.prepTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} /> Cook: {generatedRecipe.cookTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={16} /> Serves {generatedRecipe.servings}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {generatedRecipe.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {selectedFilters.map((filter) => (
                    <span
                      key={filter}
                      className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium capitalize"
                    >
                      {filter}
                    </span>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">
                      Ingredients
                    </h4>
                    <ul className="space-y-2">
                      {generatedRecipe.ingredients.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle
                            size={16}
                            className="text-orange-500 mt-0.5 shrink-0"
                          />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">
                      Instructions
                    </h4>
                    <ol className="space-y-3 list-decimal list-inside">
                      {generatedRecipe.instructions.map((step, idx) => (
                        <li key={idx} className="text-gray-700">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-orange-100">
                  <h4 className="font-bold text-gray-800 mb-3">
                    Nutrition (per serving)
                  </h4>
                  <div className="flex flex-wrap gap-6">
                    <div>
                      <span className="text-gray-500">Calories</span>{" "}
                      <span className="font-semibold ml-2">
                        {generatedRecipe.nutrition.calories}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">Protein</span>{" "}
                      <span className="font-semibold ml-2">
                        {generatedRecipe.nutrition.protein}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">Carbs</span>{" "}
                      <span className="font-semibold ml-2">
                        {generatedRecipe.nutrition.carbs}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">Fat</span>{" "}
                      <span className="font-semibold ml-2">
                        {generatedRecipe.nutrition.fat}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition flex items-center gap-2">
                    <Heart size={18} /> Save Recipe
                  </button>
                  <button className="border border-orange-300 text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition flex items-center gap-2">
                    <Share2 size={18} /> Share
                  </button>
                  <button className="border border-orange-300 text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition flex items-center gap-2">
                    <Bookmark size={18} /> Add to Meal Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {isGenerating && !generatedRecipe && (
          <div className="mt-8">
            <RecipeSkeleton />
          </div>
        )}
      </div>
    </main>
  );
}
