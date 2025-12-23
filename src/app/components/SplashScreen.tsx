import { Bike, TramFront } from 'lucide-react';

interface SplashScreenProps {
  onContinue: () => void;
}

export function SplashScreen({ onContinue }: SplashScreenProps) {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{ background: 'linear-gradient(135deg, #FFD54F 0%, #FFC107 100%)' }}
    >
      {/* Logo */}
      <div className="mb-8 relative">
        <div className="flex items-center justify-center gap-2">
          <TramFront className="w-16 h-16 text-gray-800" strokeWidth={2} />
          <Bike className="w-12 h-12 text-gray-800" strokeWidth={2} />
        </div>
      </div>

      {/* App Name */}
      <h1 
        className="mb-4 text-gray-800"
        style={{ fontFamily: 'Poppins, sans-serif', fontSize: '42px', fontWeight: 700 }}
      >
        AutoConnect
      </h1>

      {/* Tagline */}
      <p 
        className="text-gray-700 text-center mb-12"
        style={{ fontFamily: 'Roboto, sans-serif', fontSize: '20px' }}
      >
        Your Local Ride, Anytime
      </p>

      {/* Loading indicator */}
      <div className="flex gap-2 mt-auto mb-8">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>

      {/* Auto continue after 2 seconds */}
      <div className="opacity-0">
        {setTimeout(() => onContinue(), 2000)}
      </div>
    </div>
  );
}
