import Link from "next/link";
import {
  FileText,
  UserCheck,
  Scale,
  AlertCircle,
  Shield,
  Mail,
  Globe,
  Ban,
  Hammer,
} from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-linear-to-b from-orange-50 to-white pt-20 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <FileText className="mx-auto mb-4 text-orange-500" size={48} />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of <span className="text-orange-500">Service</span>
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: February 15, 2025
          </p>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Please read these terms carefully before using EnjeraMind. By using
            our service, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="space-y-10">

          <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <UserCheck className="text-orange-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600">
                  By accessing or using EnjeraMind, you agree to be bound by these
                  Terms of Service and our Privacy Policy. If you do not agree, you
                  may not use the service.
                </p>
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
                  2. Changes to Terms
                </h2>
                <p className="text-gray-600">
                  We may modify these terms at any time. We'll notify you of material
                  changes via email or a notice on our website. Continued use after
                  changes constitutes acceptance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Scale className="text-orange-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  3. Eligibility
                </h2>
                <p className="text-gray-600">
                  You must be at least 13 years old to use EnjeraMind. If you are
                  under 18, you represent that you have parental consent. By using
                  the service, you represent that all information you provide is
                  accurate and complete.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <UserCheck className="text-orange-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  4. User Accounts
                </h2>
                <p className="text-gray-600 mb-3">
                  You are responsible for maintaining the confidentiality of your
                  account credentials. You agree to notify us immediately of any
                  unauthorized use. We are not liable for any loss or damage arising
                  from your failure to protect your account.
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
                  5. User Content
                </h2>
                <p className="text-gray-600 mb-3">
                  You retain ownership of any recipes, photos, or other content you
                  submit. By submitting, you grant EnjeraMind a worldwide,
                  royalty-free license to use, reproduce, and display your content
                  to operate and improve the service.
                </p>
                <p className="text-gray-600">
                  You represent that your content does not violate any third-party
                  rights or applicable laws.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Ban className="text-orange-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  6. Prohibited Uses
                </h2>
                <p className="text-gray-600 mb-3">
                  You may not use EnjeraMind to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful code or malware</li>
                  <li>Harass, abuse, or harm others</li>
                  <li>Impersonate any person or entity</li>
                  <li>Interfere with the service's operation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Hammer className="text-orange-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  7. Intellectual Property
                </h2>
                <p className="text-gray-600">
                  EnjeraMind, including its logo, design, and original content, is
                  owned by us and protected by copyright and trademark laws. You may
                  not copy, modify, or distribute our intellectual property without
                  written permission.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <AlertCircle className="text-orange-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  8. Termination
                </h2>
                <p className="text-gray-600">
                  We may suspend or terminate your access at any time for violations
                  of these terms or for any other reason. You may delete your account
                  at any time. Upon termination, your right to use the service ceases
                  immediately.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Shield className="text-orange-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  9. Disclaimer of Warranties
                </h2>
                <p className="text-gray-600">
                  EnjeraMind is provided "as is" without warranties of any kind. We
                  do not guarantee that recipes are accurate, safe, or suitable for
                  your dietary needs. You assume all risk from using our service.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Scale className="text-orange-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  10. Limitation of Liability
                </h2>
                <p className="text-gray-600">
                  To the maximum extent permitted by law, EnjeraMind shall not be
                  liable for any indirect, incidental, or consequential damages
                  arising from your use of the service.
                </p>
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
                  11. Governing Law
                </h2>
                <p className="text-gray-600">
                  These terms are governed by the laws of California, without regard
                  to its conflict of laws principles. Any disputes shall be resolved
                  in the courts of San Francisco County.
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
                  12. Contact Us
                </h2>
                <p className="text-gray-600">
                  For questions about these terms, please contact:
                </p>
                <p className="text-gray-800 mt-2">
                  Email: legal@enjeramind.com
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
            These terms constitute the entire agreement between you and EnjeraMind.
          </p>
        </div>
      </section>
    </main>
  );
}