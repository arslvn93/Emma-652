import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, LinkedinIcon as LinkedIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f3ef]">
      {/* Header/Navigation */}
      <header className="bg-[#2c2c2c] text-white py-6 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm font-light tracking-widest uppercase">
            <Link href="/" className="text-white">
              <h1 className="text-xl md:text-2xl font-normal tracking-wide font-serif">Emma</h1>
              <p className="text-xs tracking-[0.3em]">LUXURY HOME SELLER SPECIALIST - TORONTO</p>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 text-xs uppercase tracking-wider">
            <Link href="#" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="#" className="hover:text-gray-300">
              About
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Market Insights
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Seller's Guide
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="text-white">Menu</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-black/60 z-10">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Emma, Luxury Home Seller Specialist"
            fill
            priority
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide leading-tight">
              YOUR TRUSTED PARTNER
              <br />
              IN LUXURY HOME SELLING
            </h1>
            <p className="mt-6 text-sm md:text-base font-light tracking-wider max-w-md mx-auto">
              Expert guidance and results-driven strategies for luxury home sellers in Toronto.
            </p>
            <div className="mt-12 space-y-4">
              <Button className="bg-white text-black hover:bg-white/90 rounded-none px-8 py-6 text-xs tracking-widest uppercase">
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-none px-8 py-6 text-xs tracking-widest uppercase"
              >
                Download Market Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Bar */}
      <section className="py-6 bg-[#af9f94]/30 border-t border-b border-black/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <span className="text-center font-light text-sm md:text-base">MARKET ANALYSIS</span>
            <div className="hidden md:block h-6 w-px bg-black/70"></div>
            <span className="text-center font-light text-sm md:text-base">NEGOTIATION</span>
            <div className="hidden md:block h-6 w-px bg-black/70"></div>
            <span className="text-center font-light text-sm md:text-base">PROPERTY VALUATION</span>
            <div className="hidden md:block h-6 w-px bg-black/70"></div>
            <span className="text-center font-light text-sm md:text-base">STRATEGIC MARKETING</span>
          </div>
        </div>
      </section>

      {/* About Emma Section */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-black">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Emma, Luxury Home Seller Specialist"
                width={600}
                height={800}
                className="w-full h-full object-cover mix-blend-normal"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="uppercase tracking-widest text-sm mb-4">MEET EMMA</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Your Trusted Partner in Selling Luxury Homes in Toronto
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                With over 15 years of experience in Toronto's luxury home market, I've built a reputation for
                delivering exceptional results to luxury home sellers.
              </p>
              <p className="text-sm leading-relaxed mb-8">
                My approach combines comprehensive market insight, strategic negotiation, and a commitment to showcasing
                each property's unique appeal. Whether you're preparing to sell or seeking advice on maximizing your
                home's value, I'm here to ensure your success in the competitive Toronto real estate landscape.
              </p>
              <Button variant="outline" className="rounded-none text-xs tracking-widest uppercase px-6 self-start">
                LEARN MORE ABOUT EMMA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Market Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <p className="uppercase tracking-widest text-sm mb-4">MARKET INSIGHTS</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Understanding Today's
                <br />
                <span className="italic">Luxury Home Selling Market</span>
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                Toronto's luxury home selling market is dynamic and influenced by economic trends and evolving buyer
                expectations. Stay ahead with our latest market analysis and insights.
              </p>
              <p className="text-sm leading-relaxed mb-8">
                From neighborhood trends to innovative marketing tactics, our comprehensive market report provides all
                the tools you need to make informed decisions when selling your luxury home.
              </p>
              <Button variant="outline" className="rounded-none text-xs tracking-widest uppercase px-6 self-start">
                DOWNLOAD MARKET REPORT
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Luxury home market graph"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seller's Guide Section */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Luxury Home Seller's Guide</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-serif mb-4">Enhance Your Home’s Appeal</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Invest in professional staging and curb appeal improvements to make a lasting impression on buyers.
                </p>
                <div className="w-20 h-px bg-black/70 my-4"></div>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-serif mb-4">Strategic Pricing</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Leverage market analysis and expert pricing strategies to maximize your return.
                </p>
                <div className="w-20 h-px bg-black/70 my-4"></div>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-serif mb-4">Marketing Mastery</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Utilize high-end marketing tactics and exclusive networks to showcase your property to the right
                  audience.
                </p>
                <div className="w-20 h-px bg-black/70 my-4"></div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" className="rounded-none text-xs tracking-widest uppercase px-6">
                GET FULL SELLER'S GUIDE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-6">CLIENT TESTIMONIALS</p>
            <blockquote className="text-xl md:text-2xl font-serif italic mb-6">
              "Emma's expertise and dedication made our home selling experience truly exceptional."
            </blockquote>
            <p className="text-sm text-gray-600 mb-6">
              Working with Emma was an absolute pleasure. Her in-depth knowledge of the luxury market, attention to
              detail, and unwavering commitment to our needs made the entire process smooth and successful. We couldn't
              be happier with the results she delivered.
            </p>
            <p className="text-sm font-medium italic">— The Andersons, Toronto</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#f5f3ef]" id="contact">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Emma consulting with clients"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif mb-6">Let's Discuss Your Home Selling Goals</h2>
              <p className="text-lg md:text-xl font-serif mb-6">
                If you're considering selling your luxury home in Toronto, I'm here to offer expert guidance tailored to
                your needs.
              </p>
              <p className="text-sm text-gray-600 mb-8">
                Schedule a consultation today and explore how we can work together to achieve a successful sale, leveraging
                personalized advice and exclusive market insights.
              </p>
              <div className="space-y-4">
                <Input type="text" placeholder="Your Name" className="rounded-none focus:ring-black" />
                <Input type="email" placeholder="Your Email" className="rounded-none focus:ring-black" />
                <Input type="tel" placeholder="Your Phone" className="rounded-none focus:ring-black" />
                <Button className="w-full bg-black text-white hover:bg-black/90 rounded-none px-8 py-6 text-xs tracking-widest uppercase">
                  SCHEDULE CONSULTATION
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c2c2c] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="bg-white text-black p-6 mb-8">
                <h3 className="text-xl font-serif mb-1">Emma</h3>
                <p className="text-xs uppercase tracking-widest">LUXURY HOME SELLER - TORONTO</p>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Delivering expert guidance and personalized service for luxury home sellers in Toronto.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link href="#" className="text-gray-300 hover:text-white">
                  Home
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  About
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Market Insights
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Seller's Guide
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-6">Stay Informed</h3>
              <p className="text-sm text-gray-300 mb-4">
                Subscribe to our newsletter for exclusive market insights and luxury home selling tips.
              </p>
              <div className="flex mb-4">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border-white/30 rounded-none focus:border-white"
                />
                <Button className="bg-white text-black hover:bg-white/90 rounded-none ml-2">Subscribe</Button>
              </div>
              <div className="flex space-x-4 mt-6">
                <Link href="#" className="text-white hover:text-gray-300">
                  <Instagram size={18} />
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <Facebook size={18} />
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <LinkedIn size={18} />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 text-xs text-gray-400">
            © EMMA LUXURY HOME SELLER - TORONTO 2025. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  )
}