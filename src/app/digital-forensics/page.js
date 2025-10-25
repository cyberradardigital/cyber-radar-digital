'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection, SplitTextReveal } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function DigitalForensics() {
  const characteristicsRef = useGsapStagger(4, { stagger: 0.15 });
  const processRef = useGsapStagger(3, { stagger: 0.2 });
  const typesRef = useGsapStagger(6, { stagger: 0.1 });

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="services" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0d2340] to-[#0a1628] py-8 sm:py-12 md:py-16 lg:py-20 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <SplitTextReveal className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
            Digital Forensics
          </SplitTextReveal>
          <AnimatedParagraph animationType="fadeUp" delay={0.3} className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
            <a href="/" className="hover:text-emerald-400 transition-colors">CYBER RADAR SYSTEMS</a>
            <span className="mx-1 sm:mx-2 md:mx-3">›</span>
            <span className="text-emerald-400">DIGITAL FORENSICS</span>
          </AnimatedParagraph>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Introduction */}
        <AnimatedSection animationType="fadeUp" delay={0.2} className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 border border-emerald-400 shadow-2xl hover-glow hover-lift">
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
              <AnimatedParagraph animationType="fadeLeft" delay={0.4}>
                DF (Digital Forensics) is the scientifically proven methodology to preserve, gather, validate, identify, analyze, and present digital evidence derived from digital marketing services. Any size or kind of business needs to facilitate the reconstruction of the website and say a big bye to any intruders.
              </AnimatedParagraph>
              <AnimatedParagraph animationType="fadeLeft" delay={0.5}>
                Now you might be thinking, what is Digital evidence? Well…any data or information that is stored in a computer system or any website that could be read thoroughly and can be understood by the computer itself is the evidence that assists any entrepreneur to maintain backup! With the limitless distribution of PCs, the exchange of information has become quite inexpensive, also hacking is an easy task with the accessibility of smart tools, eventually, digital crime is harder to prosecute in the law. Hence, we've found a solution for you!
              </AnimatedParagraph>
              <AnimatedParagraph animationType="fadeLeft" delay={0.6} className="text-emerald-400 font-semibold text-base sm:text-lg">You should know some characteristics of the best digital proof:</AnimatedParagraph>
            </div>
          </div>
        </AnimatedSection>

        {/* Characteristics */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div ref={characteristicsRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {[
              { title: "Justifiable", desc: "It should be confirmed with certain laws and regulations" },
              { title: "Accuracy", desc: "An evidence should specific with an individual and events" },
              { title: "Delicate", desc: "It can be easily altered or destroyed" },
              { title: "Complete", desc: "It should contain the full body knowledge" }
            ].map((char, index) => (
              <div key={index} className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-900 font-bold text-lg sm:text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-emerald-400">{char.title}</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{char.desc}</p>
              </div>
            ))}
          </div>
          <AnimatedSection animationType="fadeLeft" delay={0.8} className="mt-6 sm:mt-8 bg-[#0f1f33] border-l-4 border-emerald-400 rounded-r-lg p-4 sm:p-5 md:p-6 shadow-lg">
            <AnimatedParagraph animationType="fadeLeft" delay={0.9} className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Cyber Radar Systems know some of the locations for Digital Evidence, such as Internet history files, Unallocated spaces, Personal chat room records, settings, folder structure, File storage dates, file-sharing ability, and a lot more, therefore, your data is secured and is with us!
            </AnimatedParagraph>
          </AnimatedSection>
        </div>

        {/* Process Performed */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-white">
            Process performed for Digital Forensics
          </AnimatedHeading>
          
          <div ref={processRef} className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 hover:border-emerald-400 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-emerald-400">Identification</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Our professionals very well know how the forensic process goes, we analyze what evidence is present, where and how it is stored. Electronic storage could be personal computers, smart mobile phones, PDAs, smart cards. We observe the key parameters, means type of information, and format.
              </p>
            </div>

            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 hover:border-emerald-400 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-emerald-400">Preservation</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Physical as well as digital evidence needs to be isolated and preserved in the safest space. The prevention in Digital forensics means acting as a safeguard for people to use digital devices or permitting other electro devices to be utilized within an affected radius.
              </p>
            </div>

            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 hover:border-emerald-400 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-emerald-400">Analysis and Documentation</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Once the evidence is found, it has to be reconstructed and needs to conclude, the process can be lengthy as it takes multiple analyses to support a crime theory. Moreover, the record of stolen data should be created as it assists in reviewing again.
              </p>
            </div>
          </div>
        </div>

        {/* Types of Digital Forensics */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">
            Types of Digital Forensics with Cyber Radar Systems
          </AnimatedHeading>
          <div ref={typesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {[
              { title: "Disk Forensics", desc: "Our professionals extract the data from storage media by searching active or deleted files" },
              { title: "Network Forensics", desc: "We monitor as well as analyze computer network traffic to gather important legal information" },
              { title: "Wireless Forensics", desc: "We're offering your brand wireless forensics that your business needs to collect the data" },
              { title: "Malware Forensics", desc: "We deal with your malicious code, and study their payload, viruses, worms, etc…" },
              { title: "Email Forensics", desc: "Our experts deal with the recovery and analysis of emails, calendars, and contacts" },
              { title: "Mobile phone Forensic", desc: "We can deal with mobile devices as assist you to retrieve your data such as incoming, outgoing SMS/MMS, Audio, and Videos" }
            ].map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 text-emerald-400">{type.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* When is Digital Forensics used */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">When is Digital Forensics used in Business Setting</h2>
          <div className="space-y-4 sm:space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              As you know in the physical world, we leave our fingerprints, hairs, clothing for DNA when we come into interact with any object, likewise in the digital realm we provide echoes and these digital traces include activity logs, timestamps, metadata, and a lot more.
            </p>
            <p>
              Cyber Radar Systems consider this as useful evidence in preparing the origins of a document for legal purposes in knowing the activities of the parties involved such as cyber criminals to reconstruct the information. While monitoring any firm's systems and software our professionals trace the internal gaps for the security professionals protecting an organization.
            </p>
            <p>
              From a scientific digital forensic point of view, a study of hackers' minds with forensic analysis and techniques may yield insights into future attack trends. Digital Forensics has tackled a key role in the law enforcement sector to club the exploits of fraudsters, identify thieves, and know what's happening in the cybercriminal ecosystem.
            </p>
            <p>
              Yes…our professionals work on cellphone forensics in order to offer the best solutions and working conditions. As you know there are a number of mobile and IoT devices in the world, therefore, there is a sub-section of this sort of hardware. Cellphone Digital Forensics are effective in nature to be used as it's a field that embraces a number of areas that include the recovery of lost phone's data such as call logs, texts, or any either confidential information.
            </p>
          </div>
        </div>

        {/* Why choose Cyber Radar Systems */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-gradient-to-r from-[#0d2340] to-[#0f1f33] border border-emerald-400 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-emerald-400">Why choose Cyber Radar Systems</h2>
          <div className="space-y-4 sm:space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
            <p>
              Our professionals dealing with evidence know how a particular object sometimes turns into vital assets for the case. Digital Forensics is an essential domain for cybersecurity website as it extracts and investigates all digital evidence involved in cybercrime.
            </p>
            <p>
              Do you know to pursue cybercrime legally firms require strong proof? And, then comes to the cyber radar systems sub domain i.e Digital Forensics that enter into the picture of reality.
            </p>
          </div>
          <div className="mt-6 sm:mt-8">
            <a href="#contact" className="inline-block bg-emerald-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-emerald-300 transition-colors font-semibold text-sm sm:text-base shadow-lg">
              Talk to our experts
            </a>
          </div>
        </div>

        {/* Penetration Testing */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Our Cyber Security Testing Services</h2>
          
          <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg mb-6 sm:mb-8">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400">Penetration Testing</h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Cyber radar systems penetration testing (ethical hacking) services help in testing the security of an IT organization. We do this by identifying the risks and weaknesses in their security systems and fix those gaps by which a cyber attacker can break into the environment and can copy the important data and information.
            </p>
          </div>

          {/* Why Penetration Testing is Important */}
          <div className="bg-[#0d1a2d] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Why Penetration Testing is Important</h3>
            <div className="space-y-3 sm:space-y-4">
              {[
                "It helps in testing the response and detects the vulnerabilities.",
                "Tests the users in conjunction with your business external and internal networks.",
                "Manual testing helps in simulating the current threats in your business. Threats like pivoting and post-exploitation.",
                "Approves inside and outer security controls, including protections around high-esteem systems.",
                "Meets the requirements of various compliances like HIPAA, PCI DSS, and many more."
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">{point}</p>
                </div>
              ))}
              <div className="mt-6 sm:mt-8 p-4 sm:p-5 md:p-6 bg-[#0a1628] border-l-4 border-emerald-400 rounded-r-lg">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Effective security starts with a clear understanding of vulnerabilities. Our experts can help your business in strengthening business security flow. Along with providing experienced and skilled experts we also bring the most anticipated and potential source of threats to your knowledge. With the help of Cyber radar systems security testing methods and consultancy, you can easily find the weak spots in your business. Our experts will guide you in fixing those issues before any cyber attack takes place.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cyber Security Monitoring Services */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Cyber Radar Systems Cyber Security Monitoring Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {[
              "Our managed security monitoring services use the full potential to find the set of vulnerabilities and risks in your business process.",
              "We provide unparalleled security monitoring services to safeguard your business from various risks and cyber-attacks.",
              "We deliver the most comprehensive set of industrial security capabilities with enterprise-class technology offering the most unmatched threat detection services.",
              "Proactive monitoring across the whole security ecosystem of an organization minimizes the chances of various cyber security attacks."
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-900 font-bold text-lg sm:text-xl">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Managed Detection and Response Services */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Our Managed Detection and Response Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            
            {/* Incident Management Services */}
            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 text-emerald-400">Incident Management Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Incident management plan development",
                  "Incident management program review",
                  "Incident response and forensics",
                  "Tabletop exercises",
                  "Breach management programs",
                  "Training and awareness"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                    <span className="text-emerald-400 text-lg flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Managed Security Services */}
            <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 text-emerald-400">Managed Security Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Managed SEIM",
                  "Managed CISO programs",
                  "Managed security programs",
                  "Security process programs",
                  "Security role performance",
                  "Managing detection and response"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                    <span className="text-emerald-400 text-lg flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Our Security Management Services */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-white">Our Security Management Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            
            {[
              {
                title: "Application Security",
                description: "We focus on securing all the important applications of your business by implementing our security services."
              },
              {
                title: "Network Security",
                description: "Providing the most efficient enterprise security tools to your business CISO so that they can tackle all the issues."
              },
              {
                title: "Incident Response",
                description: "Rapid and thorough incident response is very essential for minimizing all the threats."
              },
              {
                title: "Security Assessment and Audits",
                description: "Providing comprehensive security audit services to find the weakness and gaps in your business flow."
              },
              {
                title: "IT Security Operations",
                description: "24*7 IT security services and solutions by experts to identify and fix the risks in your business model."
              },
              {
                title: "Dark Web Monitoring",
                description: "We also help in monitoring the dark web and provide the most intelligent breach alerts around the cyber security threats."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-emerald-400">{service.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">{service.description}</p>
              </div>
            ))}

          </div>
        </div>

        {/* Benefits of Our Monitoring Services */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-[#0f1f33] border border-emerald-400 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-emerald-400">Benefits of Our Monitoring Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              "24*7 chat support and maintenance services",
              "Monitoring intrusion prevention services",
              "Efficient firewall monitoring",
              "Network intrusion detection",
              "Log monitoring, Correlation, and storage"
            ].map((benefit, index) => (
              <div key={index} className="bg-[#0d1a2d] border-l-4 border-emerald-400 rounded-r-lg p-3 sm:p-4 hover:shadow-lg transition-all">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-300">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-r from-[#0d2340] via-[#0f1f33] to-[#0d2340] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl text-center">
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
            The cyber radar systems approach to various security services provides a better idea to clients and businesses about their business risks and vulnerabilities. We provide a team of highly experienced and skilled experts to tackle the security gaps in your business flow. Contact us and get the best ever cyber security services.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a href="#assessment" className="bg-emerald-400 text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-emerald-300 transition-colors font-semibold text-xs sm:text-sm">
              Best Assessment Security Services
            </a>
            <a href="#compliance" className="bg-emerald-400 text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-emerald-300 transition-colors font-semibold text-xs sm:text-sm">
              Best Compliance Security Services
            </a>
            <a href="#testing" className="bg-emerald-400 text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-emerald-300 transition-colors font-semibold text-xs sm:text-sm">
              Best Cyber Security Testing Monitoring
            </a>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
