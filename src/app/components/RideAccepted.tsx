import { Phone, MessageCircle, Share2, Star, Shield, MapPin, Clock } from 'lucide-react';

interface RideAcceptedProps {
  onStartRide: () => void;
}

export function RideAccepted({ onStartRide }: RideAcceptedProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Map Area */}
      <div 
        className="relative flex items-center justify-center"
        style={{ 
          height: '40vh',
          background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)'
        }}
      >
        <div className="text-center">
          <MapPin className="w-16 h-16 text-green-600 mx-auto mb-3" strokeWidth={1.5} />
          <p 
            className="text-gray-700"
            style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}
          >
            Live map tracking
          </p>
        </div>
      </div>

      {/* Driver Info Card */}
      <div 
        className="bg-white shadow-lg mx-4 -mt-8 relative z-10"
        style={{ borderRadius: '16px', padding: '20px' }}
      >
        {/* Status Banner */}
        <div 
          className="mb-4 p-3 flex items-center justify-between"
          style={{ 
            backgroundColor: '#E8F5E9', 
            borderRadius: '8px'
          }}
        >
          <div className="flex items-center gap-2">
            <div 
              className="rounded-full"
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
              Driver Accepted
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-green-700" />
            <span 
              className="text-green-700"
              style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
            >
              Arriving in 5 mins
            </span>
          </div>
        </div>

        {/* Driver Details */}
        <div className="flex items-center gap-4 mb-4">
          {/* Driver Photo */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1759851683916-b1aee28f28a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhdXRvJTIwcmlja3NoYXclMjBkcml2ZXJ8ZW58MXx8fHwxNzY2NDk5Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Driver"
              className="object-cover"
              style={{ 
                width: '72px', 
                height: '72px', 
                borderRadius: '12px'
              }}
            />
            <div 
              className="absolute -bottom-1 -right-1 rounded-full flex items-center justify-center bg-white"
              style={{ 
                width: '28px', 
                height: '28px',
                border: '2px solid white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              <Shield className="w-4 h-4 text-green-600" />
            </div>
          </div>

          {/* Driver Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 
                className="text-gray-800"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 600 }}
              >
                Rajesh Kumar
              </h3>
              <div 
                className="px-2 py-1 flex items-center gap-1"
                style={{ 
                  backgroundColor: '#FFF9E6', 
                  borderRadius: '6px'
                }}
              >
                <Shield className="w-3 h-3 text-[#FFC107]" />
                <span 
                  className="text-[#FFC107]"
                  style={{ fontFamily: 'Roboto, sans-serif', fontSize: '11px', fontWeight: 600 }}
                >
                  VERIFIED
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span 
                  className="text-gray-700"
                  style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
                >
                  4.8
                </span>
              </div>
              <span className="text-gray-400">•</span>
              <span 
                className="text-gray-600"
                style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}
              >
                823 rides
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span 
                className="text-gray-700"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '15px' }}
              >
                KA 01 AB 1234
              </span>
              <span className="text-gray-400">•</span>
              <span 
                className="text-gray-600"
                style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}
              >
                Auto Rickshaw
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <button 
            className="flex flex-col items-center justify-center gap-2 border-2 border-gray-200 transition-all hover:border-green-500 hover:bg-green-50"
            style={{ 
              height: '72px',
              borderRadius: '8px'
            }}
          >
            <Phone className="w-6 h-6 text-green-600" />
            <span 
              className="text-gray-700"
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px', fontWeight: 500 }}
            >
              Call
            </span>
          </button>

          <button 
            className="flex flex-col items-center justify-center gap-2 border-2 border-gray-200 transition-all hover:border-blue-500 hover:bg-blue-50"
            style={{ 
              height: '72px',
              borderRadius: '8px'
            }}
          >
            <MessageCircle className="w-6 h-6 text-blue-600" />
            <span 
              className="text-gray-700"
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px', fontWeight: 500 }}
            >
              Message
            </span>
          </button>

          <button 
            className="flex flex-col items-center justify-center gap-2 border-2 border-gray-200 transition-all hover:border-purple-500 hover:bg-purple-50"
            style={{ 
              height: '72px',
              borderRadius: '8px'
            }}
          >
            <Share2 className="w-6 h-6 text-purple-600" />
            <span 
              className="text-gray-700"
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px', fontWeight: 500 }}
            >
              Share
            </span>
          </button>
        </div>

        {/* Trip Details */}
        <div 
          className="p-4"
          style={{ 
            backgroundColor: '#F5F5F5', 
            borderRadius: '8px'
          }}
        >
          <div className="flex items-start gap-3 mb-3">
            <MapPin className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p 
                className="text-gray-500 mb-1"
                style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px' }}
              >
                Pickup
              </p>
              <p 
                className="text-gray-800"
                style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
              >
                Current Location
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p 
                className="text-gray-500 mb-1"
                style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px' }}
              >
                Drop-off
              </p>
              <p 
                className="text-gray-800"
                style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
              >
                Koramangala 5th Block
              </p>
            </div>
            <div className="text-right">
              <p 
                className="text-gray-800"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '18px' }}
              >
                ₹67
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Banner */}
      <div 
        className="mx-4 mt-4 mb-4 p-4 flex items-center gap-3"
        style={{ 
          backgroundColor: '#E3F2FD', 
          borderRadius: '8px'
        }}
      >
        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
        <p 
          className="text-gray-700 flex-1"
          style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px', lineHeight: '1.5' }}
        >
          Your ride is being tracked. Share this trip with your guardian for added safety.
        </p>
      </div>

      {/* Start Trip Button (for demo - normally driver does this) */}
      <div className="px-4 pb-6 mt-auto">
        <button
          onClick={onStartRide}
          className="w-full text-white transition-all"
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 500,
            backgroundColor: '#4CAF50',
            height: '56px',
            borderRadius: '8px',
            fontSize: '18px'
          }}
        >
          Simulate: Start Trip
        </button>
      </div>
    </div>
  );
}
