'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  
  // Configure smoother defaults
  gsap.defaults({
    ease: 'power2.out',
    duration: 1.2
  });
  
  // Configure ScrollTrigger for smoother performance
  ScrollTrigger.config({
    syncInterval: 5,
    ignoreMobileResize: true
  });
}

export const useGsapAnimation = (animationType = 'fadeUp', options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const defaultOptions = {
      duration: 1.4,
      ease: 'power4.out',
      delay: 0,
      ...options
    };

    let animation;

    switch (animationType) {
      case 'fadeUp':
        gsap.set(element, { opacity: 0, y: 30, willChange: 'transform, opacity' });
        animation = gsap.to(element, {
          opacity: 1,
          y: 0,
          clearProps: 'willChange',
          ...defaultOptions,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        });
        break;

      case 'fadeDown':
        gsap.set(element, { opacity: 0, y: -30, willChange: 'transform, opacity' });
        animation = gsap.to(element, {
          opacity: 1,
          y: 0,
          clearProps: 'willChange',
          ...defaultOptions,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        });
        break;

      case 'fadeLeft':
        gsap.set(element, { opacity: 0, x: -40, willChange: 'transform, opacity' });
        animation = gsap.to(element, {
          opacity: 1,
          x: 0,
          clearProps: 'willChange',
          ...defaultOptions,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        });
        break;

      case 'fadeRight':
        gsap.set(element, { opacity: 0, x: 40, willChange: 'transform, opacity' });
        animation = gsap.to(element, {
          opacity: 1,
          x: 0,
          clearProps: 'willChange',
          ...defaultOptions,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        });
        break;

      case 'scale':
        gsap.set(element, { opacity: 0, scale: 0.92, willChange: 'transform, opacity' });
        animation = gsap.to(element, {
          opacity: 1,
          scale: 1,
          clearProps: 'willChange',
          ...defaultOptions,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        });
        break;

      case 'slideUp':
        gsap.set(element, { opacity: 0, y: 60, willChange: 'transform, opacity' });
        animation = gsap.to(element, {
          opacity: 1,
          y: 0,
          clearProps: 'willChange',
          ...defaultOptions,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        });
        break;

      case 'textReveal':
        const text = element.textContent;
        element.innerHTML = text
          .split('')
          .map((char) => `<span style="display:inline-block; will-change:transform,opacity;">${char === ' ' ? '&nbsp;' : char}</span>`)
          .join('');
        
        animation = gsap.from(element.children, {
          opacity: 0,
          y: 15,
          stagger: 0.02,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        });
        break;

      case 'splitText':
        const words = element.textContent.split(' ');
        element.innerHTML = words
          .map((word) => `<span style="display:inline-block; margin-right:0.25em; will-change:transform,opacity;">${word}</span>`)
          .join('');
        
        animation = gsap.from(element.children, {
          opacity: 0,
          y: 20,
          rotationX: -20,
          transformOrigin: 'center bottom',
          stagger: 0.08,
          duration: 1.2,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        });
        break;

      default:
        gsap.set(element, { opacity: 0, willChange: 'opacity' });
        animation = gsap.to(element, {
          opacity: 1,
          clearProps: 'willChange',
          ...defaultOptions,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        });
    }

    return () => {
      if (animation) animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animationType, options]);

  return elementRef;
};

export const useGsapStagger = (items = [], options = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.children;
    if (!children.length) return;

    const defaultOptions = {
      duration: 1.2,
      ease: 'power3.out',
      stagger: {
        each: 0.12,
        ease: 'power2.inOut'
      },
      ...options
    };

    gsap.set(children, { 
      opacity: 0, 
      y: 25,
      scale: 0.97,
      willChange: 'transform, opacity'
    });
    
    const animation = gsap.to(children, {
      opacity: 1,
      y: 0,
      scale: 1,
      clearProps: 'willChange',
      ...defaultOptions,
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true
      }
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [items, options]);

  return containerRef;
};
