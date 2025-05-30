import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Imprint | TD Consult',
  description: 'Legal information and contact details for Tanja Drefke Consult.',
}

export default function Imprint() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b48a98]/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#b48a98] rounded-full"></div>
              <span className="text-[#b48a98] font-medium text-sm">Legal Information</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Imprint
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Legal information according to Dutch law and EU regulations
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              
              {/* Company Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  Company Information
                </h2>
                <div className="space-y-2 text-gray-600">
                  <p className="font-semibold text-lg text-gray-900">Tanja Drefke Consult</p>
                  <p>Dr. Lelykade 158 S</p>
                  <p>2583CN Den Haag</p>
                  <p>The Netherlands</p>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  Contact Information
                </h2>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium text-gray-900">Phone:</span> +31 (0)70 74 45 88 8</p>
                  <p><span className="font-medium text-gray-900">Email:</span> info@td-consult.info</p>
                  <p><span className="font-medium text-gray-900">Website:</span> www.td-consult.info</p>
                </div>
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              
              {/* Legal & Registration */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  Legal & Registration
                </h2>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium text-gray-900">VAT ID:</span> NL 8637 40.996.B.01</p>
                  <p><span className="font-medium text-gray-900">Chamber of Commerce:</span> KvK 85785091</p>
                </div>
              </div>

              {/* Responsible for Content */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  Responsible for Content
                </h2>
                <div className="space-y-2 text-gray-600">
                  <p className="font-semibold text-gray-900">Tanja Drefke</p>
                  <p>Dr. Lelykade 158 S</p>
                  <p>2583CN Den Haag</p>
                  <p>The Netherlands</p>
                </div>
              </div>

            </div>

            {/* Legal Disclaimers */}
            <div className="space-y-12">
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  Liability for Contents
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    As service providers, we are liable for our own content on this website according to Dutch law and 
                    applicable EU regulations. We take care to ensure that the content on our website is accurate and 
                    up-to-date, but we cannot guarantee its completeness or accuracy.
                  </p>
                  <p>
                    Legal obligations to remove information or to block the use of information remain unaffected.
                    Liability is only possible from the time of knowledge of a specific violation of law.
                    Upon notification of such violations, we will remove this content immediately.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  Liability for Links
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Our website may contain links to external websites of third parties over whose content we have no influence.
                    Therefore, we cannot assume any liability for this external content. The respective provider or operator
                    of the linked pages is always responsible for the content of those pages.
                  </p>
                  <p>
                    The linked pages were checked for possible legal violations at the time of linking. No illegal content
                    was recognizable at the time of linking. However, permanent monitoring of the content of linked pages
                    cannot be expected without concrete indications of a violation of law.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  Copyright
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    The content and works on this website are subject to Dutch copyright law and applicable EU copyright
                    directives. Reproduction, editing, distribution, or any form of commercial use of such material
                    beyond the scope of copyright law requires the prior written consent of its respective author or creator.
                  </p>
                  <p>
                    Downloads and copies of this page are permitted only for private, non-commercial use. Insofar as the content
                    on this site was not created by the operator, the copyrights of third parties are respected.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  EU Dispute Resolution
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    The European Commission provides a platform for online dispute resolution (ODR): 
                    <a 
                      href="https://ec.europa.eu/consumers/odr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#b48a98] hover:text-[#9a7a88] underline ml-1 transition-colors"
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>
                  </p>
                  <p>
                    We are not willing or obliged to participate in dispute resolution proceedings before a consumer
                    arbitration board.
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
