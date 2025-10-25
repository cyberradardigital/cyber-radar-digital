import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0d2340] to-[#0a1628] py-8 sm:py-12 md:py-16 lg:py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">Cookie Policy</h1>
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
            <a href="/" className="hover:text-emerald-400 transition-colors">CYBER RADAR SYSTEMS</a>
            <span className="mx-1 sm:mx-2 md:mx-3">›</span>
            <span className="text-emerald-400">COOKIE POLICY</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Introduction */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-emerald-400">Cookie Policy</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              This is the Cookie Policy for Cyber Radar Systems, accessible from cyberradarsystems.com
            </p>
          </div>
        </div>

        {/* What Are Cookies */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-white">What Are Cookies</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.
            </p>
            <p>
              For more general information on cookies, please read <a href="https://www.cookieconsent.com/what-are-cookies/" className="text-emerald-400 hover:text-emerald-300 transition-colors underline" target="_blank" rel="noopener noreferrer">"What Are Cookies"</a>.
            </p>
          </div>
        </div>

        {/* How We Use Cookies */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">How We Use Cookies</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-md">
            <p>
              We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
            </p>
          </div>
        </div>

        {/* Disabling Cookies */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-white">Disabling Cookies</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.
            </p>
          </div>
        </div>

        {/* The Cookies We Set */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">The Cookies We Set</h2>
          <div className="space-y-4 sm:space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p className="mb-3 sm:mb-4 md:mb-5">
              If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.
            </p>
            
            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-md">
              <ul className="space-y-3 sm:space-y-4">
                <li className="border-l-4 border-emerald-400 pl-3 sm:pl-4 md:pl-5">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-emerald-400">Login related cookies</h3>
                  <p>We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged out.</p>
                </li>
                
                <li className="border-l-4 border-emerald-400 pl-3 sm:pl-4 md:pl-5">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-emerald-400">Email newsletters related cookies</h3>
                  <p>This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.</p>
                </li>
                
                <li className="border-l-4 border-emerald-400 pl-3 sm:pl-4 md:pl-5">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-emerald-400">Forms related cookies</h3>
                  <p>When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</p>
                </li>
                
                <li className="border-l-4 border-emerald-400 pl-3 sm:pl-4 md:pl-5">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-emerald-400">Site preferences cookies</h3>
                  <p>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Third Party Cookies */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-white">Third Party Cookies</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
            </p>
            
            <ul className="space-y-3 sm:space-y-4 pl-4 mt-4">
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span><strong className="text-white">Analytics cookies:</strong> This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span>For more information on Google Analytics cookies, see the official <a href="https://analytics.google.com/analytics/web/" className="text-emerald-400 hover:text-emerald-300 transition-colors underline" target="_blank" rel="noopener noreferrer">Google Analytics page</a>.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimizations our users appreciate the most.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span>We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work the social media sites will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* More Information */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">More Information</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-md">
            <p>
              Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
            </p>
            <p className="mb-3 sm:mb-4">However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>
            <ul className="space-y-2 sm:space-y-3 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 md:p-5">
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span>By email: <a href="mailto:info@cyberradarsystems.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">info@cyberradarsystems.com</a></span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span>By visiting this page on our website: <a href="/" className="text-emerald-400 hover:text-emerald-300 transition-colors">cyberradarsystems.com</a></span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span>By phone number: +1 9195424571</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span>By mail: 105 Elmsford St Durham NC 27703</span>
              </li>
            </ul>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
