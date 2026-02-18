import Link from "next/link";
import {
  Camera,
  Sparkles,
  Salad,
  ChefHat,
  Globe,
  Calendar,
  Brain,
  Leaf,
  ArrowRight,
  Upload,
  Type,
  Sliders,
  Bot,
  Utensils,
} from "lucide-react";



export default async function Home() {

  return (
    <main className="min-h-screen bg-white">

      <section className="relative overflow-hidden bg-linear-to-br from-orange-50 via-white to-orange-50/30 px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your AI Chef for
              <span className="text-orange-500"> Cultural & Healthy</span> Meals
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10">
              Snap ingredients, type what you have, or set your diet — get
              personalized recipes with nutrition facts, cultural twists, and
              AI-powered guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/explore"
                className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                Start Cooking <ArrowRight size={20} />
              </Link>
              <Link
                href="/signup"
                className="bg-white border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition"
              >
                Create Free Account
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-orange-100 flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Type className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Type ingredients</h3>
                <p className="text-sm text-gray-500">"chicken, tomatoes, onion"</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-orange-100 flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Camera className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Upload photo</h3>
                <p className="text-sm text-gray-500">Snap your fridge contents</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-orange-100 flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Sliders className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Dietary preferences</h3>
                <p className="text-sm text-gray-500">Vegan, keto, allergies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What you'll get
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Instant AI‑generated recipe cards with step‑by‑step instructions and
            full nutrition breakdown.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
          <div className="h-48 bg-orange-200 relative flex items-center justify-center text-orange-600">
            <Salad size={64} />
            <span className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              AI Generated
            </span>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Spiced Lentil Stew
                </h3>
                <p className="text-orange-600 flex items-center gap-1 mt-1">
                  <Globe size={16} /> Ethiopian Heritage
                </p>
              </div>
              <div className="bg-green-100 px-3 py-1 rounded-full text-sm font-medium text-green-800">
                Vegan
              </div>
            </div>
            <div className="flex gap-4 text-sm text-gray-600 mb-4">
              <span>🔥 320 kcal</span>
              <span>🥑 12g fat</span>
              <span>💪 18g protein</span>
            </div>
            <p className="text-gray-700 mb-4">
              A fragrant one‑pot stew made with red lentils, berbere spice, and
              tomatoes. Perfect with injera or rice.
            </p>
            <div className="bg-orange-50 p-4 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <ChefHat size={18} className="text-orange-600" /> Quick steps
              </h4>
              <ol className="text-sm text-gray-700 list-decimal list-inside space-y-1">
                <li>Sauté onion, garlic, and ginger.</li>
                <li>Add berbere, lentils, and tomatoes.</li>
                <li>Simmer 25 min until lentils are soft.</li>
                <li>Serve with fresh herbs.</li>
              </ol>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                View full recipe <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-orange-50/50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            More than a recipe app
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="text-orange-600" size={32} />}
              title="AI Recipe Generation"
              description="No matching recipe? Our AI creates unique dishes from your ingredients and preferences."
            />
            <FeatureCard
              icon={<Leaf className="text-orange-600" size={32} />}
              title="Smart Nutrition"
              description="Automatic calorie and macro calculation for every generated recipe."
            />
            <FeatureCard
              icon={<Bot className="text-orange-600" size={32} />}
              title="AI Chatbot Guidance"
              description="Ask cooking questions, get substitutions, or cultural tips in real time."
            />
            <FeatureCard
              icon={<Globe className="text-orange-600" size={32} />}
              title="Cultural Heritage"
              description="Explore and preserve traditional dishes from around the world."
            />
            <FeatureCard
              icon={<Calendar className="text-orange-600" size={32} />}
              title="Weekly Meal Planner"
              description="Plan your week, generate shopping lists, and stay on track."
            />
            <FeatureCard
              icon={<Sparkles className="text-orange-600" size={32} />}
              title="Visual Recognition"
              description="Snap a photo of ingredients or a dish, and we'll identify and suggest recipes."
            />
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to transform your cooking?
        </h2>
        <p className="text-gray-600 mb-8">
          Join thousands of home cooks who explore new flavors and eat healthier
          with EnjeraMind.
        </p>
        <Link
          href="/signup"
          className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition inline-flex items-center gap-2"
        >
          Get Started — It's Free <ArrowRight size={20} />
        </Link>
      </section>
    
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition">
      <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}