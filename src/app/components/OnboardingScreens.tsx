import { ChevronRight, TramFront, IndianRupee, Shield } from 'lucide-react';
import { useState } from 'react';

interface OnboardingScreensProps {
  onComplete: () => void;
}

export function OnboardingScreens({ onComplete }: OnboardingScreensProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: TramFront,
      title: "All Local Vehicles, One App",
      description: "Book auto rickshaws, e-rickshaws, cycle rickshaws, and single-engine bikes instantly"
    },
    {
      icon: IndianRupee,
      title: "Fair & Transparent Pricing",
      description: "See the fare upfront. No hidden charges. Pay what you see"
    },
    {
      icon: Shield,
      title: "Safe for Everyone",
      description: "Verified drivers, live tracking, and emergency SOS for your safety"
    }
  ];

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      {/* Skip button */}
      <div className="flex justify-end mb-8">
        <button 
          onClick={onComplete}
          className="text-gray-500"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Icon */}
        <div 
          className="mb-12 rounded-full flex items-center justify-center"
          style={{ 
            width: '180px', 
            height: '180px', 
            backgroundColor: '#FFF9E6',
            border: '4px solid #FFC107'
          }}
        >
          <CurrentIcon className="w-24 h-24 text-[#FFC107]" strokeWidth={2} />
        </div>

        {/* Title */}
        <h2 
          className="mb-4 text-center text-gray-800 px-4"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: '28px', fontWeight: 700 }}
        >
          {slides[currentSlide].title}
        </h2>

        {/* Description */}
        <p 
          className="text-center text-gray-600 px-8 mb-12"
          style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px', lineHeight: '1.6' }}
        >
          {slides[currentSlide].description}
        </p>

        {/* Indicators */}
        <div className="flex gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className="h-2 rounded-full transition-all"
              style={{
                width: currentSlide === index ? '32px' : '8px',
                backgroundColor: currentSlide === index ? '#FFC107' : '#E0E0E0'
              }}
            />
          ))}
        </div>
      </div>

      {/* Next/Get Started button */}
      <button
        onClick={() => {
          if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
          } else {
            onComplete();
          }
        }}
        className="w-full flex items-center justify-center gap-2 text-white transition-all"
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 500,
          backgroundColor: '#FFC107',
          height: '56px',
          borderRadius: '8px',
          fontSize: '18px'
        }}
      >
        {currentSlide < slides.length - 1 ? 'Next' : 'Get Started'}
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
