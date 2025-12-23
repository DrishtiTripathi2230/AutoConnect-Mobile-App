import { MapPin, Navigation, Search } from 'lucide-react';
import { useState } from 'react';

interface PassengerHomeProps {
  onFindRides: () => void;
}

export function PassengerHome({ onFindRides }: PassengerHomeProps) {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div 
        className="p-6 pb-8"
        style={{ backgroundColor: '#FFC107' }}
      >
        <h1 
          className="mb-1 text-white"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: '28px', fontWeight: 700 }}
        >
          Hello! 👋
        </h1>
        <p 
          className="text-white opacity-90"
          style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}
        >
          Where would you like to go?
        </p>
      </div>

      {/* Search Card */}
      <div 
        className="mx-4 -mt-4 bg-white shadow-lg"
        style={{ borderRadius: '12px', padding: '20px' }}
      >
        {/* Pickup Location */}
        <div className="mb-4">
          <label 
            className="block mb-2 text-gray-700"
            style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '14px' }}
          >
            Pickup Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#FFC107]" />
            <input
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup location"
              className="w-full pl-12 pr-4 border-2 border-gray-200 focus:border-[#FFC107] outline-none transition-all"
              style={{
                fontFamily: 'Roboto, sans-serif',
                height: '52px',
                borderRadius: '8px',
                fontSize: '16px'
              }}
            />
          </div>
          <button 
            className="mt-2 flex items-center gap-2 text-[#FFC107]"
            style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}
          >
            <Navigation className="w-4 h-4" />
            Use my current location
          </button>
        </div>

        {/* Destination */}
        <div className="mb-6">
          <label 
            className="block mb-2 text-gray-700"
            style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '14px' }}
          >
            Destination
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Where are you going?"
              className="w-full pl-12 pr-4 border-2 border-gray-200 focus:border-[#FFC107] outline-none transition-all"
              style={{
                fontFamily: 'Roboto, sans-serif',
                height: '52px',
                borderRadius: '8px',
                fontSize: '16px'
              }}
            />
          </div>
        </div>

        {/* Find Rides Button */}
        <button
          onClick={onFindRides}
          disabled={!pickup || !destination}
          className="w-full flex items-center justify-center gap-2 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 500,
            backgroundColor: '#FFC107',
            height: '56px',
            borderRadius: '8px',
            fontSize: '18px'
          }}
        >
          <Search className="w-5 h-5" />
          Find Rides
        </button>
      </div>

      {/* Recent Trips Section */}
      <div className="p-6 mt-6">
        <h3 
          className="mb-4 text-gray-800"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 600 }}
        >
          Recent Destinations
        </h3>
        
        {/* Recent trip cards */}
        {['MG Road, Bangalore', 'Indiranagar Metro Station', 'Koramangala 5th Block'].map((location, index) => (
          <button
            key={index}
            onClick={() => setDestination(location)}
            className="w-full mb-3 p-4 flex items-center gap-3 bg-white transition-all hover:shadow-md"
            style={{ borderRadius: '8px' }}
          >
            <div 
              className="rounded-full flex items-center justify-center flex-shrink-0"
              style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: '#FFF9E6'
              }}
            >
              <MapPin className="w-5 h-5 text-[#FFC107]" />
            </div>
            <div className="flex-1 text-left">
              <p 
                className="text-gray-800"
                style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
              >
                {location}
              </p>
              <p 
                className="text-gray-500"
                style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}
              >
                {index + 2} days ago
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
