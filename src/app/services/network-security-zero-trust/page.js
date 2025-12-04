'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function NetworkSecurityZeroTrust() {
  return (
    <div className="min-h-screen bg-[#0F1E2E] text-white">
      <Navbar currentPage="services" />
      
      {/* Hero Section with Banner Image */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="/submodule_images/pexels-tima-miroshnichenko-5380642.jpg" 
            alt="Network Security Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative px-4 md:px-8 py-24 md:py-32 max-w-7xl mx-auto">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Network Security / Zero-Trust" }
            ]}
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Network Security / <span className="text-indigo-400">Zero-Trust</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Next-gen firewalls, SASE, and zero-trust network architecture design for modern enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-indigo-900/20 to-violet-900/20 border-y border-indigo-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Service Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Traditional perimeter-based security is no longer sufficient. Our Zero-Trust Network Security services implement a "never trust, always verify" approach, ensuring every access request is authenticated, authorized, and encrypted.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We design and deploy next-generation firewalls, secure access service edge (SASE) solutions, and micro-segmentation strategies to protect your network from internal and external threats.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-2xl p-8 border border-indigo-500/30">
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span className="text-gray-300">Zero-trust architecture implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span className="text-gray-300">Next-generation firewall deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span className="text-gray-300">Network segmentation and microsegmentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span className="text-gray-300">SASE and SD-WAN security integration</span>
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
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-indigo-400">Zero-Trust Architecture</h3>
            <p className="text-gray-300 text-sm">Design and implementation of zero-trust principles across your entire network infrastructure.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-indigo-400">NGFW Deployment</h3>
            <p className="text-gray-300 text-sm">Next-generation firewall configuration with deep packet inspection and threat prevention.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-indigo-400">Network Segmentation</h3>
            <p className="text-gray-300 text-sm">Logical and physical network segmentation to limit lateral movement of threats.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-indigo-400">SASE Solutions</h3>
            <p className="text-gray-300 text-sm">Secure Access Service Edge implementation for cloud-first organizations.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-indigo-400">VPN & Remote Access</h3>
            <p className="text-gray-300 text-sm">Secure remote access solutions with multi-factor authentication and conditional access.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-500 transition-all">
            <h3 className="text-xl font-bold mb-3 text-indigo-400">IDS/IPS Systems</h3>
            <p className="text-gray-300 text-sm">Intrusion detection and prevention systems with real-time threat blocking.</p>
          </div>
        </div>

        {/* Second Content Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <img 
            src="/submodule_images/pexels-tima-miroshnichenko-5380673.jpg" 
            alt="Zero Trust Network Security"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">Zero-Trust Security Framework</h3>
            <p className="text-gray-200">Never trust, always verify - modern security for distributed networks</p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-indigo-900/20 to-violet-900/20 border-y border-indigo-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Network Security Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Palo Alto Networks', 'Fortinet', 'Cisco Firepower', 'Check Point', 'Zscaler', 'Cloudflare', 'Prisma Access', 'Illumio'].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-indigo-500/30 text-center hover:scale-105 transition-all">
                <p className="font-semibold text-indigo-400">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Implement Zero-Trust Security</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Modernize your network security with zero-trust architecture and next-gen firewalls.
        </p>
        <a href="/contact" className="inline-block bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg shadow-lg hover:shadow-indigo-500/50">
          Get Network Security Assessment
        </a>
      </section>

      <Footer />
    </div>
  );
}
