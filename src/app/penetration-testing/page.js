import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PenetrationTesting() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="solutions" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0d2340] to-[#0a1628] py-8 sm:py-12 md:py-16 lg:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 animate-fade-in-down">Penetration Testing</h1>
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider animate-fade-in-up delay-200">
            <a href="/" className="hover:text-emerald-400 transition-colors">CYBER RADAR SYSTEMS</a>
            <span className="mx-1 sm:mx-2 md:mx-3">›</span>
            <span className="text-emerald-400">PENETRATION TESTING</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Hero Image */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 rounded-lg overflow-hidden shadow-xl animate-scale-in delay-300">
          <img 
            src="/penetration.jpg" 
            alt="Penetration Testing" 
            className="w-full h-auto rounded-lg object-cover hover-lift transition-transform duration-300"
          />
        </div>

        {/* Introduction */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-fade-in-up delay-400">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-700 shadow-xl hover-lift hover-glow">
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
              <p>
                Pentesting or Ethical Hacking is a strong practice of testing a computer systems to search for security vulnerabilities that a hacker or attacker could exploit. It can be performed both manually and automatically. It's the procedure of gathering information about the target before testing. Cyber Security identifies the weak points in your organization's security posture as well as tests staff security awareness level and measures the compliance of security level. Penetration testing is commonly used to improve a Web Application Firewall (WAF).
              </p>
              <p>
                It involves the attempted infringes of any number of application systems such as Application Protocol interfaces, frontend, and backend services to uncover effective vulnerabilities. Cyber Radar Systems provides insights by penetration testing that can be used to fine-tune your security policies.
              </p>
            </div>
          </div>
        </div>

        {/* Penetration Testing Stages */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white animate-fade-in-up">Penetration Testing Stages</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            
            {/* Planning and Inspection */}
            <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-900 font-bold text-lg sm:text-xl">1</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-400">Planning and Inspection</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Cyber Radar System's professionals give a brief description of the scope and goals of testing which includes the systems to be addressed and the procedure of working. It's the procedure of gathering intelligence for your better understanding of how a target works with its vulnerabilities.
              </p>
            </div>

            {/* Scanning */}
            <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-900 font-bold text-lg sm:text-xl">2</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-400">Scanning</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Further, our team makes you understand how your target application will respond to static analysis (inspection done to estimate how the code actually works) and Dynamic Analysis (it's the practical mode of scanning as it provides a real-time view into performance.
              </p>
            </div>

            {/* Gain access */}
            <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-900 font-bold text-lg sm:text-xl">3</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-400">Gain access</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                It's an important stage of penetration testing that intake webs application attacks, such as SQL injection, backdoors, and cross-site scripting, to reveal a target's vulnerabilities. Our developers try to exploit vulnerabilities by expanding privileges, stealing data, to briefly understand the damage caused by them.
              </p>
            </div>

            {/* Analysis */}
            <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-900 font-bold text-lg sm:text-xl">4</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-400">Analysis</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Our professionals compile these testing in a report that includes specific vulnerabilities, sensitive data, the amount of time the pen tester was able to remain in the systems undetected.
              </p>
            </div>

          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-emerald-400 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-emerald-400">Benefits of Penetration Testing in Cyber Radar Systems</h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
            Our professionals work for your business, therefore, we prevent your organization from any kind of cyber attack, maintaining a strong reputation of the brand is essential during the crowded digital world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {[
              "Secure Data and systems",
              "Preventing business interruption",
              "Protect your brand's image",
              "Offers learning procedure by breaking down into 3 basic sections (Detect Vulnerabilities, Determine exploits, and Defend against attacks)"
            ].map((benefit, index) => (
              <div key={index} className={`bg-[#0d1a2d] border-l-4 border-emerald-400 rounded-r-lg p-3 sm:p-4 hover:shadow-lg transition-all ${index === 3 ? 'md:col-span-2' : ''}`}>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How Penetration Testing is done */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">How Penetration Testing is done</h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            Web Applications firewalls and Penetration Testing services are exclusive yet it satisfies some compliance requirements for auditing procedures, including PCI DSS and SOC 2
          </p>
          <p className="text-emerald-400 font-semibold mb-4 sm:mb-5 text-base sm:text-lg">Here we're offering some methodology:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            
            {/* External Testing */}
            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 hover:border-emerald-400 hover:shadow-xl transition-all">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-emerald-400">External Testing</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Cyber Radar Systems testing targets the assets of a company that is highly visible on the internet, such as the web application, company's website, and Domain Name Servers (DNS). This procedure's objective is to gain access and extract valuable data.
              </p>
            </div>

            {/* Internal Testing */}
            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 hover:border-emerald-400 hover:shadow-xl transition-all">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-emerald-400">Internal Testing</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                This kind of procedure exploits vulnerabilities to know what information is actually being exposed. The maximum entrepreneurs conduct internal pen-testing via a VPN connection, generally, this testing is performed on-premises.
              </p>
            </div>

            {/* Blind Testing */}
            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 hover:border-emerald-400 hover:shadow-xl transition-all">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-emerald-400">Blind Testing</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                The strategy simulates the actions and processes of a real attacker by limiting the information, it's a blind tester that provides the only name of enterprises. This provides a security real-time look for how an actual application would look like.
              </p>
            </div>

            {/* Targeted Testing */}
            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 hover:border-emerald-400 hover:shadow-xl transition-all">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-emerald-400">Targeted Testing</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Here both tester and security personnel work together, it's a valuable training exercise that's offering with real-time feedback.
              </p>
            </div>

          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Responsibilities of Penetration Tester (Cyber Radar Systems)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {[
              "Conduct penetration test and Risk Assessment on an organization's systems",
              "Perform security audits to evaluate whether your organization fits undefined security policies and standardization",
              "Ensure physical security to the vulnerability of servers, systems, and various network devices",
              "Prepare thorough reports on the findings on penetration testing",
              "Organize social engineering tracks for employees training and development",
              "Redefine the procedures to combat advance threats"
            ].map((responsibility, index) => (
              <div key={index} className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 hover:border-emerald-400 hover:shadow-lg transition-all">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">{responsibility}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Clients */}
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Our Client</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-gray-300 text-sm sm:text-base bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6">
            {[
              "Expedia",
              "Ahli Bank, Qatar",
              "ASCIP – Alliance of Schools for Cooperative Insurance Programs",
              "School Districts in CA, USA",
              "Rosemead school district",
              "Saddleback Valley Unified School District: 'Service Request Form",
              "Santa Barbara City College",
              "Santa Monica-Malibu Unified School District",
              "Laguna Beach Unified School District",
              "Saddleback Valley Unified School District",
              "Yosemite Community College District",
              "Accelerated Charter School",
              "Accelerated Schools",
              "North Orange County Community College District",
              "Leadership Schools",
              "El Monte Union High Schools"
            ].map((client, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3 py-1">
                <span className="text-emerald-400 text-lg flex-shrink-0">▸</span>
                <span>{index + 1}. {client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
