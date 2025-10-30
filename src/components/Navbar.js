'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar({ currentPage = 'home' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#00bcd4] via-[#0097a7] to-[#006064] shadow-lg">
      <nav className="flex items-center justify-between px-4 md:px-8 py-2.5 max-w-7xl mx-auto relative">
        <a href="/" className="group">
        <Image 
          src="/logo-1.png" 
          alt="Cyber Radar Systems Logo" 
          width={120}
          height={40}
          priority
          className="h-8 w-auto md:h-10 transition-transform duration-300 group-hover:scale-105"
        />
      </a>

      {/* Mobile menu button */}
      <button 
        className="md:hidden text-white p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide">
        <a 
          href="/" 
          className={`${currentPage === 'home' ? 'text-[#00D68F] font-semibold' : 'text-white hover:text-[#00D68F]'} transition-colors`}
        >
          HOME
        </a>
        <div className="relative group">
          <a 
            href="#company" 
            className={`${currentPage === 'company' ? 'text-[#00D68F] font-semibold' : 'text-white hover:text-[#00D68F]'} transition-colors cursor-pointer`}
          >
            COMPANY
          </a>
          <div className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] pointer-events-none group-hover:pointer-events-auto">
            <div className="bg-[#15283A] border border-gray-700 rounded shadow-xl py-2 min-w-[200px]">
              <a href="/who-we-are" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">WHO WE ARE?</a>
              <a href="/what-we-do" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">WHAT WE DO?</a>
              <a href="/clients-testimonials" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">WHAT OUR CLIENTS SAY</a>
            </div>
          </div>
        </div>
        <div className="relative group">
          <a href="#solutions" className="text-white hover:text-[#00D68F] transition-colors cursor-pointer">SOLUTIONS</a>
          <div className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] pointer-events-none group-hover:pointer-events-auto">
            <div className="bg-[#15283A] border border-gray-700 rounded shadow-xl py-2 min-w-[280px]">
              
              {/* Cyber Security Solutions */}
              <div className="relative group/sub">
                <a href="#cyber-security" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">CYBER SECURITY SOLUTIONS</a>
                <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-[110] pointer-events-none group-hover/sub:pointer-events-auto">
                  <div className="bg-[#0d1a2d] border border-gray-700 rounded shadow-xl py-2 min-w-[320px]">
                    <a href="/services/application-security-testing" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">APPLICATION SECURITY TESTING</a>
                    <a href="/services/cs-testing-monitoring-services" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">CS TESTING AND MONITORING SERVICES</a>
                    <a href="/services/digital-forensics" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">DIGITAL FORENSICS</a>
                    <a href="/services/penetration-testing" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">PENETRATION DATA LOSS PROTECTION</a>
                    <a href="/services/data-loss-prevention" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">CONTENT AWARE DATA LOSS PROTECTION</a>
                    <a href="/services/integrated-dlp" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">INTEGRATED DATA LOSS PROTECTION</a>
                    <a href="/services/siem-intelligence" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">SIEM AND INTELLIGENCE REFORM</a>
                    <a href="/services/pci-dss-security-compliances" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">SECURITY COMPLIANCE STANDARDS</a>
                  </div>
                </div>
              </div>

              {/* DLP Solutions */}
              <div className="relative group/sub">
                <a href="#dlp" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">DLP SOLUTIONS</a>
                <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-[110] pointer-events-none group-hover/sub:pointer-events-auto">
                  <div className="bg-[#0d1a2d] border border-gray-700 rounded shadow-xl py-2 min-w-[300px]">
                    <a href="/services/endpoint-dlp" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">ENDPOINT DATA LOSS PROTECTION</a>
                    <a href="/services/data-loss-prevention" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">CONTENT AWARE DATA LOSS PROTECTION</a>
                    <a href="/services/navoshield-dlp" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">NAVOSHIELD DATA LOSS PROTECTION</a>
                    <a href="/services/security-architecture-review" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">SECURITY ARCHITECHTURE REVIEW</a>
                    <a href="/services/security-configuration-standards" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">SECURITY CONFIGURATION STANDARDS</a>
                  </div>
                </div>
              </div>

              {/* Management Solutions */}
              <div className="relative group/sub">
                <a href="#management" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">MANAGEMENT SOLUTIONS</a>
                <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-[110] pointer-events-none group-hover/sub:pointer-events-auto">
                  <div className="bg-[#0d1a2d] border border-gray-700 rounded shadow-xl py-2 min-w-[300px]">
                    <a href="/services/siem-management" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">SECURITY INCIDENT EVENT MANAGEMENT</a>
                    <a href="/services/encryption-key-management" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">ENCRYPTION KEY MANAGEMENT</a>
                    <a href="/services/identity-access-management" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">IDENTIFY AND ACCESS MANAGEMENT</a>
                    <a href="/services/vulnerability-management" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">VULNERABILITY MANAGEMENT</a>
                  </div>
                </div>
              </div>

              {/* Compliances Solutions */}
              <div className="relative group/sub">
                <a href="#compliances" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">COMPLIANCES SOLUTIONS</a>
                <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-[110] pointer-events-none group-hover/sub:pointer-events-auto">
                  <div className="bg-[#0d1a2d] border border-gray-700 rounded shadow-xl py-2 min-w-[280px]">
                    <a href="/services/hipaa-compliances" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">HIPAA COMPLIANCES</a>
                    <a href="/services/pci-dss-security-compliances" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">PCI DSS SECURITY COMPLIANCES</a>
                    <a href="/services/soc1-compliance" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">SOC1</a>
                    <a href="/services/soc2-compliance" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">SOC2</a>
                  </div>
                </div>
              </div>
              
              {/* Audit Solutions */}
              <div className="relative group/sub">
                <a href="#audit" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">AUDIT SOLUTIONS</a>
                <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-[110] pointer-events-none group-hover/sub:pointer-events-auto">
                  <div className="bg-[#0d1a2d] border border-gray-700 rounded shadow-xl py-2 min-w-[220px]">
                    <a href="/services/clear-audit" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">CLEAR AUDIT</a>
                    <a href="/services/sox-it-audit" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">ISO SECURITY AUDIT</a>
                    <a href="/services/soe-it-audit" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">SOE IT AUDIT</a>
                  </div>
                </div>
              </div>

              {/* Risk Assessment Solutions */}
              <div className="relative group/sub">
                <a href="#risk-assessment" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">RISK ASSESSMENT SOLUTIONS</a>
                <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-[110] pointer-events-none group-hover/sub:pointer-events-auto">
                  <div className="bg-[#0d1a2d] border border-gray-700 rounded shadow-xl py-2 min-w-[300px]">
                    <a href="/services/security-risk-assessment" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">SECURITY RISK ASSESSMENT</a>
                    <a href="/services/vendor-risk-assessment" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">THIRD PARTY VENDOR RISK ASSESSMENT</a>
                    <a href="/services/security-threat-compliance" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">SECURITY THREAT COMPLIANCE</a>
                    <a href="/services/mobile-controls" className="block px-6 py-3 text-white hover:bg-[#1B3247] hover:text-[#00D68F] transition-colors text-xs">MOBILE CONTROLS</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <a href="/recruitment" className="text-white hover:text-[#00D68F] transition-colors">RECRUITMENT</a>
        <a href="/blog" className="text-white hover:text-[#00D68F] transition-colors">BLOG</a>
        <a href="/contact" className="text-white hover:text-[#00D68F] transition-colors">CONTACT US</a>
        <div className="flex items-center gap-4 ml-4">
          <a href="#" className="text-white hover:text-[#00D68F] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-[#00D68F] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-[#00D68F] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#15283A] border-t border-gray-700 z-50 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col px-4 py-4 space-y-3">
            <a 
              href="/" 
              className={`${currentPage === 'home' ? 'text-[#00D68F] font-semibold' : 'text-white hover:text-[#00D68F]'} transition-colors py-2`}
            >
              HOME
            </a>
            
            {/* Company dropdown */}
            <div className="border-l-2 border-[#00D68F] pl-4">
              <div className={`${currentPage === 'company' ? 'text-[#00D68F]' : 'text-white'} font-semibold py-2 text-sm`}>
                COMPANY
              </div>
              <a href="/who-we-are" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Who We Are?</a>
              <a href="/what-we-do" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• What We Do?</a>
              <a href="/clients-testimonials" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• What Our Clients Say</a>
            </div>
            
            {/* Solutions dropdown */}
            <div className="border-l-2 border-[#00D68F] pl-4">
              <div className="text-white font-semibold py-2 text-sm">SOLUTIONS</div>
              
              <div className="text-gray-300 py-2 text-sm pl-2 font-medium">CYBER SECURITY SOLUTIONS</div>
              <a href="/services/application-security-testing" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Application Security Testing</a>
              <a href="/services/cs-testing-monitoring-services" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• CS Testing and Monitoring Services</a>
              <a href="/services/digital-forensics" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Digital Forensics</a>
              <a href="/services/penetration-testing" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Penetration Data Loss Protection</a>
              <a href="/services/data-loss-prevention" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Content Aware Data Loss Protection</a>
              <a href="/services/pci-dss-security-compliances" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Security Compliance Standards</a>
              
              <div className="text-gray-300 py-2 text-sm pl-2 font-medium mt-2">DLP SOLUTIONS</div>
              <a href="/services/endpoint-dlp" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Endpoint Data Loss Protection</a>
              <a href="/services/data-loss-prevention" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Content Aware Data Loss Protection</a>
              <a href="/services/navoshield-dlp" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Navoshield Data Loss Protection</a>
              <a href="/services/security-architecture-review" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Security Architechture Review</a>
              <a href="/services/security-configuration-standards" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Security Configuration Standards</a>
              
              <div className="text-gray-300 py-2 text-sm pl-2 font-medium mt-2">MANAGEMENT SOLUTIONS</div>
              <a href="/services/siem-management" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Security Incident Event Management</a>
              <a href="/services/encryption-key-management" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Encryption Key Management</a>
              <a href="/services/identity-access-management" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Identity and Access Management</a>
              <a href="/services/vulnerability-management" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Vulnerability Management</a>
              
              <div className="text-gray-300 py-2 text-sm pl-2 font-medium mt-2">COMPLIANCES SOLUTIONS</div>
              <a href="/services/hipaa-compliances" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• HIPAA Compliances</a>
              <a href="/services/pci-dss-security-compliances" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• PCI DSS Security Compliances</a>
              <a href="/services/soc1-compliance" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• SOC1</a>
              <a href="/services/soc2-compliance" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• SOC2</a>
              
              <div className="text-gray-300 py-2 text-sm pl-2 font-medium mt-2">AUDIT SOLUTIONS</div>
              <a href="/services/clear-audit" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• CLEAR Audit</a>
              <a href="/services/sox-it-audit" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• ISO Security Audit</a>
              <a href="/services/soe-it-audit" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• SOE IT Audit</a>
              
              <div className="text-gray-300 py-2 text-sm pl-2 font-medium mt-2">RISK ASSESSMENT SOLUTIONS</div>
              <a href="/services/security-risk-assessment" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Security Risk Assessment</a>
              <a href="/services/vendor-risk-assessment" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Third Party Vendor Risk Assessment</a>
              <a href="/services/security-threat-compliance" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Security Threat Compliance</a>
              <a href="/services/mobile-controls" className="block text-gray-400 hover:text-[#00D68F] transition-colors py-1 text-xs pl-4">• Mobile Controls</a>
            </div>
            
            <a href="/recruitment" className="text-white hover:text-[#00D68F] transition-colors py-2">RECRUITMENT</a>
            <a href="/blog" className="text-white hover:text-[#00D68F] transition-colors py-2">BLOG</a>
            <a href="/contact" className="text-white hover:text-[#00D68F] transition-colors py-2">CONTACT US</a>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
              <a href="#" className="text-white hover:text-[#00D68F] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#00D68F] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#00D68F] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
      </nav>
    </header>
  );
}
