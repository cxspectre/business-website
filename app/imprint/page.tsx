export default function Imprint() {
  return (
    <div className="flex flex-col items-center pt-32 pb-24">
      <div className="w-full max-w-3xl px-6">
        <div className="glass-card p-8 md:p-12 bg-midnight">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Imprint</h1>

          <div className="space-y-6 text-pearl/90">
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Details</h2>
            <p>
              Tanja Drefke Consult
              <br />
              Dr. Lelykade 158 S
              <br />
              2583CN Den Haag
              <br />
              The Netherlands
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
            <p>
              Phone: +31 (0)70 74 45 88 8
              <br />
              Email: info@td-consult.info
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">VAT ID</h2>
            <p>
              BTW: NL 8637 40.996.B.01
              <br />
              KvK: 85785091
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Responsible for content</h2>
            <p>
              Tanja Drefke
              <br />
              Dr. Lelykade 158 S
              <br />
              2583CN Den Haag
              <br />
              The Netherlands
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Dispute resolution</h2>
            <p>
              The European Commission provides a platform for online dispute resolution (OS):
              https://ec.europa.eu/consumers/odr.
              <br />
              We are not willing or obliged to participate in dispute resolution proceedings before a consumer
              arbitration board.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Liability for Contents</h2>
            <p>
              As service providers, we are liable for own contents of these websites according to Paragraph 7, Sect. 1
              German Telemedia Act (TMG). However, according to Paragraphs 8 to 10 German Telemedia Act (TMG), service
              providers are not obligated to permanently monitor submitted or stored information or to search for
              evidences that indicate illegal activities.
            </p>

            <p className="text-sm text-pearl/70 mt-8">Last updated: May 9, 2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}
