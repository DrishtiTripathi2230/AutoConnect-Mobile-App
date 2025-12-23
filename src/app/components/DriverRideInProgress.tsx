import { MapPin, Phone, Navigation, CircleCheck } from 'lucide-react';

interface DriverRideInProgressProps {
  onCompleteRide: () => void;
}

export function DriverRideInProgress({ onCompleteRide }: DriverRideInProgressProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Map Area */}
      <div 
        className="relative flex items-center justify-center"
        style={{ 
          height: '50vh',
          background: 'linear-gradient(135deg, #E8F5E9 0%, #A5D6A7 100%)'
        }}
      >
        <div className="text-center">
          <Navigation className="w-20 h-20 text-green-600 mx-auto mb-3 animate-pulse" strokeWidth={1.5} />
          <p 
            className="text-gray-700"
            style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}
          >
            Navigation to destination
          </p>
        </div>

        {/* Trip Status */}
        <div 
          className="absolute top-6 left-4 right-4 bg-white shadow-lg"
          style={{ borderRadius: '12px', padding: '16px' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
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
                Trip in Progress
              </span>
            </div>
            <span 
              className="text-gray-600"
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}
            >
              3.5 km • 12 mins
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Card */}
      <div 
        className="bg-white shadow-lg mx-4 -mt-6 relative z-10 flex-1 flex flex-col"
        style={{ borderRadius: '16px', padding: '20px' }}
      >
        {/* Passenger Info */}
        <div className="mb-4 pb-4 border-b border-gray-200">
          <h3 
            className="mb-3 text-gray-800"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 600 }}
          >
            Passenger Details
          </h3>
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1653293038418-68473745a74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMGNvbW11dGVyfGVufDF8fHx8MTc2NjQ5OTY5MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Passenger"
              className="object-cover"
              style={{ 
                width: '56px', 
                height: '56px', 
                borderRadius: '12px'
              }}
            />
            <div className="flex-1">
              <h4 
                className="text-gray-800 mb-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                Priya Sharma
              </h4>
              <p 
                className="text-gray-600"
                style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}
              >
                Regular passenger
              </p>
            </div>
            <button 
              className="rounded-full flex items-center justify-center transition-all hover:bg-green-100"
              style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: '#E8F5E9'
              }}
            >
              <Phone className="w-5 h-5 text-green-600" />
            </button>
          </div>
        </div>

        {/* Trip Details */}
        <div className="mb-6">
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
                  height: '40px', 
                  backgroundColor: '#E0E0E0'
                }}
              />
              <MapPin className="w-5 h-5 text-red-500" />
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <p 
                  className="text-gray-500 mb-1"
                  style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px' }}
                >
                  Pickup Location
                </p>
                <p 
                  className="text-gray-800"
                  style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
                >
                  MG Road Metro Station
                </p>
              </div>
              <div>
                <p 
                  className="text-gray-500 mb-1"
                  style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px' }}
                >
                  Drop-off Location
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
        </div>

        {/* Fare */}
        <div 
          className="mb-6 p-4 flex items-center justify-between"
          style={{ 
            backgroundColor: '#F1F8F4', 
            borderRadius: '8px'
          }}
        >
          <span 
            className="text-gray-700"
            style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
          >
            Trip Fare
          </span>
          <span 
            className="text-gray-800"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '28px', fontWeight: 700 }}
          >
            ₹67
          </span>
        </div>

        {/* Instructions */}
        <div 
          className="mb-6 p-4"
          style={{ 
            backgroundColor: '#FFF3E0', 
            borderRadius: '8px'
          }}
        >
          <p 
            className="text-gray-700"
            style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px', lineHeight: '1.6' }}
          >
            <strong>Passenger Note:</strong> Please take the NH 44 route. Avoid the market area.
          </p>
        </div>

        {/* Complete Ride Button */}
        <button
          onClick={onCompleteRide}
          className="w-full flex items-center justify-center gap-2 text-white transition-all mt-auto"
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 500,
            backgroundColor: '#4CAF50',
            height: '56px',
            borderRadius: '8px',
            fontSize: '18px'
          }}
        >
          <CircleCheck className="w-5 h-5" />
          Complete Ride
        </button>
      </div>
    </div>
  );
}