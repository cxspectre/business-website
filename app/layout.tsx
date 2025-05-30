import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ClientLayout from "@/components/client-layout"
import ErrorBoundary from "@/components/error-boundary"
import BetaBanner from "@/components/beta-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tanja Drefke Consult",
  description: "From strategy to AI-enabled go-live. Master complexity, accelerate value, scale with confidence.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-pearl antialiased`}>
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange={true}
          >
            <BetaBanner />
            <ClientLayout>
              <div className="flex min-h-screen flex-col pl-8">
                <Header />
                <main className="flex-1">
                  <ErrorBoundary>
                    {children}
                  </ErrorBoundary>
                </main>
                <Footer />
              </div>
            </ClientLayout>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
