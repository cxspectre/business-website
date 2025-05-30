"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

const ContactForm = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      // In a real implementation, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Message sent successfully",
        description: "Thank you for reaching out. We'll get back to you soon.",
        variant: "default",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-pearl mb-2">
          Name <span className="text-dusty-rose">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-glass-fill border border-glass-border focus:border-dusty-rose focus:bg-blush-mist/5 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-pearl mb-2">
          Email <span className="text-dusty-rose">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-glass-fill border border-glass-border focus:border-dusty-rose focus:bg-blush-mist/5 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-pearl mb-2">
          Company (optional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-glass-fill border border-glass-border focus:border-dusty-rose focus:bg-blush-mist/5 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-pearl mb-2">
          Message <span className="text-dusty-rose">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full p-3 rounded-lg bg-glass-fill border border-glass-border focus:border-dusty-rose focus:bg-blush-mist/5 focus:outline-none transition-colors resize-none"
        ></textarea>
      </div>

      <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}

export default ContactForm
