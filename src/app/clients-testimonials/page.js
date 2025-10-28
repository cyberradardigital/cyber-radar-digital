'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function ClientsTestimonials() {
  const testimonialsRef = useGsapStagger(6, { stagger: 0.15 });

  const testimonials = [
    {
      name: "Michael Chen",
      company: "TechCorp Solutions",
      role: "Chief Technology Officer",
      image: "MC",
      text: "Cyber Radar Systems transformed our security infrastructure. Their penetration testing uncovered vulnerabilities we didn't know existed, and their team worked tirelessly to secure our systems. Outstanding service!"
    },
    {
      name: "Sarah Johnson",
      company: "FinanceFirst Bank",
      role: "VP of Information Security",
      image: "SJ",
      text: "The digital forensics services provided by Cyber Radar Systems were instrumental in resolving a critical security incident. Their expertise and professionalism are unmatched in the industry."
    },
    {
      name: "David Rodriguez",
      company: "HealthCare Plus",
      role: "IT Director",
      image: "DR",
      text: "We've been working with Cyber Radar Systems for over three years. Their SOX IT Audit services and PCI DSS compliance support have been invaluable. They're not just vendors, they're partners."
    },
    {
      name: "Emily Watson",
      company: "RetailMax Corporation",
      role: "Security Manager",
      image: "EW",
      text: "The vulnerability management program implemented by Cyber Radar Systems has significantly improved our security posture. The team is responsive, knowledgeable, and always available when we need them."
    },
    {
      name: "James Thompson",
      company: "Global Manufacturing Inc.",
      role: "CISO",
      image: "JT",
      text: "Cyber Radar Systems' approach to cybersecurity is comprehensive and effective. Their 24/7 monitoring services give us peace of mind knowing our systems are protected around the clock."
    },
    {
      name: "Lisa Martinez",
      company: "Education Systems Ltd.",
      role: "Director of IT Security",
      image: "LM",
      text: "The training and awareness programs provided by Cyber Radar Systems have significantly improved our staff's security awareness. Their customized approach perfectly fits our organization's needs."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="company" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0d2340] to-[#0a1628] py-12 sm:py-16 md:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <AnimatedHeading animationType="fadeDown" delay={0.2} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What Our Clients Say
          </AnimatedHeading>
          <AnimatedParagraph animationType="fadeUp" delay={0.3} className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
            CYBER RADAR SYSTEMS › CLIENT TESTIMONIALS
          </AnimatedParagraph>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Introduction */}
        <AnimatedSection animationType="fadeUp" delay={0.2} className="mb-12 sm:mb-16 md:mb-20 text-center max-w-4xl mx-auto">
          <AnimatedParagraph animationType="fadeUp" delay={0.3} className="text-gray-300 text-base md:text-lg leading-relaxed">
            Don't just take our word for it. Here's what our valued clients have to say about their experience working with Cyber Radar Systems. We're proud to have helped organizations across various industries strengthen their cybersecurity posture.
          </AnimatedParagraph>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 sm:mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-6 sm:p-8 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all hover-lift"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <svg className="w-10 h-10 text-emerald-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
                <div className="w-12 h-12 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-900 font-bold text-sm">{testimonial.image}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-emerald-400 text-xs sm:text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] border border-emerald-400 rounded-lg p-8 sm:p-10 md:p-12 shadow-2xl mb-16 sm:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm sm:text-base">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-2">98%</div>
              <div className="text-gray-400 text-sm sm:text-base">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-2">10+</div>
              <div className="text-gray-400 text-sm sm:text-base">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm sm:text-base">Support Available</div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animationType="fadeUp" delay={0.4} className="text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Join Our Satisfied Clients?
          </h3>
          <p className="text-gray-400 text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let us help you strengthen your cybersecurity posture and protect your business from evolving threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-emerald-400 text-gray-900 px-8 py-3.5 rounded-lg hover:bg-emerald-300 transition-colors font-semibold text-sm sm:text-base inline-block"
            >
              Get Started Today
            </a>
            <a 
              href="/blog" 
              className="bg-transparent border-2 border-emerald-400 text-emerald-400 px-8 py-3.5 rounded-lg hover:bg-emerald-400 hover:text-gray-900 transition-colors font-semibold text-sm sm:text-base inline-block"
            >
              Learn More
            </a>
          </div>
        </AnimatedSection>

      </section>

      <Footer />
    </div>
  );
}
