import { TramFront, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FindingDriverProps {
  onDriverFound: () => void;
  onCancel: () => void;
}

export function FindingDriver({ onDriverFound, onCancel }: FindingDriverProps) {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    // Simulate finding driver after 3 seconds
    const findTimeout = setTimeout(() => {
      onDriverFound();
    }, 3000);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(findTimeout);
    };
  }, [onDriverFound]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      {/* Animated Vehicle Icon */}
      <div className="relative mb-12">
        <div 
          className="rounded-full flex items-center justify-center animate-pulse"
          style={{ 
            width: '160px', 
            height: '160px', 
            backgroundColor: '#FFF9E6',
            border: '4px solid #FFC107'
          }}
        >
          <TramFront className="w-20 h-20 text-[#FFC107]" strokeWidth={2} />
        </div>
        
        {/* Ripple effect */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full animate-ping"
          style={{ 
            width: '180px', 
            height: '180px', 
            backgroundColor: '#FFC107',
            opacity: 0.2
          }}
        />
      </div>

      {/* Text */}
      <h2 
        className="mb-2 text-center text-gray-800"
        style={{ fontFamily: 'Poppins, sans-serif', fontSize: '28px', fontWeight: 700 }}
      >
        Finding nearby drivers{dots}
      </h2>

      <p 
        className="text-center text-gray-600 mb-8 px-6"
        style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px', lineHeight: '1.6' }}
      >
        We're searching for available drivers near you. This usually takes just a few seconds.
      </p>

      {/* Searching Info */}
      <div className="flex flex-col gap-3 mb-12">
        {['Searching within 2 km radius', 'Checking driver availability', 'Matching your ride'].map((text, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 px-4 py-3"
            style={{ 
              backgroundColor: '#F5F5F5', 
              borderRadius: '8px',
              minWidth: '280px'
            }}
          >
            <div 
              className="rounded-full flex items-center justify-center flex-shrink-0"
              style={{ 
                width: '8px', 
                height: '8px', 
                backgroundColor: '#FFC107'
              }}
            />
            <span 
              className="text-gray-700"
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}
            >
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* Cancel Button */}
      <button
        onClick={onCancel}
        className="flex items-center justify-center gap-2 text-gray-600 border-2 border-gray-300 transition-all hover:bg-gray-50"
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 500,
          height: '56px',
          borderRadius: '8px',
          fontSize: '16px',
          paddingLeft: '32px',
          paddingRight: '32px'
        }}
      >
        <X className="w-5 h-5" />
        Cancel Search
      </button>
    </div>
  );
}
