import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | TD Consult',
  description: 'Learn how Tanja Drefke Consult protects and uses your personal information.',
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b48a98]/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#b48a98] rounded-full"></div>
              <span className="text-[#b48a98] font-medium text-sm">Data Protection</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn how we protect and use your personal information when you visit our website or contact us for our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-16">
              <p className="text-lg text-gray-600 leading-relaxed">
                This Privacy Policy describes how Tanja Drefke Consult ("we", "us", or "our") collects, uses, and
                discloses your personal information when you visit our website or contact us for our services.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  Information We Collect
                </h2>
                <div className="text-gray-600 leading-relaxed">
                  <p>
                    We collect information that you provide directly to us, such as when you fill out a contact form,
                    subscribe to our newsletter, or communicate with us via email or phone.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  How We Use Your Information
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Respond to your inquiries and provide the services you request</li>
                    <li>Send you updates, newsletters, and marketing communications</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  Cookies and Analytics
                </h2>
                <div className="text-gray-600 leading-relaxed">
                  <p>
                    We use cookies and similar tracking technologies to track activity on our website and to hold certain
                    information. We use a lightweight, cookie-free analytics solution (Vercel Web Analytics) to understand how
                    visitors use our site.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  Data Security
                </h2>
                <div className="text-gray-600 leading-relaxed">
                  <p>
                    We implement appropriate security measures to protect your personal information. However, please be aware
                    that no method of transmission over the Internet or electronic storage is 100% secure.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  Your Rights
                </h2>
                <div className="text-gray-600 leading-relaxed">
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information, such as the
                    right to access, correct, or delete your data.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  Data Retention
                </h2>
                <div className="text-gray-600 leading-relaxed">
                  <p>
                    We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected,
                    including for the purposes of satisfying any legal, accounting, or reporting requirements.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  International Data Transfers
                </h2>
                <div className="text-gray-600 leading-relaxed">
                  <p>
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  Changes to This Privacy Policy
                </h2>
                <div className="text-gray-600 leading-relaxed">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                    Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  Contact Us
                </h2>
                <div className="text-gray-600 leading-relaxed">
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at{' '}
                    <a 
                      href="mailto:info@td-consult.info" 
                      className="text-[#b48a98] hover:text-[#9a7a88] underline transition-colors"
                    >
                      info@td-consult.info
                    </a>
                    .
                  </p>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                <span className="font-medium">Last updated:</span> May 30, 2025
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
