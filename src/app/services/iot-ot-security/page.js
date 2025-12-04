'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function IoTOTSecurity() {
  return (
    <div className="min-h-screen bg-[#0F1E2E] text-white">
      <Navbar currentPage="services" />
      
      {/* Hero Section with Banner Image */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="/submodule_images/pexels-sora-shimazaki-5935787.jpg" 
            alt="IoT OT Security Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative px-4 md:px-8 py-24 md:py-32 max-w-7xl mx-auto">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "IoT/OT Security" }
            ]}
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              IoT/<span className="text-green-400">OT Security</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive security for industrial control systems, smart devices, and connected infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-y border-green-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Service Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                The Internet of Things and Operational Technology environments present unique security challenges. Our specialized IoT/OT security services protect your connected devices and industrial systems from cyber threats while maintaining operational continuity.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We provide comprehensive security assessments, monitoring, and protection for SCADA systems, industrial IoT devices, and smart infrastructure across manufacturing, energy, transportation, and critical infrastructure sectors.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">Protection of critical industrial systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">Real-time monitoring of IoT devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">Secure device lifecycle management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">Compliance with industrial security standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What's Included</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/30 hover:border-green-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-green-400">Device Discovery</h3>
            <p className="text-gray-300 text-sm">Automated discovery and inventory of all IoT and OT devices across your network.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/30 hover:border-green-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-green-400">Vulnerability Assessment</h3>
            <p className="text-gray-300 text-sm">Comprehensive security testing of industrial protocols and device firmware.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/30 hover:border-green-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-green-400">Network Segmentation</h3>
            <p className="text-gray-300 text-sm">Isolation of critical OT systems from IT networks using secure gateways.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/30 hover:border-green-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-green-400">Protocol Security</h3>
            <p className="text-gray-300 text-sm">Protection for Modbus, DNP3, OPC-UA, and other industrial protocols.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/30 hover:border-green-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-green-400">Threat Detection</h3>
            <p className="text-gray-300 text-sm">AI-powered anomaly detection for industrial control systems.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/30 hover:border-green-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-green-400">Incident Response</h3>
            <p className="text-gray-300 text-sm">Specialized response plans for industrial cyber incidents.</p>
          </div>
        </div>

        {/* Second Content Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <img 
            src="/submodule_images/pexels-mati-5952651.jpg" 
            alt="Industrial IoT Security"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">Industrial Control System Protection</h3>
            <p className="text-gray-200">Securing critical infrastructure and manufacturing environments</p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-y border-green-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">IoT/OT Security Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Nozomi Networks', 'Claroty', 'Dragos', 'Armis', 'Microsoft Defender for IoT', 'Cisco Cyber Vision', 'Kaspersky IoT', 'Fortinet OT Security'].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/30 text-center hover:scale-105 transition-all">
                <p className="font-semibold text-green-400">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Connected Infrastructure</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Protect your IoT and OT environments with specialized security solutions.
        </p>
        <a href="/contact" className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg shadow-lg hover:shadow-green-500/50">
          Request IoT Security Assessment
        </a>
      </section>

      <Footer />
    </div>
  );
}