import { Mail, Phone, Linkedin } from "lucide-react"
import Link from "next/link"

const ContactSidebar = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <Mail size={20} className="text-primary-plum mr-3 mt-1" />
            <div>
              <p className="font-medium">Email</p>
              <a href="mailto:info@td-consult.info" className="text-pearl/80 hover:text-dusty-rose transition-colors">
                info@td-consult.info
              </a>
            </div>
          </li>
          <li className="flex items-start">
            <Phone size={20} className="text-primary-plum mr-3 mt-1" />
            <div>
              <p className="font-medium">Phone</p>
              <a href="tel:+31707445888" className="text-pearl/80 hover:text-dusty-rose transition-colors">
                +31 (0)70 74 45 88 8
              </a>
            </div>
          </li>
          <li className="flex items-start">
            <Linkedin size={20} className="text-primary-plum mr-3 mt-1" />
            <div>
              <p className="font-medium">LinkedIn</p>
              <a
                href="https://linkedin.com/in/tanjadrefke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pearl/80 hover:text-dusty-rose transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className="pt-6 border-t border-glass-border">
        <h3 className="text-lg font-medium mb-2">Office Hours</h3>
        <p className="text-pearl/80">Monday - Friday: 9:00 - 18:00 CET</p>
      </div>

      <div className="pt-6 border-t border-glass-border text-sm text-pearl/60">
        <p className="mb-2">
          <Link href="/privacy" className="hover:text-pearl transition-colors">
            Privacy Policy
          </Link>
        </p>
        <p>
          <Link href="/imprint" className="hover:text-pearl transition-colors">
            Imprint
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ContactSidebar
