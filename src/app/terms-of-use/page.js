import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0d2340] to-[#0a1628] py-8 sm:py-12 md:py-16 lg:py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">Terms of Use</h1>
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
            <a href="/" className="hover:text-emerald-400 transition-colors">CYBER RADAR SYSTEMS</a>
            <span className="mx-1 sm:mx-2 md:mx-3">›</span>
            <span className="text-emerald-400">TERMS OF USE</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Introduction */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-emerald-400">Terms and Conditions</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>Please read these Terms and Conditions carefully before using Our Service.</p>
          </div>
        </div>

        {/* Interpretation and Definitions */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-white">Interpretation and Definitions</h2>
          <div className="space-y-4 sm:space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-emerald-400">Interpretation</h3>
              <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 text-emerald-400">Definitions</h3>
              <p className="mb-3 sm:mb-4 md:mb-5">For the purposes of these Terms and Conditions:</p>
              <ul className="space-y-2 sm:space-y-3 bg-[#0d1a2d] border border-gray-600 rounded-lg p-3 sm:p-4 md:p-5">
                <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                  <span><strong className="text-white">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Cyber Radar Systems.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                  <span><strong className="text-white">Service</strong> refers to the Website.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                  <span><strong className="text-white">Terms and Conditions</strong> mean these Terms and Conditions that form the entire agreement between You and the Company.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                  <span><strong className="text-white">Website</strong> refers to Cyber Radar Systems, accessible from cyberradarsystems.com</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                  <span><strong className="text-white">You</strong> mean the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Acknowledgment */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Acknowledgment</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
            <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
            <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
            <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
            <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
          </div>
        </div>

        {/* Links to Other Websites */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-white">Links to Other Websites</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
            <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
            <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>
          </div>
        </div>

        {/* Termination */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Termination</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-md">
            <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
            <p>Upon termination, Your right to use the Service will cease immediately.</p>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-white">Limitation of Liability</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
            <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
            <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</p>
          </div>
        </div>

        {/* AS IS Disclaimer */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-md">
            <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service.</p>
            <p>Without limitation to the foregoing, the Company provides no warranty or undertaking that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
            <p>Some jurisdictions do not allow the exclusion of certain types of warranties, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>
          </div>
        </div>

        {/* Governing Law */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-white">Governing Law</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
          </div>
        </div>

        {/* Disputes Resolution */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Disputes Resolution</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-md">
            <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
          </div>
        </div>

        {/* For EU Users */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-white">For European Union (EU) Users</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.</p>
          </div>
        </div>

        {/* United States Legal Compliance */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">United States Legal Compliance</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-md">
            <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
          </div>
        </div>

        {/* Severability and Waiver */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-white">Severability and Waiver</h2>
          <div className="space-y-4 sm:space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-emerald-400">Severability</h3>
              <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-emerald-400">Waiver</h3>
              <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
            </div>
          </div>
        </div>

        {/* Translation Interpretation */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Translation Interpretation</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-md">
            <p>These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.</p>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-white">Changes to These Terms and Conditions</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
            <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>
          </div>
        </div>

        {/* Contact Us */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-emerald-400 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-emerald-400">Contact Us</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p className="mb-3 sm:mb-4 md:mb-5">If you have any questions about these Terms and Conditions, You can contact us:</p>
            <ul className="space-y-2 sm:space-y-3 bg-[#0d1a2d] border border-emerald-500 rounded-lg p-3 sm:p-4 md:p-5">
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span>By email: info@cyberradarsystems.com</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="text-emerald-400 mt-0.5 sm:mt-1 text-lg">•</span>
                <span>By visiting this page on our website: cyberradarsystems.com</span>
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
