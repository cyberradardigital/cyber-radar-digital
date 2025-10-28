'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection, SplitTextReveal } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function Recruitment() {
  const strengthsRef = useGsapStagger(4, { stagger: 0.15 });
  const areasRef = useGsapStagger(10, { stagger: 0.08 });

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="services" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0d2340] to-[#0a1628] py-8 sm:py-12 md:py-16 lg:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <SplitTextReveal className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
            Staffing and Recruitment
          </SplitTextReveal>
          <AnimatedParagraph animationType="fadeUp" delay={0.3} className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
            <a href="/" className="hover:text-emerald-400 transition-colors">CYBER RADAR SYSTEMS</a>
            <span className="mx-1 sm:mx-2 md:mx-3">›</span>
            <span className="text-emerald-400">RECRUITMENT</span>
          </AnimatedParagraph>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Our Company */}
        <AnimatedSection animationType="fadeUp" delay={0.2} className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 border border-emerald-400 shadow-2xl hover-glow hover-lift">
            <AnimatedHeading animationType="fadeLeft" delay={0.3} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-emerald-400">
              Our Company
            </AnimatedHeading>
            <div className="space-y-4 sm:space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
              <AnimatedParagraph animationType="fadeLeft" delay={0.4}>
                Cyber Radar Systems Staffing and Recruitment Company is truly a professional group of experts providing exceptional staffing and recruitments services for organizations. The company follows international standards, the best practices and business ethics to deliver world class hiring services.
              </AnimatedParagraph>
              <AnimatedParagraph animationType="fadeLeft" delay={0.5}>
                The process of hiring is completely transparent and unbiased performed by experienced and knowledgeable experts who have the ability to choose the right people for the right job. We understand that people are assets for the company and therefore our efforts to discover the best talent add value to your business.
              </AnimatedParagraph>
              <AnimatedParagraph animationType="fadeLeft" delay={0.6}>
                We are one of the best staffing agencies because we deliver exemplary recruitment services in order to improve the working standards of our client's businesses and that sets us apart.
              </AnimatedParagraph>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Process */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="bg-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg hover-lift hover-glow">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Our Process</h2>
            <div className="space-y-4 sm:space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
              <p>
                In such a dynamic business environment, it is imperative to discover talent to meet a company's business objectives. Cyber Radar Systems Staffing and Recruitment Company strive to provide the right people at the right time to the right place in order to achieve a competitive advantage. Our commitment is to deliver high end hiring services focused on the evolving job requirements of companies.
              </p>
              <p>
                We are passionate towards identifying and assessing talent for our organizations and encouraging them to achieve success. Our process includes direct placement opportunities, contract to hire, specialty areas opportunities, and other managed services. We believe in identifying and nurturing talent to the fullest extent in order to insure organizational success for our clients.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Strength */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">
            Our Strength
          </AnimatedHeading>
          <div ref={strengthsRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            
            {[
              {
                icon: (
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                ),
                text: "We are committed to maintaining high quality standards for hiring qualified talent who will improve and contribute to your company's vision, mission and success."
              },
              {
                icon: (
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                text: "We specialize in providing full scale outsourcing and staffing in different areas with training options also available. We are known for delivering world class hiring services."
              },
              {
                icon: (
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                text: "Our company is set apart from the others. We deliver the best and the most remarkable hiring services for clients and job candidates. We accomplish this by performing a rigorous screening and surveying process to identify the best talents to fill our client's job opportunities."
              },
              {
                icon: (
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                ),
                text: "You can count on us for our service delivery as we are extremely dedicated and committed to what we do. Our relationship with clients is built on trust; we nurture our relationships with our clients by fulfilling the promises we make to them."
              }
            ].map((strength, index) => (
              <div key={index} className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all hover-lift">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    {strength.icon}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{strength.text}</p>
                </div>
              </div>
            ))}

          </div>
          <div className="mt-6 sm:mt-8 bg-[#0f1f33] border-l-4 border-emerald-400 rounded-r-lg p-4 sm:p-5 md:p-6 shadow-lg animate-fade-in-left delay-600">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Our clients provide us with feedback and explain their high levels of satisfaction with our placements.
            </p>
          </div>
        </div>

        {/* Full Time and Temporary Jobs */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-fade-in-up delay-300">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl hover-lift hover-glow">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-emerald-400">Full Time and Temporary or Contracting Jobs</h2>
            <div className="space-y-4 sm:space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed md:leading-relaxed">
              <p>
                We have a competent team of professionals who maintain long term relationships with the employers and create the best opportunities for job seekers for full time and temporary or contracting jobs in various areas such as finance, accounting, information technology, banking and many more.
              </p>
              <p>
                For a good career opportunity, candidates benefit from our effective analysis that assesses their strengths, career potential and shortcomings. Our professionals assist candidates and help them understand and develop their skills and personality in order to be considered for a job opportunity. Our experienced professionals help potential candidates face the challenges of the industry and offer advice on how to fulfill their dreams.
              </p>
              <p>
                Our sourcing strategy is based on referrals, long term employer relationships and high quality customer services. We adopt the best staffing and recruitment practices to bridge the gap between the employers and job seekers.
              </p>
            </div>
          </div>
        </div>

        {/* Job Areas */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white text-center">
            We Specialize In
          </AnimatedHeading>
          <div ref={areasRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              'Finance',
              'Accounting',
              'Information Technology',
              'Banking',
              'Sales & Marketing',
              'Human Resources',
              'Operations',
              'Legal',
              'Healthcare',
              'Engineering'
            ].map((area, index) => (
              <div key={index} className="bg-[#0f1f33] border border-gray-700 rounded-lg p-3 sm:p-4 text-center hover:border-emerald-400 hover:shadow-lg transition-all hover-lift">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full bg-emerald-400 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm font-semibold">{area}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-r from-[#0d2340] via-[#0f1f33] to-[#0d2340] border-2 border-emerald-400 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl text-center animate-fade-in-up delay-400 hover-glow animate-pulse-slow">
          <div className="mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto rounded-full bg-emerald-400 flex items-center justify-center">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-emerald-400">Our Mission</h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed italic">
            "To deliver the highest quality services ensuring that the right person is at the right place."
          </p>
          <div className="mt-6 sm:mt-8">
            <a href="#contact" className="inline-block bg-emerald-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-emerald-300 transition-colors font-semibold text-sm sm:text-base shadow-lg">
              Get Started Today
            </a>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
