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
  Star,
  Zap,
  Shield,
  User,
} from "lucide-react";

export default async function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white">
      {/* Hero Section with animated background */}
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        {/* Abstract background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-200/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full px-4 py-2 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">AI-Powered Culinary Assistant</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your AI Chef for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                Cultural & Healthy
              </span>{' '}
              Meals
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Snap ingredients, type what you have, or set your diet — get
              personalized recipes with nutrition facts, cultural twists, and
              AI-powered guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/explore"
                className="group bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                Start Cooking <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/signup"
                className="bg-white/80 backdrop-blur-sm border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-all hover:shadow-lg flex items-center justify-center"
              >
                Create Free Account
              </Link>
            </div>
          </div>

          {/* Input methods cards - improved design */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: Type, title: "Type ingredients", desc: '"chicken, tomatoes, onion"' },
              { icon: Camera, title: "Upload photo", desc: "Snap your fridge contents" },
              { icon: Sliders, title: "Dietary preferences", desc: "Vegan, keto, allergies" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex items-center gap-4 transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-3 rounded-full group-hover:scale-110 transition-transform">
                  <item.icon className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section (new) */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "10k+", label: "Recipes", icon: Salad },
            { value: "50k+", label: "Happy Cooks", icon: User },
            { value: "100+", label: "Cultures", icon: Globe },
            { value: "24/7", label: "AI Support", icon: Bot },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center border border-orange-100 shadow-sm">
              <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Recipe Card Showcase - improved */}
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

        <div className="max-w-md mx-auto group">
          <div className="bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-orange-200/50">
            <div className="h-48 bg-gradient-to-br from-orange-300 to-amber-300 relative flex items-center justify-center">
              <Salad size={64} className="text-white drop-shadow-lg" />
              <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                ✨ AI Generated
              </span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Spiced Lentil Stew</h3>
                  <p className="text-orange-600 flex items-center gap-1 mt-1">
                    <Globe size={16} /> Ethiopian Heritage
                  </p>
                </div>
                <div className="bg-green-100 px-3 py-1 rounded-full text-sm font-medium text-green-800">
                  Vegan
                </div>
              </div>
              <div className="flex gap-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-1">🔥 320 kcal</span>
                <span className="flex items-center gap-1">🥑 12g fat</span>
                <span className="flex items-center gap-1">💪 18g protein</span>
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
                <Link href="#" className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition-all group">
                  View full recipe <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with better cards */}
      <section className="bg-gradient-to-b from-orange-50/50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More than a recipe app
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover a complete culinary AI platform
            </p>
          </div>

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

      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-100 shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Trusted by home cooks everywhere</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah K.", text: "EnjeraMind helped me recreate my grandmother's Ethiopian recipes with modern twists. Amazing!" },
              { name: "Michael T.", text: "The AI planner saves me hours every week. I eat healthier and discover new cuisines." },
              { name: "Priya R.", text: "Finally an app that understands my dietary restrictions and suggests delicious meals." },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-orange-50">
                <div className="flex text-orange-400 mb-3">{"★".repeat(5)}</div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-800">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with gradient */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your cooking?
            </h2>
            <p className="text-orange-100 mb-8 max-w-xl mx-auto">
              Join thousands of home cooks who explore new flavors and eat healthier with EnjeraMind.
            </p>
            <Link
              href="/signup"
              className="inline-flex bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 items-center gap-2"
            >
              Get Started — It's Free <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group bg-white p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-2xl hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1">
      <div className="bg-gradient-to-br from-orange-100 to-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}