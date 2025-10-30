import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SOXITAudit() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0d2340] to-[#0a1628] py-8 sm:py-12 md:py-16 lg:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 animate-fade-in-down">SOX IT Audit</h1>
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider animate-fade-in-up delay-200">
            <a href="/" className="hover:text-emerald-400 transition-colors">CYBER RADAR SYSTEMS</a>
            <span className="mx-1 sm:mx-2 md:mx-3">›</span>
            <span className="text-emerald-400">SOX IT AUDIT</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Hero Image */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="rounded-lg overflow-hidden shadow-2xl max-w-2xl mx-auto">
            <img 
              src="/SOX IT Audit.jpg" 
              alt="SOX IT Audit" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* What we do */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-700 shadow-xl">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">What we do</h2>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
              We can have been providing international support in regulatory compliance. Since we have been here, and we not only help the company meet compliance.
            </p>
          </div>
        </div>

        {/* Professional Services */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-emerald-400">Professional Services</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              T-SOX, S.O.C 1 and S.O.C 2 assurance. These services are performed by SEE Reasonably that framework or SOC 1 Audit for an SSAE18 Audit SOC POW Type 2 AT-C 205, AT-C 320, examinations.
            </p>
            <p>
              T-SEC, S.O.C 2 and S.O.C report. those services have provided Services for SEE Reasonably Audit SSAE16 considered for companies or trusted IT Service providers to maintain IT Audit or S.O.C report using high OECD Guide Organization for Economic Co-operation and development. for a company is considered for a "SOC in a manner," for companies or clients to achieve as some.
            </p>
            <div className="bg-[#0d1a2d] border border-gray-600 rounded-lg p-4 sm:p-5 md:p-6 mt-4 sm:mt-5">
              <p>
                Our assessment team comes with over 7 years of experience in measuring risk, examining controls, identifying weaknesses, investigating incidents, preparing recommendations and documenting the examination process to provide users with an independent, objective perspective.
              </p>
            </div>
            <p className="mt-4 sm:mt-5">
              COBIT or audit is considered two types of companies that manage or support business during a customer. Cyber-sec SSAE16 SOC 1 Audit or SOC can meet and could be used for conducting audit as by customer service for SOC report also includes company network controls for examinations of controls, monitoring and delivering of testing of controlling mechanisms.
            </p>
            <p>
              The audit advisory experience us for our procedures for a few of years controlling and administers ISAE 3402 Report and is required has designed for supporting our users' compliance over financial reporting.
            </p>
          </div>
        </div>

        {/* Training */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="bg-gradient-to-br from-[#0f1f33] via-[#0d2340] to-[#0f1f33] border border-emerald-400 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-400">Training</h2>
            </div>
            <div className="space-y-4 sm:space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
              <p>
                Combination of all of the technologies to understanding includes CISA, CISM and the highest cybersecurity CISSP to ITSM to ITIL certified businesses the senior in IT systems and information Security project.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-4 sm:mt-5">
                <div className="bg-[#0a1628] border-l-4 border-emerald-400 rounded-r-lg p-4 sm:p-5 hover:shadow-lg transition-all">
                  <p>We possess workforce training globally code as "Remediate". These audit level Portfolio course of tools or data controls and audit or 404 of SOX, first, their education Security-oriented.</p>
                </div>
                <div className="bg-[#0a1628] border-l-4 border-emerald-400 rounded-r-lg p-4 sm:p-5 hover:shadow-lg transition-all">
                  <p>To accomplish workforce training globally code as "Remediate", Cyber audit level Portfolio course of 404 SOX controls and audit, it also included and to prepare you for a course, to assist in your training needs our CISSP Experts.</p>
                </div>
              </div>
              <div className="bg-[#0d1a2d] border border-gray-600 rounded-lg p-4 sm:p-5 md:p-6 mt-4 sm:mt-5">
                <p>
                  We also coordinate and deliver off-site. Cyber audit level Remediation's S.O.C 1 exam or S.O.C 2 audit, IT 404 of SOX and to 5 NIST and IT SOC 1 - NIST 800-171 Cyber audit, and also involved in Conducting S.O.C 1 audit or NIST Cyber audit controls for 404 SOX. Frequently not SOC 6 to S SSAE18 Section 404 (Sarbanes-Oxley Act). SOX P Section 404 requires SOC 1 Audit or S.O.C 2 audit or NIST Examiner's or NIST SOC 1 Audit or S.O.C 2 IT Cyber audit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Services Grid */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white text-center">Our SOX IT Audit Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            
            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 hover:border-emerald-400 hover:shadow-xl transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-400 flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-emerald-400">SOC 1 & SOC 2 Audit</h3>
              <p className="text-gray-300 text-sm sm:text-base">Comprehensive SSAE18 and AT-C examinations for service organizations</p>
            </div>

            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 hover:border-emerald-400 hover:shadow-xl transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-400 flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-emerald-400">Section 404 Compliance</h3>
              <p className="text-gray-300 text-sm sm:text-base">Sarbanes-Oxley Act Section 404 IT controls assessment</p>
            </div>

            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 hover:border-emerald-400 hover:shadow-xl transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-400 flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-emerald-400">Risk Assessment</h3>
              <p className="text-gray-300 text-sm sm:text-base">Independent examination of controls and risk identification</p>
            </div>

            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 hover:border-emerald-400 hover:shadow-xl transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-400 flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-emerald-400">Professional Training</h3>
              <p className="text-gray-300 text-sm sm:text-base">CISA, CISM, CISSP certified workforce training programs</p>
            </div>

            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 hover:border-emerald-400 hover:shadow-xl transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-400 flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-emerald-400">COBIT Framework</h3>
              <p className="text-gray-300 text-sm sm:text-base">IT governance and management framework implementation</p>
            </div>

            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 hover:border-emerald-400 hover:shadow-xl transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-400 flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-emerald-400">Advisory Services</h3>
              <p className="text-gray-300 text-sm sm:text-base">ISAE 3402 and financial reporting compliance guidance</p>
            </div>

          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
