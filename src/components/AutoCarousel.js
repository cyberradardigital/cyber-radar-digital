'use client';
import { useState, useEffect, useCallback } from 'react';

export default function AutoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 1,
      icon: '📈',
      title: 'Digital Growth',
      description: 'Accelerate your business with AI-powered solutions',
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      id: 2,
      icon: '🔒',
      title: 'Advanced Security',
      description: 'Protect your digital assets with enterprise-grade security',
      gradient: 'from-emerald-600 to-teal-600'
    },
    {
      id: 3,
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scale your infrastructure with modern cloud technologies',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 4,
      icon: '🚀',
      title: 'Innovation Hub',
      description: 'Transform your business with cutting-edge innovations',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      id: 5,
      icon: '💼',
      title: 'Business Intelligence',
      description: 'Make data-driven decisions with powerful analytics',
      gradient: 'from-indigo-600 to-purple-600'
    }
  ];

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, slides.length]);

  const goToSlide = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Auto-scroll every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="w-full bg-gradient-to-b from-[#0a1628] to-[#0d1a2d] py-8 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Carousel Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Slides */}
          <div className="relative h-64 md:h-80 lg:h-96">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : index < currentSlide
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-90`}></div>
                
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }}></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center justify-between px-8 md:px-16 lg:px-20">
                  {/* Left Side - Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-xl">
                      <span className="text-5xl md:text-7xl lg:text-8xl">{slide.icon}</span>
                    </div>
                  </div>

                  {/* Right Side - Text */}
                  <div className="flex-1 ml-8 md:ml-12 lg:ml-16 text-white">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 drop-shadow-lg">
                      {slide.title}
                    </h2>
                    <p className="text-sm md:text-lg lg:text-xl text-white/90 max-w-xl drop-shadow-md">
                      {slide.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="hidden lg:block absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-8 md:w-10 h-2 md:h-2.5 bg-white'
                    : 'w-2 md:w-2.5 h-2 md:h-2.5 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all z-10 group"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => goToSlide((currentSlide + 1) % slides.length)}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all z-10 group"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 md:mt-6 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-2000 ease-linear"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
