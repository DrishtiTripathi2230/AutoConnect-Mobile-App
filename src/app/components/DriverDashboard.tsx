import { Star, TrendingUp, Clock, MapPin, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';
import { api } from '../api';

interface DriverDashboardProps {
  onViewRideRequest: (rideId: number) => void;
}

export function DriverDashboard({ onViewRideRequest }: DriverDashboardProps) {
  const [isOnline, setIsOnline] = useState(true);
  const [rides, setRides] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [driverName, setDriverName] = useState('Driver');

  const fetchRides = async () => {
    setLoading(true);
    try {
      const requested = await api.getRequestedRides();
      setRides(requested);
    } catch (err) {
      console.error('Could not fetch rides');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOnline) fetchRides();
  }, [isOnline]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="p-6 pb-8" style={{ backgroundColor: '#4CAF50' }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1
              className="mb-1 text-white"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '28px', fontWeight: 700 }}
            >
              Welcome Back! 👋
            </h1>
            <p
              className="text-white opacity-90"
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}
            >
              {driverName}
            </p>
          </div>

          {/* Online Toggle */}
          <button onClick={() => setIsOnline(!isOnline)} className="flex flex-col items-center gap-2">
            <div
              className="relative transition-all"
              style={{
                width: '60px', height: '36px',
                backgroundColor: isOnline ? '#FFFFFF' : 'rgba(255,255,255,0.3)',
                borderRadius: '18px'
              }}
            >
              <div
                className="absolute top-1 transition-all"
                style={{
                  width: '28px', height: '28px',
                  backgroundColor: isOnline ? '#4CAF50' : '#757575',
                  borderRadius: '14px',
                  left: isOnline ? '30px' : '2px'
                }}
              />
            </div>
            <span className="text-white" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: 500 }}>
              {isOnline ? 'Online' : 'Offline'}
            </span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mx-4 -mt-4 grid grid-cols-3 gap-3">
        <div className="bg-white shadow-lg p-4 text-center" style={{ borderRadius: '12px' }}>
          <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
          <p className="text-gray-500 mb-1" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '12px' }}>Today</p>
          <p className="text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 700 }}>₹1,240</p>
        </div>
        <div className="bg-white shadow-lg p-4 text-center" style={{ borderRadius: '12px' }}>
          <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <p className="text-gray-500 mb-1" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '12px' }}>Trips</p>
          <p className="text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 700 }}>{rides.length}</p>
        </div>
        <div className="bg-white shadow-lg p-4 text-center" style={{ borderRadius: '12px' }}>
          <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
          <p className="text-gray-500 mb-1" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '12px' }}>Rating</p>
          <p className="text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 700 }}>4.8</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 flex-1">
        {isOnline ? (
          <>
            <div className="flex items-center justify-between mb-4">
              <h3
                className="text-gray-800"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 600 }}
              >
                Nearby Ride Requests
              </h3>
              <button
                onClick={fetchRides}
                className="flex items-center gap-1 text-green-600"
                style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px' }}
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
            </div>

            {loading && (
              <p className="text-center text-gray-500 py-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Loading rides...
              </p>
            )}

            {!loading && rides.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  No ride requests right now
                </p>
                <button
                  onClick={fetchRides}
                  className="text-white px-6 py-3"
                  style={{ backgroundColor: '#4CAF50', borderRadius: '8px', fontFamily: 'Roboto, sans-serif' }}
                >
                  Check Again
                </button>
              </div>
            )}

            {!loading && rides.map((ride, index) => (
              <div
                key={ride.id}
                className="mb-3 bg-white shadow-sm"
                style={{ borderRadius: '12px', padding: '16px' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-[#4CAF50] flex-shrink-0" />
                      <span className="text-gray-700" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}>
                        {ride.vehicleType}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-gray-500 mb-1" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '12px' }}>Pickup</p>
                        <p className="text-gray-800" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>{ride.pickup}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '12px' }}>Drop-off</p>
                        <p className="text-gray-800" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>{ride.destination}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '12px' }}>Passenger</p>
                        <p className="text-gray-800" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>{ride.passengerName}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <span className="text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', fontWeight: 700 }}>
                      ₹{60 + index * 5}
                    </span>
                    <p className="text-gray-500" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '12px' }}>Suggested</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={fetchRides}
                    className="text-gray-700 border-2 border-gray-300 transition-all hover:bg-gray-50"
                    style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, height: '48px', borderRadius: '8px', fontSize: '16px' }}
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => onViewRideRequest(ride.id)}
                    className="text-white transition-all"
                    style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, backgroundColor: '#4CAF50', height: '48px', borderRadius: '8px', fontSize: '16px' }}
                  >
                    Accept
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="mb-4 rounded-full flex items-center justify-center" style={{ width: '100px', height: '100px', backgroundColor: '#F5F5F5' }}>
              <Clock className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="mb-2 text-gray-800 text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '22px', fontWeight: 600 }}>
              You're Offline
            </h3>
            <p className="text-center text-gray-600 px-8 mb-6" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px', lineHeight: '1.6' }}>
              Go online to start receiving ride requests
            </p>
            <button
              onClick={() => setIsOnline(true)}
              className="text-white transition-all"
              style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, backgroundColor: '#4CAF50', height: '56px', borderRadius: '8px', fontSize: '18px', paddingLeft: '48px', paddingRight: '48px' }}
            >
              Go Online
            </button>
          </div>
        )}
      </div>

      {/* Weekly Summary */}
      {isOnline && (
        <div className="mx-4 mb-4 p-4" style={{ backgroundColor: '#E8F5E9', borderRadius: '12px' }}>
          <h4 className="mb-3 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
            This Week's Summary
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 mb-1" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px' }}>Total Earnings</p>
              <p className="text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 700 }}>₹7,850</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px' }}>Total Trips</p>
              <p className="text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 700 }}>{rides.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}