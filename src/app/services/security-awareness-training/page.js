'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function SecurityAwarenessTraining() {
  return (
    <div className="min-h-screen bg-[#0F1E2E] text-white">
      <Navbar currentPage="services" />
      
      {/* Hero Section with Banner Image */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="/submodule_images/pexels-cottonbro-5473960.jpg" 
            alt="Security Awareness Training Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative px-4 md:px-8 py-24 md:py-32 max-w-7xl mx-auto">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Security Awareness & Training" }
            ]}
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Security Awareness & <span className="text-cyan-400">Training</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Employee and developer training to prevent phishing, social engineering, and coding risks.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-cyan-900/20 to-sky-900/20 border-y border-cyan-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Service Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Your employees are your first line of defense. Our Security Awareness & Training services empower your workforce to recognize and respond to cyber threats, creating a strong security culture within your organization.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We offer engaging and interactive training modules, phishing simulations, and specialized training for developers to reduce human error and strengthen your overall security posture.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-sky-500/10 rounded-2xl p-8 border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span className="text-gray-300">Reduced risk of phishing and social engineering attacks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span className="text-gray-300">Improved security culture and employee vigilance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span className="text-gray-300">Compliance with industry training requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span className="text-gray-300">Measurable improvement in security awareness</span>
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
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Phishing Simulations</h3>
            <p className="text-gray-300 text-sm">Realistic phishing campaigns to test and train employees on identifying malicious emails.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Security Awareness Training</h3>
            <p className="text-gray-300 text-sm">Engaging video modules, quizzes, and interactive content on various security topics.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Secure Coding Training</h3>
            <p className="text-gray-300 text-sm">Specialized training for developers on secure coding practices and OWASP Top 10.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Role-Based Training</h3>
            <p className="text-gray-300 text-sm">Customized training paths for different roles, such as finance, HR, and executives.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Compliance Training</h3>
            <p className="text-gray-300 text-sm">Training modules covering GDPR, HIPAA, PCI-DSS, and other regulatory requirements.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Reporting & Analytics</h3>
            <p className="text-gray-300 text-sm">Dashboards and reports to track training progress and measure effectiveness.</p>
          </div>
        </div>

        {/* Second Content Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <img 
            src="/submodule_images/pexels-cottonbro-5473960.jpg" 
            alt="Security Training Program"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">Interactive Security Training</h3>
            <p className="text-gray-200">Engaging training programs to build a strong security culture</p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-cyan-900/20 to-sky-900/20 border-y border-cyan-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Training Platforms We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['KnowBe4', 'Proofpoint', 'Cofense', 'Mimecast', 'SANS Institute', 'Secure Code Warrior', 'Immersive Labs', 'Hoxhunt'].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-cyan-500/30 text-center hover:scale-105 transition-all">
                <p className="font-semibold text-cyan-400">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Empower Your Employees</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Build a strong security culture with our engaging and effective security awareness training programs.
        </p>
        <a href="/contact" className="inline-block bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg shadow-lg hover:shadow-cyan-500/50">
          Request a Training Demo
        </a>
      </section>

      <Footer />
    </div>
  );
}
