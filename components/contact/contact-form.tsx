"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import emailjs from '@emailjs/browser'

const topics = [
  { value: "strategy", label: "Strategy & Architecture" },
  { value: "ai", label: "AI & Automation" },
  { value: "risk", label: "Risk & Compliance" },
  { value: "team", label: "Team Enablement" },
  { value: "general", label: "General Inquiry" }
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    topic: "",
    message: "",
    agreed: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // EmailJS configuration
      const serviceId = 'service_td_consult'
      const templateId = 'template_contact_form'
      const publicKey = 'YOUR_PUBLIC_KEY' // You'll need to replace this

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        topic: formData.topic,
        message: formData.message,
        to_email: 'info@td-consult.info'
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus('success')
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        topic: "",
        message: "",
        agreed: false
      })
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
      setErrorMessage('Failed to send message. Please try again or contact us directly at info@td-consult.info')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: checked }))
  }

  // Success Message
  if (submitStatus === 'success') {
    return (
      <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-green-900 mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-green-700 mb-6">
          Thank you for reaching out. We'll get back to you within 1-2 business days.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-green-600 hover:text-green-800 font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-red-800 font-medium mb-1">Failed to send message</h4>
            <p className="text-red-700 text-sm">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Name Field */}
      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="peer w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#b48a98] transition-colors"
          placeholder="Full Name"
          required
          disabled={isSubmitting}
        />
        <label
          htmlFor="name"
          className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all 
            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 
            peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#b48a98]"
        >
          Full Name
        </label>
      </div>

      {/* Email Field */}
      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="peer w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#b48a98] transition-colors"
          placeholder="Business Email"
          required
          disabled={isSubmitting}
        />
        <label
          htmlFor="email"
          className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all 
            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 
            peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#b48a98]"
        >
          Business Email
        </label>
      </div>

      {/* Company Field */}
      <div className="relative">
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="peer w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#b48a98] transition-colors"
          placeholder="Company"
          disabled={isSubmitting}
        />
        <label
          htmlFor="company"
          className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all 
            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 
            peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#b48a98]"
        >
          Company (optional)
        </label>
      </div>

      {/* Topic Field */}
      <div className="relative">
        <select
          id="topic"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:border-[#b48a98] transition-colors appearance-none bg-white"
          required
          disabled={isSubmitting}
        >
          <option value="">Select a topic</option>
          {topics.map(topic => (
            <option key={topic.value} value={topic.value}>
              {topic.label}
            </option>
          ))}
        </select>
        <label
          htmlFor="topic"
          className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600"
        >
          Topic / Area of Interest
        </label>
      </div>

      {/* Message Field */}
      <div className="relative">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="peer w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#b48a98] transition-colors resize-none"
          placeholder="Message"
          required
          disabled={isSubmitting}
        />
        <label
          htmlFor="message"
          className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all 
            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 
            peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#b48a98]"
        >
          Message
        </label>
      </div>

      {/* Terms Agreement */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="agreed"
          name="agreed"
          checked={formData.agreed}
          onChange={handleCheckboxChange}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-[#b48a98] focus:ring-[#b48a98]"
          required
          disabled={isSubmitting}
        />
        <label htmlFor="agreed" className="text-sm text-gray-600">
          I agree to the{" "}
          <a href="/terms" className="text-[#b48a98] hover:text-[#8b4c5f] underline">
            terms
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-[#b48a98] hover:text-[#8b4c5f] underline">
            privacy policy
          </a>
          .
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || !formData.agreed}
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#b48a98] text-white rounded-full font-medium hover:bg-[#b48a98]/90 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  )
} 