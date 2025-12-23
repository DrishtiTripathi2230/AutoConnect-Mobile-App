import { TramFront, Bike, CircleCheck, IndianRupee } from 'lucide-react';

interface VehicleSelectionProps {
  onRequestRide: () => void;
}

export function VehicleSelection({ onRequestRide }: VehicleSelectionProps) {
  const vehicles = [
    {
      type: 'Auto Rickshaw',
      icon: TramFront,
      baseFare: 25,
      perKm: 12,
      capacity: '3 passengers',
      eta: '5 mins',
      color: '#FFC107'
    },
    {
      type: 'E-Rickshaw',
      icon: TramFront,
      baseFare: 20,
      perKm: 10,
      capacity: '3 passengers',
      eta: '7 mins',
      color: '#4CAF50'
    },
    {
      type: 'Cycle Rickshaw',
      icon: Bike,
      baseFare: 15,
      perKm: 8,
      capacity: '2 passengers',
      eta: '10 mins',
      color: '#FF9800'
    },
    {
      type: 'Single-Engine Bike',
      icon: Bike,
      baseFare: 20,
      perKm: 8,
      capacity: '1 passenger',
      eta: '3 mins',
      color: '#2196F3'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div 
        className="p-6"
        style={{ backgroundColor: '#FFC107' }}
      >
        <h1 
          className="mb-1 text-white"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', fontWeight: 700 }}
        >
          Choose Your Ride
        </h1>
        <p 
          className="text-white opacity-90"
          style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}
        >
          From: Current Location → Koramangala (3.5 km)
        </p>
      </div>

      {/* Vehicle Cards */}
      <div className="p-4 flex-1">
        {vehicles.map((vehicle, index) => {
          const VehicleIcon = vehicle.icon;
          const suggestedFare = vehicle.baseFare + (vehicle.perKm * 3.5);
          
          return (
            <div
              key={index}
              className="mb-3 bg-white shadow-sm transition-all hover:shadow-md cursor-pointer border-2 border-transparent hover:border-[#FFC107]"
              style={{ borderRadius: '12px', padding: '16px' }}
              onClick={onRequestRide}
            >
              <div className="flex items-center gap-4">
                {/* Vehicle Icon */}
                <div 
                  className="rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ 
                    width: '56px', 
                    height: '56px', 
                    backgroundColor: `${vehicle.color}20`
                  }}
                >
                  <VehicleIcon className="w-7 h-7" style={{ color: vehicle.color }} strokeWidth={2} />
                </div>

                {/* Vehicle Info */}
                <div className="flex-1">
                  <h3 
                    className="text-gray-800 mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 600 }}
                  >
                    {vehicle.type}
                  </h3>
                  <div className="flex items-center gap-3 mb-2">
                    <span 
                      className="text-gray-600"
                      style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px' }}
                    >
                      {vehicle.capacity}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span 
                      className="text-gray-600"
                      style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px' }}
                    >
                      {vehicle.eta} away
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span 
                      className="text-gray-500"
                      style={{ fontFamily: 'Roboto, sans-serif', fontSize: '12px' }}
                    >
                      ₹{vehicle.baseFare} base + ₹{vehicle.perKm}/km
                    </span>
                  </div>
                </div>

                {/* Fare */}
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    <IndianRupee className="w-5 h-5 text-gray-800" />
                    <span 
                      className="text-gray-800"
                      style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', fontWeight: 700 }}
                    >
                      {Math.round(suggestedFare)}
                    </span>
                  </div>
                  <span 
                    className="text-gray-500"
                    style={{ fontFamily: 'Roboto, sans-serif', fontSize: '12px' }}
                  >
                    Suggested fare
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fare Info Box */}
      <div 
        className="mx-4 mb-4 p-4 flex items-start gap-3"
        style={{ 
          backgroundColor: '#E3F2FD', 
          borderRadius: '8px'
        }}
      >
        <CircleCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 
            className="text-gray-800 mb-1"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '14px' }}
          >
            Fair & Transparent Pricing
          </h4>
          <p 
            className="text-gray-600"
            style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px', lineHeight: '1.5' }}
          >
            Suggested fare is calculated based on distance and local rates. Final fare may vary based on route and driver acceptance.
          </p>
        </div>
      </div>
    </div>
  );
}