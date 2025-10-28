import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0d2340] to-[#0a1628] py-8 sm:py-12 md:py-16 lg:py-20 pt-24 md:pt-28 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">Privacy Policy</h1>
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
            <a href="/" className="hover:text-emerald-400 transition-colors">CYBER RADAR SYSTEMS</a>
            <span className="mx-1 sm:mx-2 md:mx-3">›</span>
            <span className="text-emerald-400">PRIVACY POLICY</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Introduction */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-emerald-400">Privacy Policy</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              At Cyber Radar Systems, accessible from cyberradarsystems.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Cyber Radar Systems and how we use it.
            </p>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>
            <p>
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Cyber Radar Systems. This policy is not applicable to any information collected offline or via channels other than this website.
            </p>
          </div>
        </div>

        {/* Consent */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-white">Consent</h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </div>

        {/* Information we collect */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Information we collect</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>
            <p>
              When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
            </p>
          </div>
        </div>

        {/* How we use your information */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">How we use your information</h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed mb-3 sm:mb-4 md:mb-5">
            We use the information we collect in various ways, including to:
          </p>
          <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6">
            <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span>Provide, operate, and maintain our website</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span>Improve, personalize, and expand our website</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span>Understand and analyze how you use our website</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span>Develop new products, services, features, and functionality</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span>Send you emails</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
              <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
              <span>Find and prevent fraud</span>
            </li>
          </ul>
        </div>

        {/* Log Files */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-white">Log Files</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              Cyber Radar Systems follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>
          </div>
        </div>

        {/* Cookies and Web Beacons */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Cookies and Web Beacons</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              Like any other website, Cyber Radar Systems uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
            <p>
              For more general information on cookies, please read the Cookies article on our website.
            </p>
          </div>
        </div>

        {/* Advertising Partners Privacy Policies */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Advertising Partners Privacy Policies</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              You may consult this list to find the Privacy Policy for each of the advertising partners of Cyber Radar Systems.
            </p>
            <p>
              Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Cyber Radar Systems, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
            </p>
            <p>
              Note that Cyber Radar Systems has no access to or control over these cookies that are used by third-party advertisers.
            </p>
          </div>
        </div>

        {/* Third Party Privacy Policies */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-white">Third Party Privacy Policies</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              Cyber Radar Systems's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>
            <p>
              You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
            </p>
          </div>
        </div>

        {/* CCPA Privacy Rights */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              Under the CCPA, among other rights, California consumers have the right to:
            </p>
            <ul className="space-y-2 sm:space-y-3 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6">
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span>Request that a business delete any personal data about the consumer that a business has collected.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</span>
              </li>
            </ul>
            <p>
              If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
            </p>
          </div>
        </div>

        {/* GDPR Data Protection Rights */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">GDPR Data Protection Rights</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
            </p>
            <ul className="space-y-2 sm:space-y-3 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6">
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span><strong className="text-white">The right to access</strong> – You have the right to request copies of your personal data. We may charge you a small fee for this service.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span><strong className="text-white">The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span><strong className="text-white">The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span><strong className="text-white">The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span><strong className="text-white">The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span><strong className="text-white">The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</span>
              </li>
            </ul>
            <p>
              If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
            </p>
          </div>
        </div>

        {/* Children's Information */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-emerald-400 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-emerald-400">Children's Information</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            <p>
              Cyber Radar Systems does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
