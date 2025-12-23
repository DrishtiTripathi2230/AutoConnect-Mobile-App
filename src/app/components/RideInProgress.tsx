import { MapPin, Clock, CircleAlert, Share2, Navigation } from 'lucide-react';
import { useEffect, useState } from 'react';

interface RideInProgressProps {
  onCompleteRide: () => void;
}

export function RideInProgress({ onCompleteRide }: RideInProgressProps) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    // Auto complete after 10 seconds for demo
    const timeout = setTimeout(() => {
      onCompleteRide();
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onCompleteRide]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Map Area with Live Tracking */}
      <div 
        className="relative flex items-center justify-center"
        style={{ 
          height: '55vh',
          background: 'linear-gradient(135deg, #FFF9E6 0%, #FFE082 100%)'
        }}
      >
        <div className="text-center">
          <Navigation className="w-20 h-20 text-[#FFC107] mx-auto mb-3 animate-pulse" strokeWidth={1.5} />
          <p 
            className="text-gray-700"
            style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}
          >
            Following your route in real-time
          </p>
        </div>

        {/* Trip Status Overlay */}
        <div 
          className="absolute top-6 left-4 right-4 bg-white shadow-lg"
          style={{ borderRadius: '12px', padding: '16px' }}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div 
                  className="rounded-full animate-pulse"
                  style={{ 
                    width: '10px', 
                    height: '10px', 
                    backgroundColor: '#4CAF50'
                  }}
                />
                <span 
                  className="text-green-700"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Ride in Progress
                </span>
              </div>
              <p 
                className="text-gray-600"
                style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px' }}
              >
                3.5 km • 12 mins remaining
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-5 h-5 text-gray-600" />
                <span 
                  className="text-gray-800"
                  style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', fontWeight: 700 }}
                >
                  {formatTime(timer)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Card */}
      <div 
        className="bg-white shadow-lg mx-4 -mt-6 relative z-10 flex-1 flex flex-col"
        style={{ borderRadius: '16px', padding: '20px' }}
      >
        {/* Driver Quick Info */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1759851683916-b1aee28f28a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhdXRvJTIwcmlja3NoYXclMjBkcml2ZXJ8ZW58MXx8fHwxNzY2NDk5Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Driver"
            className="object-cover"
            style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '8px'
            }}
          />
          <div className="flex-1">
            <h4 
              className="text-gray-800"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Rajesh Kumar
            </h4>
            <p 
              className="text-gray-600"
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}
            >
              KA 01 AB 1234
            </p>
          </div>
          <span 
            className="text-gray-800"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '18px' }}
          >
            ₹67
          </span>
        </div>

        {/* Route Info */}
        <div className="mb-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="flex flex-col items-center gap-1 pt-1">
              <div 
                className="rounded-full"
                style={{ 
                  width: '10px', 
                  height: '10px', 
                  backgroundColor: '#4CAF50'
                }}
              />
              <div 
                style={{ 
                  width: '2px', 
                  height: '32px', 
                  backgroundColor: '#E0E0E0'
                }}
              />
              <MapPin className="w-4 h-4 text-red-500" />
            </div>
            <div className="flex-1">
              <p 
                className="text-gray-500 mb-1"
                style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px' }}
              >
                From
              </p>
              <p 
                className="text-gray-800 mb-4"
                style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
              >
                MG Road Metro Station
              </p>
              <p 
                className="text-gray-500 mb-1"
                style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px' }}
              >
                To
              </p>
              <p 
                className="text-gray-800"
                style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
              >
                Koramangala 5th Block
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          {/* SOS Button */}
          <button 
            className="flex items-center justify-center gap-2 text-white transition-all"
            style={{ 
              backgroundColor: '#F44336',
              height: '56px',
              borderRadius: '8px',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 500,
              fontSize: '16px'
            }}
          >
            <CircleAlert className="w-5 h-5" />
            SOS
          </button>

          {/* Share Location Button */}
          <button 
            className="flex items-center justify-center gap-2 text-gray-800 border-2 border-gray-300 transition-all hover:bg-gray-50"
            style={{ 
              height: '56px',
              borderRadius: '8px',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 500,
              fontSize: '16px'
            }}
          >
            <Share2 className="w-5 h-5" />
            Share Location
          </button>
        </div>

        {/* Safety Info */}
        <div 
          className="mt-4 p-3 flex items-center gap-3"
          style={{ 
            backgroundColor: '#E8F5E9', 
            borderRadius: '8px'
          }}
        >
          <div 
            className="rounded-full flex items-center justify-center flex-shrink-0"
            style={{ 
              width: '32px', 
              height: '32px', 
              backgroundColor: '#4CAF50'
            }}
          >
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <p 
            className="text-gray-700 flex-1"
            style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px', lineHeight: '1.5' }}
          >
            Your ride is being tracked and shared with your guardian
          </p>
        </div>
      </div>
    </div>
  );
}