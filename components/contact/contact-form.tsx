"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: checked }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#b48a98] text-white rounded-full font-medium hover:bg-[#b48a98]/90 transition-all duration-300 group"
      >
        Send Message
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  )
} 