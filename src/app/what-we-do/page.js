'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function WhatWeDo() {
  const [activeTab, setActiveTab] = useState('professional');

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="company" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0d2340] to-[#0a1628] py-8 sm:py-12 md:py-16 lg:py-20 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 animate-fade-in-down">What We Do</h1>
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider animate-fade-in-up delay-200">
            <a href="/" className="hover:text-emerald-400 transition-colors">CYBER RADAR SYSTEMS</a>
            <span className="mx-2 md:mx-3">›</span>
            <span className="text-emerald-400">WHAT WE DO</span>
          </p>
        </div>
      </section>

      {/* Main Content Section with Tabs */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Illustration */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative max-w-md w-full">
              <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Background gradient rectangle */}
                <rect x="50" y="50" width="400" height="300" rx="20" fill="url(#grad1)"/>
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#60d5f2', stopOpacity: 0.8}} />
                    <stop offset="100%" style={{stopColor: '#4db8d8', stopOpacity: 0.9}} />
                  </linearGradient>
                </defs>
                
                {/* Computer/Monitor */}
                <rect x="150" y="120" width="280" height="180" rx="8" fill="#f8f9fa"/>
                <rect x="160" y="130" width="260" height="150" rx="4" fill="#fff"/>
                
                {/* Monitor stand */}
                <rect x="265" y="300" width="50" height="30" fill="#e9a353"/>
                <rect x="240" y="330" width="100" height="10" rx="5" fill="#e9a353"/>
                
                {/* Screen elements - Checkmark */}
                <circle cx="280" cy="200" r="35" fill="#4a90e2" opacity="0.3"/>
                <path d="M260 200 L275 215 L300 185" stroke="#4a90e2" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                
                {/* Lock icon on screen */}
                <circle cx="350" cy="170" r="25" fill="#4a90e2" opacity="0.9"/>
                <rect x="340" y="175" width="20" height="25" rx="3" fill="#fff"/>
                <path d="M345 175 V165 Q345 157 350 157 Q355 157 355 165 V175" stroke="#fff" strokeWidth="3" fill="none"/>
                <circle cx="350" cy="185" r="3" fill="#4a90e2"/>
                
                {/* Email icon */}
                <rect x="180" y="145" width="50" height="35" rx="4" fill="#4a90e2"/>
                <path d="M185 150 L205 165 L225 150" stroke="#fff" strokeWidth="2" fill="none"/>
                
                {/* Alert/Warning icon */}
                <circle cx="390" cy="250" r="18" fill="#f5a623"/>
                <text x="390" y="260" fontSize="24" fill="#fff" textAnchor="middle" fontWeight="bold">!</text>
                
                {/* Person figure */}
                <circle cx="120" cy="240" r="22" fill="#ff6b9d"/>
                <ellipse cx="120" cy="265" rx="12" ry="8" fill="#ffb6d1"/>
                <rect x="105" y="270" width="30" height="50" rx="8" fill="#4a90e2"/>
                <rect x="95" y="280" width="15" height="45" rx="6" fill="#ff6b9d"/>
                <rect x="130" y="280" width="15" height="45" rx="6" fill="#ff6b9d"/>
                <rect x="108" y="315" width="12" height="30" rx="6" fill="#2c5f8d"/>
                <rect x="120" y="315" width="12" height="30" rx="6" fill="#2c5f8d"/>
                
                {/* Floating elements */}
                <circle cx="100" cy="100" r="8" fill="#4a90e2" opacity="0.6"/>
                <circle cx="420" cy="110" r="6" fill="#f5a623" opacity="0.6"/>
                <circle cx="440" cy="320" r="10" fill="#60d5f2" opacity="0.5"/>
                
                {/* Lines/connections */}
                <line x1="130" y1="240" x2="160" y2="200" stroke="#4a90e2" strokeWidth="2" opacity="0.4" strokeDasharray="5,5"/>
              </svg>
            </div>
          </div>

          {/* Content with Tabs */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-3 text-white">
                We at Cyber Radar Systems offer complete range of services to help you Secure your Systems and meet the security compliances.
              </h2>
              <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm">
                <button
                  onClick={() => setActiveTab('professional')}
                  className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                    activeTab === 'professional'
                      ? 'bg-[#1a2f43] text-emerald-400 border border-emerald-400'
                      : 'bg-[#1a2f43] text-gray-300 hover:text-emerald-400'
                  }`}
                >
                  PROFESSIONAL SERVICES
                </button>
                <button
                  onClick={() => setActiveTab('training')}
                  className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                    activeTab === 'training'
                      ? 'bg-[#1a2f43] text-emerald-400 border border-emerald-400'
                      : 'bg-[#1a2f43] text-gray-300 hover:text-emerald-400'
                  }`}
                >
                  TRAINING
                </button>
                <button
                  onClick={() => setActiveTab('managed')}
                  className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                    activeTab === 'managed'
                      ? 'bg-[#1a2f43] text-emerald-400 border border-emerald-400'
                      : 'bg-[#1a2f43] text-gray-300 hover:text-emerald-400'
                  }`}
                >
                  MANAGED SECURITY SERVICES
                </button>
              </div>
            </div>

            {/* Professional Services Content */}
            {activeTab === 'professional' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Professional Services</h3>
                <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                  <p>
                    We provide comprehensive SECURITY SERVICES right from Risk analysis to vulnerabilities to help strengthen organizations security environment, including audit and vulnerability and implementation of ISO27001 controls to help address the risk of the industry.
                  </p>
                  <p>
                    If you or your customer data security is critical to your company's success, then you need to be strategic about the solutions you choose and the partners you work with. ISO27001 ISMS implementation, GDPR Readiness, SOC II assessment, PCI-DSS and HIPAA like data security implementations.
                  </p>
                  <p>
                    Implementation of comprehensive projects across banking in USA, Middle East, Asia & Africa and compliance projects with international standards like CIS, FBI, SWIFT, PCI-DSS, ISO 27001, SOC, ISO 20000, COBIT 5, ITIL and GDPR.
                  </p>
                  <p>
                    Cyber Radar Systems works in a very professional business analyst or technology service, audit through gap assessment and implementation to design system to get a secure and protection controls for business.
                  </p>
                  <p>
                    Latest industrial trends in and solutions like Data Loss Prevention, Dedicated DLP Implementation and Identity and Access Management solution. Mobility Security solutions through deployment of Data Loss Prevention and other Data Leakage Prevention technologies across organization end points.
                  </p>
                </div>
              </div>
            )}

            {/* Training Content */}
            {activeTab === 'training' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">TRAINING</h3>
                <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                  <p>
                    A proper training program raises the awareness levels and understanding of how to protect the information systems as well as prevent attacks and meet Security compliances.
                  </p>
                  <p>
                    We provide best of the training programs on security tools. Our training programs include trainings on Security Awareness, Security Architecture Design and Solutions, Certified Ethical Hacking, Certified Security Analyst, Certified Incident Handling, Network Security Administration etc.
                  </p>
                  <p>
                    We conduct trainings on testing methods such as Penetration Testing and effective usage of security management tool such as SIEM, Web Application Security and Identity – Access Management.
                  </p>
                  <p>
                    Our trainings on Training on Compliance, Audit, Risk and Governance Areas comprises training on IT Audit, SOX IT Audit, GLBA Audit, Enterprise Risk Management, PCI DSS Security Compliance, ISO 27001 Security Audit and SAS 70/ SOC 1 / SOC 3 Audits.
                  </p>
                </div>
              </div>
            )}

            {/* Managed Security Services Content */}
            {activeTab === 'managed' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Managed Security Services</h3>
                <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                  <p>
                    We provide managed security services such as SOC (Security Operation Center), SIEM (Security Incident Event Management), Continuous Security Monitoring, Level 1, Level 2 & Level 3 Support, Hosting Data Center, Vulnerability Management, Security Architecture Design & Solutions, Digital Forensics.
                  </p>
                  <p>
                    We design and implement softwares and remediation such as Web Application Firewall (WAF), Incident Response Plan, Identity and Access Management and DLP (Data Loss Prevention).
                  </p>
                  <p>
                    We also provide testing services like Penetration Testing & Application Security Testing, Static Code Analysis, Dynamic Testing, and Manual Application Testing.
                  </p>
                  <p>
                    We also conduct gap assessments, PCI DSS Security Compliance, IT Audit, Risk and Governance Activities that comprises IT Audit, SOX IT Audit, GLBA Audit, Enterprise Risk Management., ISO 27001 Security Audit and SAS 70/ SOC 1 / SOC 3 Audits.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-16 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Our Core Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service 1 */}
            <div className="bg-[#0f1f33] p-6 md:p-8 rounded-lg border border-gray-800 hover:border-emerald-400 transition-all">
              <div className="mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4 L40 12 L40 24 Q40 34 24 44 Q8 34 8 24 L8 12 Z" 
                        stroke="#3d9b89" strokeWidth="2" fill="none"/>
                  <circle cx="24" cy="24" r="4" fill="#3d9b89"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Risk Assessment</h3>
              <p className="text-gray-400 text-sm">
                Comprehensive security risk analysis and vulnerability assessments to strengthen your organization's security posture.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-[#0f1f33] p-6 md:p-8 rounded-lg border border-gray-800 hover:border-emerald-400 transition-all">
              <div className="mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="16" width="24" height="20" rx="2" stroke="#3d9b89" strokeWidth="2" fill="none"/>
                  <path d="M16 16 V12 Q16 8 24 8 Q32 8 32 12 V16" stroke="#3d9b89" strokeWidth="2" fill="none"/>
                  <circle cx="24" cy="26" r="3" fill="#3d9b89"/>
                  <rect x="22" y="26" width="4" height="6" fill="#3d9b89"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Compliance Services</h3>
              <p className="text-gray-400 text-sm">
                ISO 27001, PCI-DSS, GDPR, SOC II, and HIPAA compliance implementation and audit services.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-[#0f1f33] p-6 md:p-8 rounded-lg border border-gray-800 hover:border-emerald-400 transition-all">
              <div className="mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="12" width="32" height="24" rx="2" stroke="#3d9b89" strokeWidth="2" fill="none"/>
                  <line x1="8" y1="20" x2="40" y2="20" stroke="#3d9b89" strokeWidth="2"/>
                  <circle cx="14" cy="16" r="2" fill="#3d9b89"/>
                  <circle cx="20" cy="16" r="2" fill="#3d9b89"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Loss Prevention</h3>
              <p className="text-gray-400 text-sm">
                DLP implementation and data leakage prevention technologies across organization endpoints.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-[#0f1f33] p-6 md:p-8 rounded-lg border border-gray-800 hover:border-emerald-400 transition-all">
              <div className="mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="16" r="6" stroke="#3d9b89" strokeWidth="2" fill="none"/>
                  <path d="M12 38 Q12 28 24 28 Q36 28 36 38" stroke="#3d9b89" strokeWidth="2" fill="none"/>
                  <circle cx="24" cy="16" r="2" fill="#3d9b89"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Identity & Access Management</h3>
              <p className="text-gray-400 text-sm">
                Advanced IAM solutions to control and monitor user access across your organization.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-[#0f1f33] p-6 md:p-8 rounded-lg border border-gray-800 hover:border-emerald-400 transition-all">
              <div className="mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="28" height="28" rx="4" stroke="#3d9b89" strokeWidth="2" fill="none"/>
                  <line x1="18" y1="18" x2="30" y2="30" stroke="#3d9b89" strokeWidth="2"/>
                  <line x1="30" y1="18" x2="18" y2="30" stroke="#3d9b89" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Security Audits</h3>
              <p className="text-gray-400 text-sm">
                Comprehensive IT security audits including SOX, SOC II, PCI, ISO 27001, NIST, and VAPT.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-[#0f1f33] p-6 md:p-8 rounded-lg border border-gray-800 hover:border-emerald-400 transition-all">
              <div className="mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="16" stroke="#3d9b89" strokeWidth="2" fill="none"/>
                  <circle cx="24" cy="24" r="10" stroke="#3d9b89" strokeWidth="2" fill="none"/>
                  <circle cx="24" cy="24" r="4" fill="#3d9b89"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Managed Security Services</h3>
              <p className="text-gray-400 text-sm">
                24/7 security monitoring and management services to protect your critical infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
