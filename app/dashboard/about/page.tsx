import Link from "next/link";
import {
  Heart,
  Sparkles,
  Globe,
  Salad,
  Bot,
  Users,
  ArrowRight,
  Camera,
  BookOpen,
  ChefHat,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      
      <section className="bg-linear-to-b from-orange-50 to-white pt-20 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-500">EnjeraMind</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're on a mission to make cooking personal, cultural, and healthy — 
            powered by AI, rooted in tradition.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/signup"
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Join the Community
            </Link>
            <Link
              href="/explore"
              className="border border-orange-500 text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition"
            >
              Explore Recipes
            </Link>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            EnjeraMind was born from a simple idea: what if AI could help you cook
            not just any meal, but meals that connect you to your heritage and
            support your health goals?
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Inspired by the Ethiopian tradition of sharing food from a communal
            platter, we built a platform that treats cooking as a bridge between
            cultures, generations, and modern wellness.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Today, EnjeraMind combines computer vision, natural language processing,
            and generative AI to turn your ingredients into personalized recipes —
            all while preserving the stories behind each dish.
          </p>
        </div>
        <div className="bg-orange-100 rounded-3xl p-8 flex items-center justify-center h-80">
          <Salad size={120} className="text-orange-600 opacity-50" />
        </div>
      </section>

      <section className="bg-orange-50/50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Heart className="text-orange-600" size={32} />}
              title="Heritage First"
              description="We believe recipes are more than instructions — they're stories. We help preserve cultural traditions through food."
            />
            <ValueCard
              icon={<Sparkles className="text-orange-600" size={32} />}
              title="AI for Good"
              description="Our AI respects your dietary needs and introduces you to new flavors, never compromising on taste or nutrition."
            />
            <ValueCard
              icon={<Users className="text-orange-600" size={32} />}
              title="Community"
              description="Cooking is better together. Share your family recipes, learn from others, and celebrate diversity."
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          How EnjeraMind Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Step number={1} title="Input" description="Type ingredients, upload a photo, or set your diet." icon={<Camera />} />
          <Step number={2} title="AI Analysis" description="We parse ingredients, detect food, and apply your filters." icon={<Bot />} />
          <Step number={3} title="Recipe Generation" description="We find matching recipes or create new ones with AI." icon={<ChefHat />} />
          <Step number={4} title="Enjoy & Share" description="Get nutrition info, save, share, or add to your meal plan." icon={<Heart />} />
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Meet the Minds
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A diverse team of chefs, AI researchers, and cultural storytellers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember name="Meron Tesfaye" role="Founder & CEO" />
            <TeamMember name="Elias Kebede" role="Head of AI" />
            <TeamMember name="Fatima Hassan" role="Cultural Curator" />
            <TeamMember name="David Chen" role="Lead Engineer" />
          </div>
        </div>
      </section>

 
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-orange-500 text-white rounded-3xl p-12 text-center">
          <Globe size={48} className="mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Be Part of the Story</h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            Join thousands of home cooks exploring heritage, health, and AI-powered creativity.
          </p>
          <Link
            href="/signup"
            className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition inline-flex items-center gap-2"
          >
            Get Started for Free <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 text-center">
      <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Step({ number, title, description, icon }: { number: number; title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="text-center">
      <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600 relative">
        <span className="absolute -top-2 -right-2 bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
          {number}
        </span>
        {icon}
      </div>
      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function TeamMember({ name, role }: { name: string; role: string }) {
  return (
    <div className="text-center">
      <div className="w-32 h-32 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center text-orange-700 text-4xl font-bold">
        {name[0]}
      </div>
      <h3 className="font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-orange-600">{role}</p>
    </div>
  );
}