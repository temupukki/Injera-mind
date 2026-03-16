"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  User,
  Sparkles,
  Github,
  Twitter,
  Instagram,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero section - unchanged */}
      <section className="bg-linear-to-b from-orange-50 to-white pt-20 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Have questions, feedback, or a family recipe to share? We'd love to
            hear from you.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg border border-orange-100 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <MessageSquare className="text-orange-500" size={24} /> Send a Message
            </h2>

            {status === "success" && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                ✅ Message sent successfully!
              </div>
            )}
            {status === "error" && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                ❌ Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Meron Tesfaye"
                    className="w-full pl-10 pr-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="meron@example.com"
                    className="w-full pl-10 pr-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="I have a question about..."
                  className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us what's on your mind..."
                  className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right column - unchanged */}
          <div className="space-y-8">
            {/* Contact Info - unchanged */}
            <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Info</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Mail className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:hello@enjeramind.com" className="text-gray-800 font-medium hover:text-orange-600">
                      hello@enjeramind.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Phone className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:+15551234567" className="text-gray-800 font-medium hover:text-orange-600">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MapPin className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-800 font-medium">
                      123 Culinary Lane<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder - unchanged */}
            <div className="bg-orange-100 h-64 rounded-3xl flex items-center justify-center text-orange-700 border border-orange-200">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                <p>Interactive map coming soon</p>
                <p className="text-sm">Visit our headquarters in SF</p>
              </div>
            </div>

            {/* Social links - unchanged */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="bg-orange-100 p-3 rounded-full text-orange-600 hover:bg-orange-200 transition"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="bg-orange-100 p-3 rounded-full text-orange-600 hover:bg-orange-200 transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-orange-100 p-3 rounded-full text-orange-600 hover:bg-orange-200 transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA - unchanged */}
      <section className="bg-orange-50/50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="mx-auto mb-4 text-orange-500" size={32} />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Quick answers?</h2>
          <p className="text-gray-600 mb-6">
            Check our FAQ section for common questions about EnjeraMind.
          </p>
          <Link
            href="/faq"
            className="text-orange-600 font-medium hover:underline inline-flex items-center gap-1"
          >
            Visit FAQ page →
          </Link>
        </div>
      </section>
    </main>
  );
}