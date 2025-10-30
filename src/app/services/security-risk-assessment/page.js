import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SecurityRiskAssessment() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="home" />

      {/* Hero Section with Banner Image */}
      <section className="relative bg-gradient-to-r from-[#0d2340] via-[#0f3557] to-[#0d2340] py-8 sm:py-12 md:py-16 lg:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in-down">Security Risk Assessment</h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-up delay-200">Comprehensive Security Risk Analysis & Assessment</p>
              <div className="pt-2 sm:pt-4">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <a href="/services" className="hover:text-emerald-400 transition-colors">Services</a>
                  <span className="mx-1 sm:mx-2">›</span>
                  <span className="text-emerald-400">Security Risk Assessment</span>
                </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up delay-300">
              <img src="/security_risk_assesment.webp" alt="Security Risk Assessment" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Full Width Image Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img src="/shubham-dhage-_rZnChsIFuQ-unsplash.webp" alt="Security Risk Assessment Process" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-700 shadow-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-white text-center">Security Risk Assessment Services</h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed text-center max-w-4xl mx-auto">
              Vulnerability analysis focuses on discovering the flaws in an organisation's security controls, health care organizations, the online sector, telecommunications firms, consumer product organizations, and many other sectors for whom failures will be severe when it comes to protection of data from various cyber security threats. Our experts underscore the importance of protecting the data of an organization from various cyber security risks.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              Our Cyber Security risk assessment service is very efficient and can easily be integrated into your business flow. We help in protecting our clients business data, proper protocols, and other intellectual property data by identifying the security risks and threats and performing key tactics to make the business flow better.
            </p>
            <p>
              Using our risk assessment and governance skills, we strive to support the governance, reporting, and evaluation of information and data security via our efficient risk management and risk mitigation security programs.
            </p>
          </div>
        </div>

        {/* Cyber Radar Systems Security Solutions */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-emerald-400">Cyber Radar Systems Security Solutions and Services</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mt-4 sm:mt-5 md:mt-6">Why Cyber Radar Systems Risk assessment Consulting Services</h3>
            <p>
              The cyber security risk assessment sector may well be especially beneficial and can be easily integrated into your business flow. Our experts are very eager indeed and skilled and can efficiently tackle the risks to your business.
            </p>
            <p>
              Information leaks, credential clearances in every single step we have a continuous history of accomplishment in eliminating the risks of every single sector.
            </p>
          </div>
        </div>

        {/* Our Area of Focus */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Our Area of Focus</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-md">
            <p>
              The cyber security programs and <span className="text-emerald-400 font-semibold">vulnerability assessment services</span> provided by our experts will help your organization in many ways and we will make a list of those for future speaking purposes. Our managerial services can be integrated into many sectors like finance and service, healthcare, adjustments, real advisory and even international property.
            </p>
          </div>
        </div>

        {/* List of Services */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">List of Cyber Security Consulting and Risk Assessment Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 transition-colors">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span className="text-gray-300 text-sm sm:text-base">Cyber Security Operation</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 transition-colors">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span className="text-gray-300 text-sm sm:text-base">Compliance Consulting</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 transition-colors">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span className="text-gray-300 text-sm sm:text-base">Cyber Security Consulting</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 transition-colors">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span className="text-gray-300 text-sm sm:text-base">Managed Detection and Response</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 transition-colors">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span className="text-gray-300 text-sm sm:text-base">Review and Incident Response</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 transition-colors">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span className="text-gray-300 text-sm sm:text-base">Small Business Security Consulting</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 transition-colors">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span className="text-gray-300 text-sm sm:text-base">Cyber Computer Security</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 transition-colors">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span className="text-gray-300 text-sm sm:text-base">Cyber Security Solutions</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 transition-colors">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span className="text-gray-300 text-sm sm:text-base">Enterprise Information Security</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 transition-colors">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span className="text-gray-300 text-sm sm:text-base">Financial Cyber Security</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 transition-colors">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span className="text-gray-300 text-sm sm:text-base">Cyber risk Assessment</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 transition-colors">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span className="text-gray-300 text-sm sm:text-base">Cyber Breach Incident Management</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 transition-colors">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span className="text-gray-300 text-sm sm:text-base">NY DFS Cyber Security Compliance</span>
            </div>
          </div>
        </div>

        {/* Point by Point Approach */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Point by point Approach to Risk Assessment</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p className="mb-4 sm:mb-5 md:mb-6">
              We start our evaluation by working currently with you to comprehend your business objectives and take a stock of the maximum cost to help those objectives. We will look without and not with key people inside the business and also unforeseen administrators to understand new strengths, dynamic, and practices through its governance.
            </p>
            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-md">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <li className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 transition-colors">
                  <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                  <span className="text-sm sm:text-base">Hold one-on-one meetings</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 transition-colors">
                  <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                  <span className="text-sm sm:text-base">Recognize threats and vulnerabilities</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 transition-colors">
                  <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                  <span className="text-sm sm:text-base">Decide the likelihood and probability of danger happening</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 transition-colors">
                  <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                  <span className="text-sm sm:text-base">Assess the adequacy of Controls</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 md:gap-4 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 hover:border-emerald-400 transition-colors md:col-span-2">
                  <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                  <span className="text-sm sm:text-base">Decide a general remaining Risk</span>
                </li>
              </ul>
            </div>
            <p className="mt-4 sm:mt-5 md:mt-6">
              Our objective objective is to inform your administration Risk Manager remarkable in your business capacities and supporting innovations through recognizing duties and giving point by point Engagements to successfully basic steps helps in mitigating totally due to the business.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-emerald-400 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-emerald-400">Some Benefits of Our Risk Assessment Services</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 border-l-4 border-emerald-400 pl-3 sm:pl-4 md:pl-5 py-2 sm:py-3 bg-[#0d1a2d] rounded-r-lg">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span className="text-sm sm:text-base">Our risk assessment services offer opportunities to establish proper security guidelines at a granular level</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 border-l-4 border-emerald-400 pl-3 sm:pl-4 md:pl-5 py-2 sm:py-3 bg-[#0d1a2d] rounded-r-lg">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span className="text-sm sm:text-base">We provide a valuable framework for organizations to make their business flow smooth</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 border-l-4 border-emerald-400 pl-3 sm:pl-4 md:pl-5 py-2 sm:py-3 bg-[#0d1a2d] rounded-r-lg">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span className="text-sm sm:text-base">Our business risk assessment involves giving a security roadmap, which is very essential for each and every industry to make their security process smoother</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 border-l-4 border-emerald-400 pl-3 sm:pl-4 md:pl-5 py-2 sm:py-3 bg-[#0d1a2d] rounded-r-lg">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span className="text-sm sm:text-base">We provide an efficient guideline to recognize the vulnerabilities in every step of testing</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 border-l-4 border-emerald-400 pl-3 sm:pl-4 md:pl-5 py-2 sm:py-3 bg-[#0d1a2d] rounded-r-lg">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span className="text-sm sm:text-base">How should we recognize and get put before developing Risk?</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 border-l-4 border-emerald-400 pl-3 sm:pl-4 md:pl-5 py-2 sm:py-3 bg-[#0d1a2d] rounded-r-lg">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span className="text-sm sm:text-base">Help us separate enough IT from shift danger in our business departments?</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 border-l-4 border-emerald-400 pl-3 sm:pl-4 md:pl-5 py-2 sm:py-3 bg-[#0d1a2d] rounded-r-lg">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span className="text-sm sm:text-base">What could turn out badly?</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 border-l-4 border-emerald-400 pl-3 sm:pl-4 md:pl-5 py-2 sm:py-3 bg-[#0d1a2d] rounded-r-lg">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span className="text-sm sm:text-base">Where is the most serious Risk that something will turn out badly?</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 border-l-4 border-emerald-400 pl-3 sm:pl-4 md:pl-5 py-2 sm:py-3 bg-[#0d1a2d] rounded-r-lg">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span className="text-sm sm:text-base">If something turns out badly, what is the effect?</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 border-l-4 border-emerald-400 pl-3 sm:pl-4 md:pl-5 py-2 sm:py-3 bg-[#0d1a2d] rounded-r-lg">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span className="text-sm sm:text-base">How regularly would it be able to occur?</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4 border-l-4 border-emerald-400 pl-3 sm:pl-4 md:pl-5 py-2 sm:py-3 bg-[#0d1a2d] rounded-r-lg">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span className="text-sm sm:text-base">By what means can the Risk be prevented?</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              All organizations are going to poor assaults, with good potential to damage your data and other important records. It can also damage the reputation of your business organization. With our cyber security risk assessment services, we assist organizations in easily identify the gaps in their cyber security postures.
            </p>
            <p>
              We also help our clients in developing a better strategy for your business security by providing them a clear and efficient roadmap and strategy for each tackling of all the cyber security risks and attacks. With this roadmap, they will easily counter severe risks ends.
            </p>
            <p>
              In today's era where security breaches have become a very common issue, business risk assessment services are very important to be integrated into the business flow. Risk assessment is a total aspect it is very strong way to reduce the chances of cyber attacks. With our cyber and IT security risk management services and strategies, you can serve your business organization to they against all the information business risks and gaps. We maintain the integrity and confidentiality of all the valuable information and data of your business and failure the access for any malicious threats.
            </p>
            <p>
              Our security assessment services will completely many sets of test resources and realistic Cyber Security threats conferring your data resources.
            </p>
            <p>
              We're prepared to discover weaknesses or vulnerabilities to your organization security just as you construct a total comprehension of your IT framework, for example from IT frameworks to See it involves.
            </p>
            <p>
              When our review is finished, we'll make an exhaustive security report with proposals you can plainly present to the executives, continuously guaranteeing that your IT spending reduces at optimal serious expense impact.
            </p>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
