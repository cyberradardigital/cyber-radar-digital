import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F1E2E] text-white">
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-16 md:py-24 lg:py-28 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8">
              Top 12 In-Demand<br />
              Cybersecurity Services
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-8 md:mb-10 max-w-md mx-auto md:mx-0 leading-relaxed">
              Protect your business from evolving cyber threats with the most advanced and globally recognized cybersecurity solutions.
            </p>
            <button className="bg-[#00B0FF] hover:bg-[#00D68F] text-white px-6 md:px-8 py-2.5 md:py-3 rounded transition-colors font-medium text-sm md:text-base">
              Get a Free Security Audit
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
            <div className="relative">
              <svg width="200" height="220" viewBox="0 0 250 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[250px] md:h-[280px]">
                {/* Shield outline */}
                <path d="M125 20 L220 60 L220 140 Q220 220 125 260 Q30 220 30 140 L30 60 Z" 
                      stroke="#00D68F" strokeWidth="3" fill="none" opacity="0.3"/>
                <path d="M125 30 L210 65 L210 140 Q210 210 125 245 Q40 210 40 140 L40 65 Z" 
                      stroke="#00D68F" strokeWidth="2" fill="none" opacity="0.5"/>
                {/* Inner shield */}
                <path d="M125 40 L200 75 L200 140 Q200 200 125 235 Q50 200 50 140 L50 75 Z" 
                      fill="#15283A" opacity="0.6"/>
                {/* Lock */}
                <rect x="100" y="140" width="50" height="60" rx="5" fill="#00D68F"/>
                <path d="M110 140 V125 Q110 110 125 110 Q140 110 140 125 V140" 
                      stroke="#00D68F" strokeWidth="8" fill="none" strokeLinecap="round"/>
                <circle cx="125" cy="165" r="6" fill="#0F1E2E"/>
                <rect x="122" y="165" width="6" height="20" fill="#0F1E2E"/>
                {/* Grid pattern */}
                <line x1="0" y1="0" x2="50" y2="50" stroke="#00D68F" strokeWidth="1" opacity="0.3"/>
                <line x1="200" y1="0" x2="250" y2="50" stroke="#00D68F" strokeWidth="1" opacity="0.3"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Top 12 In-Demand Cybersecurity Services */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-14 text-center">Our High-Demand Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">1. Managed Security & MDR</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              24×7 threat detection, incident response, and managed defense services.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">2. Cloud Security</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Comprehensive protection for AWS, Azure, and Google Cloud environments.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">3. Identity & Access Management</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Secure authentication, SSO, and privilege control across hybrid systems.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">4. Application & API Security</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Defend web, mobile, and API endpoints through DevSecOps integration.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">5. Data Security & Privacy Compliance</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Data encryption, governance, and GDPR/CCPA compliance consulting.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">6. Network Security / Zero-Trust</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Next-gen firewalls, SASE, and zero-trust network architecture design.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">7. IoT & OT Security</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Protect smart devices, industrial systems, and operational networks.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">8. Risk & Supply-Chain Security</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Third-party risk assessment and vendor security management.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">9. Incident Response & Forensics</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Rapid breach investigation and containment with expert forensics.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">10. Threat Intelligence & Hunting</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Proactive detection using global threat feeds and behavioral analytics.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">11. Security Awareness & Training</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Employee and developer training to prevent phishing and coding risks.
            </p>
          </div>
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] transition-all hover:transform hover:-translate-y-2">
            <div className="text-[#00D68F] text-lg font-semibold mb-3">12. Secure Cloud Migration</div>
            <p className="text-[#A7B6C5] text-sm leading-relaxed">
              Security assessment and compliance during digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-14 text-center md:text-left text-[#00B0FF]">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {/* Service 1 */}
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] hover:transform hover:-translate-y-2 transition-all">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4 L40 12 L40 24 Q40 34 24 44 Q8 34 8 24 L8 12 Z" 
                      stroke="#00D68F" strokeWidth="2" fill="none"/>
                <circle cx="24" cy="24" r="4" fill="#00D68F"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Threat Detection</h3>
            <p className="text-[#A7B6C5] text-sm mb-4">
              Identify and neutralize potential threats to your systems.
            </p>
            <a href="#" className="text-[#00D68F] hover:text-[#00B0FF] text-sm font-medium">
              Learn More →
            </a>
          </div>

          {/* Service 2 */}
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] hover:transform hover:-translate-y-2 transition-all">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="12" r="4" fill="#00D68F"/>
                <circle cx="12" cy="28" r="4" fill="#00D68F"/>
                <circle cx="36" cy="28" r="4" fill="#00D68F"/>
                <circle cx="24" cy="36" r="4" fill="#00D68F"/>
                <line x1="24" y1="16" x2="24" y2="32" stroke="#00D68F" strokeWidth="2"/>
                <line x1="24" y1="16" x2="14" y2="26" stroke="#00D68F" strokeWidth="2"/>
                <line x1="24" y1="16" x2="34" y2="26" stroke="#00D68F" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Network Security</h3>
            <p className="text-[#A7B6C5] text-sm mb-4">
              Educate and secure the culture heavily at your data.
            </p>
            <a href="#" className="text-[#00D68F] hover:text-[#00B0FF] text-sm font-medium">
              Learn More →
            </a>
          </div>

          {/* Service 3 */}
          <div className="bg-[#15283A] p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#00D68F] hover:transform hover:-translate-y-2 transition-all">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 8 L32 24 L24 40 L16 24 Z" 
                      stroke="#00D68F" strokeWidth="2" fill="none"/>
                <circle cx="24" cy="24" r="3" fill="#00D68F"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Incident Response</h3>
            <p className="text-[#A7B6C5] text-sm mb-4">
              Rapidly respond swiftly to cyber-security incidents.
            </p>
            <a href="#" className="text-[#00D68F] hover:text-[#00B0FF] text-sm font-medium">
              Learn More →
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="px-4 md:px-8 py-16 md:py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-14 text-center md:text-left text-[#00B0FF]">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <p className="text-[#A7B6C5] leading-relaxed text-base md:text-lg text-center md:text-left">
              We provide comprehensive cybersecurity solutions tailored to your business needs, ensuring robust protection against cyber threats.
            </p>
          </div>
          <div className="space-y-5 md:space-y-6">
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="8" stroke="#00D68F" strokeWidth="2" fill="none"/>
                <path d="M6 10 L9 13 L14 7" stroke="#00D68F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-gray-200 text-base md:text-lg">Expert Support</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="8" stroke="#00D68F" strokeWidth="2" fill="none"/>
                <path d="M6 10 L9 13 L14 7" stroke="#00D68F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-gray-200 text-base md:text-lg">Proactive Approach</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="8" stroke="#00D68F" strokeWidth="2" fill="none"/>
                <path d="M6 10 L9 13 L14 7" stroke="#00D68F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-gray-200 text-base md:text-lg">24/7 Monitoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="px-4 md:px-8 py-16 md:py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-14 text-center md:text-left text-[#00B0FF]">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* Case Study 1 */}
          <div className="bg-[#15283A] rounded-2xl overflow-hidden border border-gray-700 hover:border-[#00D68F] hover:transform hover:-translate-y-2 transition-all">
            <div className="h-40 md:h-48 bg-gradient-to-br from-[#0F1E2E] to-[#15283A] flex items-center justify-center">
              <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[120px] md:h-[120px]">
                <rect x="35" y="50" width="50" height="50" rx="5" stroke="#00D68F" strokeWidth="3" fill="none"/>
                <path d="M45 50 V40 Q45 25 60 25 Q75 25 75 40 V50" 
                      stroke="#00D68F" strokeWidth="6" fill="none" strokeLinecap="round"/>
                <circle cx="60" cy="70" r="5" fill="#00D68F"/>
                <rect x="57" y="70" width="6" height="18" fill="#00D68F"/>
              </svg>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Financial Services</h3>
              <p className="text-[#A7B6C5] text-sm md:text-base mb-4">
                Enter data company protection to protect sensitive banking data.
              </p>
              <a href="#" className="text-[#00D68F] hover:text-[#00B0FF] text-sm font-medium">
                Read More →
              </a>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-[#15283A] rounded-2xl overflow-hidden border border-gray-700 hover:border-[#00D68F] hover:transform hover:-translate-y-2 transition-all">
            <div className="h-40 md:h-48 bg-gradient-to-br from-[#0F1E2E] to-[#15283A] flex items-center justify-center">
              <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[120px] md:h-[120px]">
                <path d="M40 70 Q40 40 60 40 Q80 40 80 70" stroke="#00D68F" strokeWidth="3" fill="none"/>
                <circle cx="60" cy="70" r="15" stroke="#00D68F" strokeWidth="3" fill="none"/>
                <path d="M50 70 L55 75 L70 60" stroke="#00D68F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="35" y1="55" x2="45" y2="45" stroke="#00D68F" strokeWidth="2" opacity="0.5"/>
                <line x1="75" y1="45" x2="85" y2="55" stroke="#00D68F" strokeWidth="2" opacity="0.5"/>
              </svg>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Healthcare</h3>
              <p className="text-[#A7B6C5] text-sm md:text-base mb-4">
                Ensure traceable data and complying with industry regulations.
              </p>
              <a href="#" className="text-[#00D68F] hover:text-[#00B0FF] text-sm font-medium">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 text-[#00B0FF]">Get in Touch</h2>
            <form className="space-y-5 md:space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Name"
                  className="w-full bg-[#15283A] border border-gray-700 rounded px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base focus:outline-none focus:border-[#00D68F] transition-colors text-white placeholder-gray-500"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full bg-[#15283A] border border-gray-700 rounded px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base focus:outline-none focus:border-[#00D68F] transition-colors text-white placeholder-gray-500"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message"
                  rows="5"
                  className="w-full bg-[#15283A] border border-gray-700 rounded px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base focus:outline-none focus:border-[#00D68F] transition-colors resize-none text-white placeholder-gray-500"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full md:w-auto bg-[#00B0FF] hover:bg-[#00D68F] text-white px-6 md:px-8 py-2.5 md:py-3 rounded transition-colors font-medium text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center mt-8 md:mt-0">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-[#00B0FF]">Contact us</h3>
            <div className="space-y-4 md:space-y-5 text-[#A7B6C5] text-base md:text-lg">
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
