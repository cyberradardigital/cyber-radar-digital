import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-16 md:py-24 lg:py-28 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8">
              Advanced<br />
              Cyber Security<br />
              Solutions
            </h1>
            <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10 max-w-md mx-auto md:mx-0 leading-relaxed">
              Protect your business with cutting-edge security solutions and expert support.
            </p>
            <button className="bg-emerald-400 text-gray-900 px-6 md:px-8 py-2.5 md:py-3 rounded hover:bg-emerald-300 transition-colors font-medium text-sm md:text-base">
              Learn More
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
            <div className="relative">
              <svg width="200" height="220" viewBox="0 0 250 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[250px] md:h-[280px]">
                {/* Shield outline */}
                <path d="M125 20 L220 60 L220 140 Q220 220 125 260 Q30 220 30 140 L30 60 Z" 
                      stroke="#2d7a6b" strokeWidth="3" fill="none" opacity="0.3"/>
                <path d="M125 30 L210 65 L210 140 Q210 210 125 245 Q40 210 40 140 L40 65 Z" 
                      stroke="#3d9b89" strokeWidth="2" fill="none" opacity="0.5"/>
                {/* Inner shield */}
                <path d="M125 40 L200 75 L200 140 Q200 200 125 235 Q50 200 50 140 L50 75 Z" 
                      fill="#1a3d3d" opacity="0.6"/>
                {/* Lock */}
                <rect x="100" y="140" width="50" height="60" rx="5" fill="#3d9b89"/>
                <path d="M110 140 V125 Q110 110 125 110 Q140 110 140 125 V140" 
                      stroke="#3d9b89" strokeWidth="8" fill="none" strokeLinecap="round"/>
                <circle cx="125" cy="165" r="6" fill="#0a1628"/>
                <rect x="122" y="165" width="6" height="20" fill="#0a1628"/>
                {/* Grid pattern */}
                <line x1="0" y1="0" x2="50" y2="50" stroke="#2d7a6b" strokeWidth="1" opacity="0.3"/>
                <line x1="200" y1="0" x2="250" y2="50" stroke="#2d7a6b" strokeWidth="1" opacity="0.3"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-14 text-center md:text-left">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {/* Service 1 */}
          <div className="bg-[#0f1f33] p-6 md:p-8 rounded-lg border border-gray-800 hover:border-emerald-400 transition-all">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4 L40 12 L40 24 Q40 34 24 44 Q8 34 8 24 L8 12 Z" 
                      stroke="#3d9b89" strokeWidth="2" fill="none"/>
                <circle cx="24" cy="24" r="4" fill="#3d9b89"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Threat Detection</h3>
            <p className="text-gray-400 text-sm mb-4">
              Identify and neutralize potential threats to your systems.
            </p>
            <a href="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
              Learn More →
            </a>
          </div>

          {/* Service 2 */}
          <div className="bg-[#0f1f33] p-6 md:p-8 rounded-lg border border-gray-800 hover:border-emerald-400 transition-all">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="12" r="4" fill="#3d9b89"/>
                <circle cx="12" cy="28" r="4" fill="#3d9b89"/>
                <circle cx="36" cy="28" r="4" fill="#3d9b89"/>
                <circle cx="24" cy="36" r="4" fill="#3d9b89"/>
                <line x1="24" y1="16" x2="24" y2="32" stroke="#3d9b89" strokeWidth="2"/>
                <line x1="24" y1="16" x2="14" y2="26" stroke="#3d9b89" strokeWidth="2"/>
                <line x1="24" y1="16" x2="34" y2="26" stroke="#3d9b89" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Network Security</h3>
            <p className="text-gray-400 text-sm mb-4">
              Educate and secure the culture heavily at your data.
            </p>
            <a href="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
              Learn More →
            </a>
          </div>

          {/* Service 3 */}
          <div className="bg-[#0f1f33] p-6 md:p-8 rounded-lg border border-gray-800 hover:border-emerald-400 transition-all">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 8 L32 24 L24 40 L16 24 Z" 
                      stroke="#3d9b89" strokeWidth="2" fill="none"/>
                <circle cx="24" cy="24" r="3" fill="#3d9b89"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Incident Response</h3>
            <p className="text-gray-400 text-sm mb-4">
              Rapidly respond swiftly to cyber-security incidents.
            </p>
            <a href="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
              Learn More →
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="px-4 md:px-8 py-16 md:py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-14 text-center md:text-left">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <p className="text-gray-400 leading-relaxed text-base md:text-lg text-center md:text-left">
              We provide comprehensive cybersecurity solutions tailored to your business needs, ensuring robust protection against cyber threats.
            </p>
          </div>
          <div className="space-y-5 md:space-y-6">
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="8" stroke="#3d9b89" strokeWidth="2" fill="none"/>
                <path d="M6 10 L9 13 L14 7" stroke="#3d9b89" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-gray-300 text-base md:text-lg">Expert Support</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="8" stroke="#3d9b89" strokeWidth="2" fill="none"/>
                <path d="M6 10 L9 13 L14 7" stroke="#3d9b89" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-gray-300 text-base md:text-lg">Proactive Approach</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="8" stroke="#3d9b89" strokeWidth="2" fill="none"/>
                <path d="M6 10 L9 13 L14 7" stroke="#3d9b89" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-gray-300 text-base md:text-lg">24/7 Monitoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="px-4 md:px-8 py-16 md:py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-14 text-center md:text-left">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* Case Study 1 */}
          <div className="bg-[#0f1f33] rounded-lg overflow-hidden border border-gray-800 hover:border-emerald-400 transition-all">
            <div className="h-40 md:h-48 bg-gradient-to-br from-[#0a1628] to-[#1a3d3d] flex items-center justify-center">
              <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[120px] md:h-[120px]">
                <rect x="35" y="50" width="50" height="50" rx="5" stroke="#2d7a6b" strokeWidth="3" fill="none"/>
                <path d="M45 50 V40 Q45 25 60 25 Q75 25 75 40 V50" 
                      stroke="#2d7a6b" strokeWidth="6" fill="none" strokeLinecap="round"/>
                <circle cx="60" cy="70" r="5" fill="#2d7a6b"/>
                <rect x="57" y="70" width="6" height="18" fill="#2d7a6b"/>
              </svg>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Financial Services</h3>
              <p className="text-gray-400 text-sm md:text-base mb-4">
                Enter data company protection to protect sensitive banking data.
              </p>
              <a href="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
                Read More →
              </a>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-[#0f1f33] rounded-lg overflow-hidden border border-gray-800 hover:border-emerald-400 transition-all">
            <div className="h-40 md:h-48 bg-gradient-to-br from-[#0a1628] to-[#1a3d3d] flex items-center justify-center">
              <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[120px] md:h-[120px]">
                <path d="M40 70 Q40 40 60 40 Q80 40 80 70" stroke="#2d7a6b" strokeWidth="3" fill="none"/>
                <circle cx="60" cy="70" r="15" stroke="#2d7a6b" strokeWidth="3" fill="none"/>
                <path d="M50 70 L55 75 L70 60" stroke="#2d7a6b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="35" y1="55" x2="45" y2="45" stroke="#2d7a6b" strokeWidth="2" opacity="0.5"/>
                <line x1="75" y1="45" x2="85" y2="55" stroke="#2d7a6b" strokeWidth="2" opacity="0.5"/>
              </svg>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Healthcare</h3>
              <p className="text-gray-400 text-sm md:text-base mb-4">
                Ensure traceable data and complying with industry regulations.
              </p>
              <a href="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="px-4 md:px-8 py-16 md:py-24 mb-0 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10">Get in Touch</h2>
            <form className="space-y-5 md:space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Name"
                  className="w-full bg-[#0f1f33] border border-gray-700 rounded px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full bg-[#0f1f33] border border-gray-700 rounded px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message"
                  rows="5"
                  className="w-full bg-[#0f1f33] border border-gray-700 rounded px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full md:w-auto bg-emerald-400 text-gray-900 px-6 md:px-8 py-2.5 md:py-3 rounded hover:bg-emerald-300 transition-colors font-medium text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center mt-8 md:mt-0">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">Contact us</h3>
            <div className="space-y-4 md:space-y-5 text-gray-400 text-base md:text-lg">
              <p>1254 Main Street<br />Anytown USA</p>
              <p>123-456-7890</p>
              <p className="break-all">info@cyberradar.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
