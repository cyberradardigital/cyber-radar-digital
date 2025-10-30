import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PCIDSSCompliances() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="home" />

      {/* Hero Section with Banner Image */}
      <section className="relative bg-gradient-to-r from-[#0d2340] via-[#0f3557] to-[#0d2340] py-8 sm:py-12 md:py-16 lg:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in-down">PCI DSS Security Compliances</h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-up delay-200">Payment Card Industry Data Security Standards</p>
              <div className="pt-2 sm:pt-4">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <a href="/services" className="hover:text-emerald-400 transition-colors">Services</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <span className="text-emerald-400">PCI DSS Compliances</span>
                </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up delay-300">
              <img src="/PCI DSS Security Compliances.webp" alt="PCI DSS Security" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Full Width Image Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img src="/growtika-s8G0Gbjyw4M-unsplash.webp" alt="PCI DSS Compliance Process" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* PCI DSS Compliance Services */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-700 shadow-xl">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">PCI DSS Compliance Services</h2>
            </div>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
              <p>
                Payment Card business Data Security Standard (PCI DSS) is effectively payment acquired by many organizations that collect card and the customers' payment card Information. Previously with processing credit card data identity and regards data across the PCI compliance points across the business rules such as We follow processing your files needs of a safe compliance.
              </p>
              <p>
                We also provide many security and governance programs that lean on clients to may to find this be themes in their business management and here them in Feeling and offers the active security from law.
              </p>
            </div>
          </div>
        </div>

        {/* Services We Provide */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-emerald-400">We are glad to share backing in PCI DSS Compliances which covers:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {[
              "PCI DSS Gap Assessment",
              "Remediation Support",
              "PCI DSS Final Assessments",
              "Support for SMS/Virtualization Implementation (P2PE)",
              "Card-Hardware-Evidence"
            ].map((service, index) => (
              <div key={index} className={`bg-[#0d1a2d] border border-gray-600 rounded-lg p-4 sm:p-5 hover:border-emerald-400 hover:shadow-xl transition-all ${index === 4 ? 'md:col-span-2' : ''}`}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base">{service}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              Our IT compliance specialty partners help clients and businesses to identifying the vulnerabilities and assess and business risks and much compliance. We helps them in enabling the compliance more efficiently and efficiently.
            </p>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
