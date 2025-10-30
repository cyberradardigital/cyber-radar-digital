import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0A1623] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-4 md:mb-6">
              <Image 
                src="/logo-1.png" 
                alt="Cyber Radar Systems Logo"
                width={140}
                height={56}
                className="h-12 w-auto md:h-14"
              />
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
              Since Last 10 Years We are Providing Security Services. Enhanced Protection from Ransomware. Eliminate Critical Security Incidents & Data Breaches. Leading Cyber Security Service Provider in USA.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-[#00D68F] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00D68F] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00D68F] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white uppercase">Important Links</h3>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-xs md:text-sm">
              <li><a href="/services/penetration-testing" className="hover:text-[#00D68F] transition-colors uppercase">Penetration</a></li>
              <li><a href="/services/digital-forensics" className="hover:text-[#00D68F] transition-colors uppercase">Digital Forensics</a></li>
              <li><a href="/privacy-policy" className="hover:text-[#00D68F] transition-colors uppercase">Privacy & Policy</a></li>
              <li><a href="/terms-of-use" className="hover:text-[#00D68F] transition-colors uppercase">Terms of Use</a></li>
              <li><a href="/cookie-policy" className="hover:text-[#00D68F] transition-colors uppercase">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Other Solutions */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white uppercase">Other Solutions</h3>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-xs md:text-sm">
              <li><a href="/services/security-risk-assessment" className="hover:text-[#00D68F] transition-colors uppercase">Risk Assessment</a></li>
              <li><a href="/services/vulnerability-management" className="hover:text-[#00D68F] transition-colors uppercase">Vulnerability</a></li>
              <li><a href="/services/data-loss-prevention" className="hover:text-[#00D68F] transition-colors uppercase">Data Loss</a></li>
              <li><a href="/services/sox-it-audit" className="hover:text-[#00D68F] transition-colors uppercase">SOX IT Audit</a></li>
              <li><a href="/services/pci-dss-security-compliances" className="hover:text-[#00D68F] transition-colors uppercase">PCI DSS</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">Contact</h3>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-xs md:text-sm">
              <li className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mt-1 flex-shrink-0 text-[#00D68F]">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>CRS, 105 Eelmsford ST Durham, NC 27703, US</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mt-1 flex-shrink-0 text-[#00D68F]">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                </svg>
                <span>Mon-Sat: 9:00 - 7:00</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mt-1 flex-shrink-0 text-[#00D68F]">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+1 (888) 857-4694</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mt-1 flex-shrink-0 text-[#00D68F]">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+91-906-968-9226</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mt-1 flex-shrink-0 text-[#00D68F]">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="break-all uppercase">info@cyberradarsystems.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 bg-[#050f1a]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 text-center">
          <p className="text-gray-500 text-xs md:text-sm">
            Copyright ©2025 <span className="text-[#00D68F]">Cyber Radar Systems</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
