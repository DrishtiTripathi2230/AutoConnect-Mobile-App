import { User, Car } from 'lucide-react';

interface RoleSelectionScreenProps {
  onSelectPassenger: () => void;
  onSelectDriver: () => void;
}

export function RoleSelectionScreen({ onSelectPassenger, onSelectDriver }: RoleSelectionScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <h1 
        className="mb-3 text-center text-gray-800"
        style={{ fontFamily: 'Poppins, sans-serif', fontSize: '32px', fontWeight: 700 }}
      >
        Welcome to AutoConnect
      </h1>

      <p 
        className="text-center text-gray-600 mb-12 px-4"
        style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px' }}
      >
        How would you like to use AutoConnect?
      </p>

      {/* Passenger Option */}
      <button
        onClick={onSelectPassenger}
        className="w-full mb-6 flex flex-col items-center justify-center transition-all border-2 hover:shadow-lg"
        style={{
          backgroundColor: '#FFF9E6',
          borderColor: '#FFC107',
          borderRadius: '12px',
          padding: '32px',
          minHeight: '160px'
        }}
      >
        <div 
          className="mb-4 rounded-full flex items-center justify-center"
          style={{ 
            width: '80px', 
            height: '80px', 
            backgroundColor: '#FFC107'
          }}
        >
          <User className="w-10 h-10 text-white" strokeWidth={2.5} />
        </div>
        <h3 
          className="text-gray-800 mb-2"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', fontWeight: 600 }}
        >
          I'm a Passenger
        </h3>
        <p 
          className="text-gray-600 text-center"
          style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}
        >
          Book rides with local drivers
        </p>
      </button>

      {/* Driver Option */}
      <button
        onClick={onSelectDriver}
        className="w-full flex flex-col items-center justify-center transition-all border-2 hover:shadow-lg"
        style={{
          backgroundColor: '#F1F8F4',
          borderColor: '#4CAF50',
          borderRadius: '12px',
          padding: '32px',
          minHeight: '160px'
        }}
      >
        <div 
          className="mb-4 rounded-full flex items-center justify-center"
          style={{ 
            width: '80px', 
            height: '80px', 
            backgroundColor: '#4CAF50'
          }}
        >
          <Car className="w-10 h-10 text-white" strokeWidth={2.5} />
        </div>
        <h3 
          className="text-gray-800 mb-2"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', fontWeight: 600 }}
        >
          I'm a Driver
        </h3>
        <p 
          className="text-gray-600 text-center"
          style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}
        >
          Start earning with your vehicle
        </p>
      </button>
    </div>
  );
}
