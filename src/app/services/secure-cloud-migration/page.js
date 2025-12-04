'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function SecureCloudMigration() {
  return (
    <div className="min-h-screen bg-[#0F1E2E] text-white">
      <Navbar currentPage="services" />
      
      {/* Hero Section with Banner Image */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="/submodule_images/pexels-markusspiske-2061168.jpg" 
            alt="Secure Cloud Migration Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative px-4 md:px-8 py-24 md:py-32 max-w-7xl mx-auto">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Secure Cloud Migration" }
            ]}
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Secure Cloud <span className="text-teal-400">Migration</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Security assessment and compliance during digital transformation to ensure a secure transition to the cloud.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-teal-900/20 to-emerald-900/20 border-y border-teal-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Service Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Migrating to the cloud offers numerous benefits, but it also introduces new security challenges. Our Secure Cloud Migration services ensure that your transition to the cloud is seamless, secure, and compliant from start to finish.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We follow a structured methodology to assess your current environment, design a secure cloud architecture, and execute the migration with minimal disruption to your business operations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-2xl p-8 border border-teal-500/30">
              <h3 className="text-2xl font-bold mb-4 text-teal-400">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">✓</span>
                  <span className="text-gray-300">Secure and compliant cloud migration strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">✓</span>
                  <span className="text-gray-300">Minimized risk of data exposure during migration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">✓</span>
                  <span className="text-gray-300">Optimized cloud security posture from day one</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">✓</span>
                  <span className="text-gray-300">Expert guidance on cloud-native security controls</span>
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
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-teal-500/30 hover:border-teal-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-teal-400">Pre-Migration Assessment</h3>
            <p className="text-gray-300 text-sm">Comprehensive review of your current infrastructure, applications, and security controls.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-teal-500/30 hover:border-teal-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-teal-400">Secure Architecture Design</h3>
            <p className="text-gray-300 text-sm">Design of a secure and compliant cloud architecture based on your business needs.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-teal-500/30 hover:border-teal-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-teal-400">Data Migration Security</h3>
            <p className="text-gray-300 text-sm">Secure transfer of data to the cloud with encryption and data integrity checks.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-teal-500/30 hover:border-teal-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-teal-400">Cloud Security Configuration</h3>
            <p className="text-gray-300 text-sm">Implementation of cloud-native security controls, identity and access management, and network security.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-teal-500/30 hover:border-teal-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-teal-400">Post-Migration Validation</h3>
            <p className="text-gray-300 text-sm">Security testing and validation to ensure all controls are working as expected.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-teal-500/30 hover:border-teal-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-teal-400">Compliance & Governance</h3>
            <p className="text-gray-300 text-sm">Ensuring your new cloud environment meets all regulatory and compliance requirements.</p>
          </div>
        </div>

        {/* Second Content Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <img 
            src="/submodule_images/pexels-karola-g-5980889.jpg" 
            alt="Cloud Migration Security"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">Secure Cloud Architecture</h3>
            <p className="text-gray-200">Comprehensive security controls for your cloud migration journey</p>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-teal-900/20 to-emerald-900/20 border-y border-teal-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Supported Cloud Platforms</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-teal-500/30 text-center hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-teal-400">Amazon Web Services</h3>
              <p className="text-gray-300 text-sm">Secure migration to AWS with well-architected framework principles.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-teal-500/30 text-center hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-teal-400">Microsoft Azure</h3>
              <p className="text-gray-300 text-sm">Migration to Azure with security best practices from the Cloud Adoption Framework.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-teal-500/30 text-center hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-teal-400">Google Cloud Platform</h3>
              <p className="text-gray-300 text-sm">Secure migration to GCP with best practices from the Google Cloud security foundations guide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Migrate to the Cloud Securely</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Ensure a secure and compliant transition to the cloud with our expert migration services.
        </p>
        <a href="/contact" className="inline-block bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg shadow-lg hover:shadow-teal-500/50">
          Plan Your Cloud Migration
        </a>
      </section>

      <Footer />
    </div>
  );
}
