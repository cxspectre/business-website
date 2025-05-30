export default function Privacy() {
  return (
    <div className="flex flex-col items-center pt-32 pb-24">
      <div className="w-full max-w-3xl px-6">
        <div className="glass-card p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="space-y-6 text-pearl/90">
            <p>
              This Privacy Policy describes how Tanja Drefke Consult ("we", "us", or "our") collects, uses, and
              discloses your personal information when you visit our website or contact us for our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you fill out a contact form,
              subscribe to our newsletter, or communicate with us via email or phone.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Respond to your inquiries and provide the services you request</li>
              <li>Send you updates, newsletters, and marketing communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Cookies and Analytics</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and to hold certain
              information. We use a lightweight, cookie-free analytics solution (Vercel Web Analytics) to understand how
              visitors use our site.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, please be aware
              that no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as the
              right to access, correct, or delete your data.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at hello@tanjadrefke.com.</p>

            <p className="text-sm text-pearl/70 mt-8">Last updated: May 9, 2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}
