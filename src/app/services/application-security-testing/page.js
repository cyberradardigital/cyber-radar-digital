import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ApplicationSecurityTesting() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="home" />

      {/* Hero Section with Banner Image */}
      <section className="relative bg-gradient-to-r from-[#0d2340] via-[#0f3557] to-[#0d2340] py-8 sm:py-12 md:py-16 lg:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in-down">
                Application Security Testing
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-up delay-200">
                Comprehensive Security Solutions for Your Applications
              </p>
              
              {/* Breadcrumb at bottom */}
              <div className="pt-2 sm:pt-4">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <a href="/services" className="hover:text-emerald-400 transition-colors">Services</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <span className="text-emerald-400">Application Security Testing</span>
                </p>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up delay-300">
              <img 
                src="/application_testing.jfif" 
                alt="Application Security Testing" 
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
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
              <p>
                How do you identify the threats in the systems and measure its potential vulnerabilities? How you encounter your application threats and take care of your server issues so that it could function without a pause? Well…Cyber Radar Systems detects all possible security risks in your systems and assists the organization's developers to fix the problems through coding!
              </p>
              <p>
                The prime goal of Application Security Testing is to find out whether data and software are protected from potential intruders. As you know, today hackers keep on inventing new techniques to steal the data, applications, money, even the entire software, hence if your website is poorly secured you may lose everything. We're here to protect you as your poor security web apps rise due to the mentioned reasons:
              </p>
            </div>
          </div>
        </div>

        {/* Full Width Image Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img 
              src="/markus-spiske-uPXs5Vx5bIg-unsplash.jpg" 
              alt="Application Security Testing Team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* What is Application Security Testing */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="bg-[#0f1f33] border border-emerald-400 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">What is Application Security Testing</h2>
            </div>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
              <p>
                Software that uncovers all the threats, risks, vulnerabilities, and external loss to prevent the entire systems from malicious attacks. Do you know there are no software or organization left with certain loopholes and weaknesses? Therefore, we Cyber Radar System's professionals assist your brand to maintain a positive reputation in the business world.
              </p>
              <p className="font-semibold text-emerald-400 mt-6 sm:mt-8">Following techniques are mandatory to overcome the flaws:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-5">
                {[
                  "Notify the web application for XSS",
                  "Check potential threats on the network",
                  "Crack the password",
                  "Detect intrusion",
                  "Risk assessment",
                  "Security auditing",
                  "Vulnerability scanning"
                ].map((technique, index) => (
                  <div key={index} className="bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base">{technique}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Basic Security Testings */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">What basic security testings are conducted by us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            
            {/* Confidentiality */}
            <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-900 font-bold text-lg sm:text-xl">1</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-400">Confidentiality</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We intake the usage of this testing as it protects the systems against the disclosure of information to third parties (intruders).
              </p>
            </div>

            {/* Uprightness */}
            <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-900 font-bold text-lg sm:text-xl">2</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-400">Uprightness</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We conduct this testing to ensure the information received is absolutely correct or not, as the right tools will lead to the right path.
              </p>
            </div>

            {/* Verification */}
            <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-900 font-bold text-lg sm:text-xl">3</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-400">Verification</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Cyber Radar Systems tests and identifies the person, trace the origins of an object, ensures product packaging and labeling, additionally ensures the systems program is reliable.
              </p>
            </div>

            {/* Accessibility and Authorization */}
            <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-900 font-bold text-lg sm:text-xl">4</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-400">Accessibility and Authorization</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We provide the assurance of getting available the information and communication whenever it's required. Also, we determine whether the requester is allowed to receive a service and access control.
              </p>
            </div>

            {/* Non-denia */}
            <div className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all lg:col-span-2">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-900 font-bold text-lg sm:text-xl">5</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-400">Non-denia</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                When both side parties (sender as well receiver) receive an effective response then persons cannot repudiate their services systems.
              </p>
            </div>

          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-emerald-400">Application Security Testing Benefits</h2>
          <div className="space-y-4 sm:space-y-5">
            <div className="bg-[#0d1a2d] border-l-4 border-emerald-400 rounded-r-lg p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">Security of Confidential Information</h3>
              <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Sensitive information from old technology can be stolen easily, hence the Cyber Radar Systems assists to fill this gap. And this is the big reason many are not willing to share their personal information online, therefore, to remove this negative layering many companies go with lengthy trustworthy communication to make their customer feel safe.
                </p>
                <p>
                  When we perform this testing we ensure that your website is secure from any theft, else your customer's information is also locked.
                </p>
              </div>
            </div>

            <div className="bg-[#0d1a2d] border-l-4 border-emerald-400 rounded-r-lg p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">Earn the trust of the targeted audience</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Building confidence through secure applications ensures customer loyalty and brand reputation in the marketplace.
              </p>
            </div>
          </div>
        </div>

        {/* Why Your Business Needs It */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="bg-gradient-to-br from-[#0d2340] via-[#0f1f33] to-[#0d2340] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Why your business needs application security</h2>
            <div className="space-y-4 sm:space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
              <p>
                Hackers can control the data of your web pages while controlling your wifi connection even in the presence of HTTPS which is not caught easily and go undetected. You should work on: protect what you have built on your own, prevent your assets from any kind of cyber-attacks!
              </p>
              <p>
                Code security is the smart way to find all the vulnerabilities, it's a set of broadcasts that give assurance to the targeted audience. In today's interconnected world consumers depends on online channels to make transactions, and if your website will lead to any cyber attack then you'll lose the trust of customer.
              </p>
              <p>
                Therefore, organizations are considering getting the security audits done. Data Security measures the organization's pitfall arising from accidental disclosure of sensitive data. It's your time to evaluate which company is the best for your software and systems.
              </p>
              <div className="bg-[#0a1628] border border-emerald-400 rounded-lg p-4 sm:p-5 md:p-6 mt-6 sm:mt-8">
                <p className="text-emerald-400 font-semibold">
                  If any Cyber Security agency ask or promises to offer the best or effective key solutions then know their past history for your brand's sake.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
