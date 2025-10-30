import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CSTestingMonitoringServices() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="services" />

      {/* Hero Section with Banner Image */}
      <section className="relative bg-gradient-to-r from-[#0d2340] via-[#0f3557] to-[#0d2340] py-8 sm:py-12 md:py-16 lg:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in-down">
                CS Testing and Monitoring Services
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-up delay-200">
                Comprehensive Cyber Security Testing & Monitoring
              </p>
              
              {/* Breadcrumb at bottom */}
              <div className="pt-2 sm:pt-4">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <a href="/services" className="hover:text-emerald-400 transition-colors">Services</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <span className="text-emerald-400">CS Testing & Monitoring</span>
                </p>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up delay-300">
              <img 
                src="/CS testing and monitoring services_banner.jfif" 
                alt="CS Testing and Monitoring Services" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Introduction */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-700 shadow-xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-emerald-400">Best Cyber Security Testing and Monitoring Services</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
              <p>
                Cyber radar systems provide a comprehensive range of IT testing and data monitoring services to a number of business clients and organizations. We provide top-class cyber security services, strategies, and architecture to our clients. Our cutting edge Cyber Security Testing and Monitoring Services are balanced with information and data security services and solutions.
              </p>
              <p>
                These solutions can be used to identify risks, develop better roadmaps, and implement best practices and processes in the business.
              </p>
            </div>
            <div className="mt-6 sm:mt-8">
              <a href="#contact" className="inline-block bg-emerald-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-emerald-300 transition-colors font-semibold text-sm sm:text-base shadow-lg">
                Talk to our experts
              </a>
            </div>
          </div>
        </div>

        {/* Penetration Testing */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Our Cyber Security Testing Services</h2>
          
          <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg mb-6 sm:mb-8">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400">Penetration Testing</h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Cyber radar systems penetration testing (ethical hacking) services help in testing the security of an IT organization. We do this by identifying the risks and weaknesses in their security systems and fix those gaps by which a cyber attacker can break into the environment and can copy the important data and information.
            </p>
          </div>

          {/* Why Penetration Testing is Important */}
          <div className="bg-[#0d1a2d] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Why Penetration Testing is Important</h3>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>It helps in testing the response and detects the vulnerabilities.</p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Tests the users in conjunction with your business external and internal networks.</p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Manual testing helps in simulating the current threats in your business. Threats like pivoting and post-exploitation.</p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Approves inside and outer security controls, including protections around high-esteem systems.</p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Meets the requirements of various compliances like HIPAA, PCI DSS, and many more.</p>
              </div>
              <div className="mt-6 sm:mt-8 p-4 sm:p-5 md:p-6 bg-[#0a1628] border-l-4 border-emerald-400 rounded-r-lg">
                <p>
                  Effective security starts with a clear understanding of vulnerabilities. Our experts can help your business in strengthening business security flow. Along with providing experienced and skilled experts we also bring the most anticipated and potential source of threats to your knowledge. With the help of Cyber radar systems security testing methods and consultancy, you can easily find the weak spots in your business. Our experts will guide you in fixing those issues before any cyber attack takes place.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Image Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img 
              src="/maximalfocus-VT4rx775FT4-unsplash.jpg" 
              alt="CS Testing Process" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Cyber Security Monitoring Services */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Cyber Radar Systems Cyber Security Monitoring Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {[
              "Our managed security monitoring services use the full potential to find the set of vulnerabilities and risks in your business process.",
              "We provide unparalleled security monitoring services to safeguard your business from various risks and cyber-attacks.",
              "We deliver the most comprehensive set of industrial security capabilities with enterprise-class technology offering the most unmatched threat detection services.",
              "Proactive monitoring across the whole security ecosystem of an organization minimizes the chances of various cyber security attacks."
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-900 font-bold text-lg sm:text-xl">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Managed Detection and Response Services */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Our Managed Detection and Response Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            
            {/* Incident Management Services */}
            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 text-emerald-400">Incident Management Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Incident management plan development",
                  "Incident management program review",
                  "Incident response and forensics",
                  "Tabletop exercises",
                  "Breach management programs",
                  "Training and awareness"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                    <span className="text-emerald-400 text-lg flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Managed Security Services */}
            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 text-emerald-400">Managed Security Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Managed SEIM",
                  "Managed CISO programs",
                  "Managed security programs",
                  "Security process programs",
                  "Security role performance",
                  "Managing detection and response"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                    <span className="text-emerald-400 text-lg flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Security Management Services */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Our Security Management Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            
            {[
              {
                title: "Application Security",
                description: "We focus on securing all the important applications of your business by implementing our security services."
              },
              {
                title: "Network Security",
                description: "Providing the most efficient enterprise security tools to your business CISO so that they can tackle all the issues."
              },
              {
                title: "Incident Response",
                description: "Rapid and thorough incident response is very essential for minimizing all the threats."
              },
              {
                title: "Security Assessment and Audits",
                description: "Providing comprehensive security audit services to find the weakness and gaps in your business flow."
              },
              {
                title: "IT Security Operations",
                description: "24*7 IT security services and solutions by experts to identify and fix the risks in your business model."
              },
              {
                title: "Dark Web Monitoring",
                description: "We also help in monitoring the dark web and provide the most intelligent breach alerts around the cyber security threats."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-emerald-400">{service.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">{service.description}</p>
              </div>
            ))}

          </div>
        </div>

        {/* Benefits of Our Monitoring Services */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-emerald-400 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-emerald-400">Benefits of Our Monitoring Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              "24*7 chat support and maintenance services",
              "Monitoring intrusion prevention services",
              "Efficient firewall monitoring",
              "Network intrusion detection",
              "Log monitoring, Correlation, and storage"
            ].map((benefit, index) => (
              <div key={index} className="bg-[#0d1a2d] border-l-4 border-emerald-400 rounded-r-lg p-3 sm:p-4 hover:shadow-lg transition-all">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-300">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-r from-[#0d2340] via-[#0f1f33] to-[#0d2340] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl text-center">
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
            The cyber radar systems approach to various security services provides a better idea to clients and businesses about their business risks and vulnerabilities. We provide a team of highly experienced and skilled experts to tackle the security gaps in your business flow. Contact us and get the best ever cyber security services.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a href="#assessment" className="bg-emerald-400 text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-emerald-300 transition-colors font-semibold text-xs sm:text-sm">
              Best Assessment Security Services
            </a>
            <a href="#compliance" className="bg-emerald-400 text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-emerald-300 transition-colors font-semibold text-xs sm:text-sm">
              Best Compliance Security Services
            </a>
            <a href="#testing" className="bg-emerald-400 text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-emerald-300 transition-colors font-semibold text-xs sm:text-sm">
              Best Testing Monitoring Services
            </a>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
