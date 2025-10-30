'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedHeading, AnimatedParagraph, AnimatedSection, SplitTextReveal } from '@/components/AnimatedText';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export default function Blog() {
  const blogsRef = useGsapStagger(6, { stagger: 0.15 });

  const blogPosts = [
    {
      id: 1,
      title: "The Rising Importance of Penetration Testing in 2025",
      category: "Security Testing",
      date: "January 15, 2025",
      excerpt: "Discover why penetration testing has become more critical than ever in protecting your organization from sophisticated cyber threats and data breaches.",
      image: "/blog-pentest.webp",
      readTime: "5 min read",
      tags: ["Penetration Testing", "Cybersecurity", "Best Practices"]
    },
    {
      id: 2,
      title: "Understanding Digital Forensics: A Complete Guide",
      category: "Digital Forensics",
      date: "January 10, 2025",
      excerpt: "Learn how digital forensics helps organizations investigate cyber incidents, preserve evidence, and strengthen their security posture.",
      image: "/blog-forensics.webp",
      readTime: "7 min read",
      tags: ["Digital Forensics", "Incident Response", "Investigation"]
    },
    {
      id: 3,
      title: "Data Loss Prevention: Protecting Your Most Valuable Asset",
      category: "Data Protection",
      date: "January 5, 2025",
      excerpt: "Explore comprehensive DLP strategies to safeguard sensitive information and prevent unauthorized data exfiltration in your organization.",
      image: "/blog-dlp.webp",
      readTime: "6 min read",
      tags: ["DLP", "Data Security", "Compliance"]
    },
    {
      id: 4,
      title: "PCI DSS Compliance: What You Need to Know in 2025",
      category: "Compliance",
      date: "December 28, 2024",
      excerpt: "Stay up-to-date with the latest PCI DSS requirements and ensure your payment processing systems meet industry security standards.",
      image: "/blog-pci.webp",
      readTime: "8 min read",
      tags: ["PCI DSS", "Compliance", "Payment Security"]
    },
    {
      id: 5,
      title: "Application Security Testing: Beyond the Basics",
      category: "Application Security",
      date: "December 20, 2024",
      excerpt: "Dive deep into advanced application security testing techniques that go beyond traditional vulnerability scanning.",
      image: "/blog-appsec.webp",
      readTime: "6 min read",
      tags: ["AppSec", "SAST", "DAST"]
    },
    {
      id: 6,
      title: "Building a Robust Security Risk Assessment Framework",
      category: "Risk Management",
      date: "December 15, 2024",
      excerpt: "Learn how to develop and implement an effective security risk assessment framework to identify and mitigate threats proactively.",
      image: "/blog-risk.webp",
      readTime: "9 min read",
      tags: ["Risk Assessment", "Security Framework", "Threat Modeling"]
    }
  ];

  const categories = ["All", "Security Testing", "Digital Forensics", "Data Protection", "Compliance", "Application Security", "Risk Management"];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar currentPage="blog" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0d2340] to-[#0a1628] py-8 sm:py-12 md:py-16 lg:py-20 pt-24 md:pt-28 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <SplitTextReveal className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
            Cyber Security Blog
          </SplitTextReveal>
          <AnimatedParagraph animationType="fadeUp" delay={0.3} className="text-gray-400 text-xs sm:text-sm md:text-base max-w-3xl mx-auto">
            Stay informed with the latest insights, trends, and best practices in cybersecurity from industry experts at Cyber Radar Systems
          </AnimatedParagraph>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Featured Post */}
        <AnimatedSection animationType="fadeUp" delay={0.2} className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-[#0d2340] to-[#0f1f33] rounded-lg overflow-hidden border border-emerald-400 shadow-2xl hover-glow hover-lift">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-transparent"></div>
                <div className="h-full flex items-center justify-center text-emerald-400">
                  <svg className="w-32 h-32 md:w-48 md:h-48" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="p-6 sm:p-8 md:p-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-emerald-400 text-gray-900 text-xs font-semibold rounded-full">FEATURED</span>
                  <span className="text-gray-400 text-xs">{blogPosts[0].date}</span>
                </div>
                <AnimatedHeading animationType="fadeLeft" delay={0.4} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                  {blogPosts[0].title}
                </AnimatedHeading>
                <AnimatedParagraph animationType="fadeLeft" delay={0.5} className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </AnimatedParagraph>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-emerald-400 text-sm font-semibold">{blogPosts[0].category}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">{blogPosts[0].readTime}</span>
                </div>
                <button className="mt-6 bg-emerald-400 text-gray-900 px-6 py-2.5 rounded-lg hover:bg-emerald-300 transition-colors font-semibold text-sm shadow-lg">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  index === 0
                    ? 'bg-emerald-400 text-gray-900 shadow-lg'
                    : 'bg-[#0f1f33] text-gray-300 border border-gray-700 hover:border-emerald-400 hover:text-emerald-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Blog Grid */}
        <div className="mb-12 sm:mb-16">
          <AnimatedHeading animationType="fadeUp" delay={0.2} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-white">
            Latest Articles
          </AnimatedHeading>
          
          <div ref={blogsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {blogPosts.slice(1).map((post) => (
              <div
                key={post.id}
                className="bg-gradient-to-br from-[#0f1f33] to-[#0d1a2d] border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all hover-lift"
              >
                {/* Image Placeholder */}
                <div className="relative h-48 sm:h-52 md:h-56 bg-gradient-to-br from-emerald-400/10 to-transparent flex items-center justify-center">
                  <svg className="w-16 h-16 text-emerald-400/30" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-emerald-400 text-xs font-semibold">{post.category}</span>
                    <span className="text-gray-500 text-xs">{post.date}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white line-clamp-2 hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                    <button className="text-emerald-400 text-sm font-semibold hover:text-emerald-300 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <AnimatedSection animationType="fadeUp" delay={0.3} className="bg-gradient-to-r from-[#0d2340] via-[#0f1f33] to-[#0d2340] border-2 border-emerald-400 rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 text-center shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-emerald-400 flex items-center justify-center">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            
            <AnimatedHeading animationType="fadeUp" delay={0.4} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
              Subscribe to Our Newsletter
            </AnimatedHeading>
            
            <AnimatedParagraph animationType="fadeUp" delay={0.5} className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8">
              Get the latest cybersecurity insights, tips, and updates delivered directly to your inbox
            </AnimatedParagraph>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-5 py-3 rounded-lg bg-[#0a1628] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition-colors text-sm sm:text-base"
              />
              <button className="bg-emerald-400 text-gray-900 px-6 sm:px-8 py-3 rounded-lg hover:bg-emerald-300 transition-colors font-semibold text-sm sm:text-base shadow-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <p className="text-gray-500 text-xs mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </AnimatedSection>

      </section>

      <Footer />
    </div>
  );
}
