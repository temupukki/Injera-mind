import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Cookie,
  Mail,
  Globe,
  FileText,
} from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-linear-to-b from-orange-50 to-white pt-20 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Shield className="mx-auto mb-4 text-orange-500" size={48} />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy <span className="text-orange-500">Policy</span>
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: February 15, 2025
          </p>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            At EnjeraMind, we take your privacy seriously. This policy describes
            how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="space-y-10">
          <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Database className="text-orange-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <strong className="text-gray-800">Personal Information:</strong> When
                    you sign up, we collect your name and email address. You may also
                    provide dietary preferences, health goals, and favorite recipes.
                  </p>
                  <p>
                    <strong className="text-gray-800">Usage Data:</strong> We collect
                    information about how you interact with EnjeraMind, including
                    recipes viewed, searches, and features used.
                  </p>
                  <p>
                    <strong className="text-gray-800">Device Information:</strong> We may
                    collect IP address, browser type, and device identifiers to improve
                    our service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Eye className="text-orange-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  How We Use Your Information
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>To personalize recipe recommendations and meal plans</li>
                  <li>To improve our AI algorithms and recipe generation</li>
                  <li>To communicate with you about updates and new features</li>
                  <li>To analyze usage patterns and enhance user experience</li>
                  <li>To protect against fraud and ensure security</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Globe className="text-orange-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Data Sharing
                </h2>
                <p className="text-gray-600 mb-3">
                  We do not sell your personal information. We may share data with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Service providers who help operate our platform (e.g., cloud hosting)</li>
                  <li>Legal authorities when required by law</li>
                  <li>Other users only if you choose to share recipes publicly</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Cookie className="text-orange-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Cookies & Tracking
                </h2>
                <p className="text-gray-600">
                  We use cookies to remember your preferences and analyze site traffic.
                  You can control cookies through your browser settings. Disabling
                  cookies may affect some features.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Lock className="text-orange-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Data Security
                </h2>
                <p className="text-gray-600">
                  We implement industry-standard security measures to protect your
                  information. However, no method of transmission over the Internet is
                  100% secure. We encourage you to use strong passwords and keep your
                  account credentials confidential.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <FileText className="text-orange-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Your Rights
                </h2>
                <p className="text-gray-600 mb-3">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Object to or restrict processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  To exercise these rights, please contact us at privacy@enjeramind.com.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Mail className="text-orange-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600">
                  If you have questions about this privacy policy, please reach out:
                </p>
                <p className="text-gray-800 mt-2">
                  Email: privacy@enjeramind.com
                </p>
                <p className="text-gray-800">
                  Address: 123 Culinary Lane, San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            This policy may be updated occasionally. We'll notify you of significant
            changes via email or a notice on our website.
          </p>
        </div>
      </section>
    </main>
  );
}