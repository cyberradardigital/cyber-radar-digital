import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function WhoWeAre() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="company" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0d2340] to-[#0a1628] py-8 sm:py-12 md:py-16 lg:py-20 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 animate-fade-in-down">Who We Are</h1>
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider animate-fade-in-up delay-200">
            <a href="/" className="hover:text-emerald-400 transition-colors">CYBER RADAR SYSTEMS</a>
            <span className="mx-2 md:mx-3">›</span>
            <span className="text-emerald-400">WHO WE ARE</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 md:py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-20">
          {/* Illustration */}
          <div className="flex items-center justify-center p-4 md:p-8 order-2 md:order-1">
            <div className="relative w-full max-w-md">
              {/* Security Dashboard Illustration */}
              <svg width="100%" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Main dashboard cards */}
                <rect x="20" y="60" width="160" height="220" rx="8" fill="#1e3a5f" stroke="#3d9b89" strokeWidth="2" opacity="0.9"/>
                <rect x="200" y="100" width="180" height="200" rx="8" fill="#162a45" stroke="#3d9b89" strokeWidth="2" opacity="0.9"/>
                
                {/* Cloud with alert */}
                <ellipse cx="330" cy="50" rx="40" ry="28" fill="#e74c3c" opacity="0.9"/>
                <circle cx="305" cy="55" r="25" fill="#e74c3c" opacity="0.9"/>
                <circle cx="345" cy="60" r="20" fill="#e74c3c" opacity="0.9"/>
                
                {/* Shield with lock */}
                <path d="M290 160 L330 180 L330 230 Q330 255 290 275 Q250 255 250 230 L250 180 Z" fill="#3d9b89" opacity="0.8"/>
                <rect x="277" y="215" width="26" height="32" rx="3" fill="#0a1628"/>
                <path d="M280 215 V205 Q280 195 290 195 Q300 195 300 205 V215" stroke="#0a1628" strokeWidth="6" fill="none" strokeLinecap="round"/>
                
                {/* Profile/User icon */}
                <circle cx="100" cy="120" r="18" fill="#3498db"/>
                <path d="M80 170 Q80 150 100 150 Q120 150 120 170 Z" fill="#3498db"/>
                <rect x="90" y="135" width="20" height="3" fill="#162a45"/>
                <rect x="85" y="145" width="30" height="2" fill="#162a45"/>
                
                {/* Alert notification */}
                <circle cx="70" cy="210" r="25" fill="#e74c3c" opacity="0.9"/>
                <text x="70" y="220" fontSize="30" fill="white" textAnchor="middle" fontWeight="bold">!</text>
                
                {/* Security rating stars */}
                <circle cx="240" cy="170" r="6" fill="#f39c12"/>
                <circle cx="260" cy="170" r="6" fill="#f39c12"/>
                <circle cx="280" cy="170" r="6" fill="#f39c12"/>
                <circle cx="300" cy="170" r="6" fill="#f39c12"/>
                <circle cx="320" cy="170" r="6" fill="#f39c12"/>
                
                {/* Check shield */}
                <circle cx="320" cy="250" r="18" fill="#27ae60"/>
                <path d="M310 250 L316 256 L330 242" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                
                {/* Person figure */}
                <circle cx="360" cy="270" r="18" fill="#3498db"/>
                <rect x="346" y="290" width="28" height="45" rx="5" fill="#e74c3c"/>
                <rect x="338" y="298" width="12" height="35" fill="#3498db"/>
                <rect x="374" y="298" width="12" height="35" fill="#3498db"/>
                
                {/* Document lines on left card */}
                <line x1="40" y1="100" x2="120" y2="100" stroke="#3d9b89" strokeWidth="2"/>
                <line x1="40" y1="115" x2="110" y2="115" stroke="#3d9b89" strokeWidth="2"/>
                <line x1="40" y1="180" x2="90" y2="180" stroke="#3d9b89" strokeWidth="2"/>
                <line x1="40" y1="195" x2="100" y2="195" stroke="#3d9b89" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 md:space-y-6 order-1 md:order-2">
            <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
              Cyber Radar Systems is a privately-owned company, engaged in offering security solutions to corporate sector's data on Information Technology, Banking & Finance, Healthcare, Travel and in addition to manufacturing and service oriented companies in varied industrial verticals.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
              Our core team has more than 30 years of experience in the areas of Information Technology, IT-security & Compliance, IT Management & Program Management.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
              Considering the need to protect the Confidentiality, Integrity and Availability of the invaluable information systems, it is <span className="text-emerald-400 font-semibold">quintessential to have a security architecture designed in such a manner that there is an effective mechanism</span> from security domain perspective to ensure that necessary mechanisms are in place to protect the systems and prevent the compromise of the sensitive data.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
              Enterprise Risk management must be inherently based on broken Security Architecture, ISO / IEC 27001 and other applicable audit frameworks.
            </p>
          </div>
        </div>

        {/* Additional Content */}
        <div className="space-y-4 md:space-y-6 text-gray-300 leading-relaxed">
          <p className="text-sm md:text-base lg:text-lg">
            <span className="text-emerald-400 font-semibold">Proper Security monitoring, gap assessments, IT-Security Policy, Security Metrics, IT Audit, Enterprise Risk Management, Enterprise IT Security and Compliance</span> - SAP System Security & Infrastructure, Private/Hybrid Security and Cyber Security Policy.
          </p>
          
          <p className="text-sm md:text-base lg:text-lg">
            Although it is advisable to stick to the best practices, standards, Governance, Risk and Compliance (GRC) and premises and procedures for dependening upon the size of industry, sensitivity and dependence on IT.
          </p>
          
          <p className="text-sm md:text-base lg:text-lg">
            <span className="text-emerald-400 font-semibold">AAA (Audit, SOX /IT audit, SOC II audit, PCI audit, ISO / IEC 27001 Audit, NIST Audit, FISMA Audit, SAP GRC Audit, VAPT Audit)</span>
          </p>
          
          <p className="text-sm md:text-base lg:text-lg">
            Followed and effectively managed by a team of professionals that holds wide expertise and experience in the security project implementation domain, we render our invaluable consultation solutions in a <span className="text-emerald-400 font-semibold">totally analytical and time-bound manner</span>. Moreover, we offer this prompt and product-oriented ISO / IEC 27001 to SMEs As well, from India and across the success mapping of the domain projects executed by us.
          </p>
        </div>

        {/* Green Checkmark Icon */}
        <div className="flex items-center justify-center my-8 md:my-16">
          <div className="bg-emerald-500 rounded-full p-3 md:p-4">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-10 md:h-10">
              <path d="M8 20 L16 28 L32 12" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
