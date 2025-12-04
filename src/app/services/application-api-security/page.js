'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function ApplicationAPISecurity() {
  return (
    <div className="min-h-screen bg-[#0F1E2E] text-white">
      <Navbar currentPage="services" />
      
      {/* Hero Section with Banner Image */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="/submodule_images/pexels-cottonbro-5473399.jpg" 
            alt="Application API Security Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative px-4 md:px-8 py-24 md:py-32 max-w-7xl mx-auto">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Application & API Security" }
            ]}
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Application & <span className="text-orange-400">API Security</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Defend web, mobile, and API endpoints through DevSecOps integration and continuous security testing.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-orange-900/20 to-amber-900/20 border-y border-orange-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Service Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Modern applications and APIs are prime targets for cyberattacks. Our Application & API Security services integrate security throughout the software development lifecycle, from design to deployment and beyond.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We help you identify and remediate vulnerabilities in web applications, mobile apps, and APIs using automated scanning, manual penetration testing, and secure code review practices.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl p-8 border border-orange-500/30">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span className="text-gray-300">Shift-left security in development pipeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span className="text-gray-300">OWASP Top 10 vulnerability protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span className="text-gray-300">API security gateway implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span className="text-gray-300">Continuous security monitoring and testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What's Included</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-orange-500/30 hover:border-orange-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-orange-400">SAST & DAST</h3>
            <p className="text-gray-300 text-sm">Static and dynamic application security testing integrated into CI/CD pipelines.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-orange-500/30 hover:border-orange-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-orange-400">API Security Testing</h3>
            <p className="text-gray-300 text-sm">Comprehensive REST, GraphQL, and SOAP API vulnerability assessments and penetration testing.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-orange-500/30 hover:border-orange-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-orange-400">Web Application Firewall</h3>
            <p className="text-gray-300 text-sm">WAF deployment and configuration to protect against common web attacks and zero-days.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-orange-500/30 hover:border-orange-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-orange-400">Mobile App Security</h3>
            <p className="text-gray-300 text-sm">iOS and Android application security testing including reverse engineering analysis.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-orange-500/30 hover:border-orange-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-orange-400">Secure Code Review</h3>
            <p className="text-gray-300 text-sm">Manual code review by security experts to identify logic flaws and security weaknesses.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-orange-500/30 hover:border-orange-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-orange-400">DevSecOps Integration</h3>
            <p className="text-gray-300 text-sm">Security automation tools integrated into Jenkins, GitLab, GitHub Actions, and Azure DevOps.</p>
          </div>
        </div>

        {/* Second Content Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <img 
            src="/submodule_images/pexels-karola-g-5980889.jpg" 
            alt="Application Security Testing"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">DevSecOps Integration</h3>
            <p className="text-gray-200">Continuous security testing integrated into your development pipeline</p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-orange-900/20 to-amber-900/20 border-y border-orange-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Security Tools & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Burp Suite', 'OWASP ZAP', 'Checkmarx', 'Veracode', 'Snyk', 'SonarQube', 'Postman', 'Imperva WAF'].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-orange-500/30 text-center hover:scale-105 transition-all">
                <p className="font-semibold text-orange-400">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Applications & APIs</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Protect your digital assets with comprehensive application security testing and monitoring.
        </p>
        <a href="/contact" className="inline-block bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg shadow-lg hover:shadow-orange-500/50">
          Schedule Security Assessment
        </a>
      </section>

      <Footer />
    </div>
  );
}
