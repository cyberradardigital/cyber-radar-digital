'use client';
import { useGsapAnimation } from '@/hooks/useGsapAnimation';

export const AnimatedHeading = ({ children, className = '', animationType = 'fadeUp', delay = 0 }) => {
  const ref = useGsapAnimation(animationType, { delay });
  
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export const AnimatedParagraph = ({ children, className = '', animationType = 'fadeUp', delay = 0 }) => {
  const ref = useGsapAnimation(animationType, { delay });
  
  return (
    <p ref={ref} className={className}>
      {children}
    </p>
  );
};

export const AnimatedSection = ({ children, className = '', animationType = 'fadeUp', delay = 0 }) => {
  const ref = useGsapAnimation(animationType, { delay });
  
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export const SplitTextReveal = ({ children, className = '' }) => {
  const ref = useGsapAnimation('splitText');
  
  return (
    <h1 ref={ref} className={className}>
      {children}
    </h1>
  );
};

export const CharReveal = ({ children, className = '' }) => {
  const ref = useGsapAnimation('textReveal');
  
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
