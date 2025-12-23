import { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { OnboardingScreens } from './components/OnboardingScreens';
import { RoleSelectionScreen } from './components/RoleSelectionScreen';
import { PassengerSignup } from './components/PassengerSignup';
import { KidSafetySetup } from './components/KidSafetySetup';
import { PassengerHome } from './components/PassengerHome';
import { VehicleSelection } from './components/VehicleSelection';
import { FindingDriver } from './components/FindingDriver';
import { RideAccepted } from './components/RideAccepted';
import { RideInProgress } from './components/RideInProgress';
import { RideCompleted } from './components/RideCompleted';
import { DriverSignup } from './components/DriverSignup';
import { DriverDashboard } from './components/DriverDashboard';
import { DriverRideInProgress } from './components/DriverRideInProgress';
import { House, ArrowLeft } from 'lucide-react';

type Screen = 
  | 'splash'
  | 'onboarding'
  | 'roleSelection'
  | 'passengerSignup'
  | 'kidSafety'
  | 'passengerHome'
  | 'vehicleSelection'
  | 'findingDriver'
  | 'rideAccepted'
  | 'rideInProgress'
  | 'rideCompleted'
  | 'driverSignup'
  | 'driverDashboard'
  | 'driverRideInProgress';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [isMinor, setIsMinor] = useState(false);
  const [userRole, setUserRole] = useState<'passenger' | 'driver' | null>(null);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onContinue={() => setCurrentScreen('onboarding')} />;
      
      case 'onboarding':
        return <OnboardingScreens onComplete={() => setCurrentScreen('roleSelection')} />;
      
      case 'roleSelection':
        return (
          <RoleSelectionScreen
            onSelectPassenger={() => {
              setUserRole('passenger');
              setCurrentScreen('passengerSignup');
            }}
            onSelectDriver={() => {
              setUserRole('driver');
              setCurrentScreen('driverSignup');
            }}
          />
        );
      
      case 'passengerSignup':
        return (
          <PassengerSignup
            onComplete={(minor) => {
              setIsMinor(minor);
              if (minor) {
                setCurrentScreen('kidSafety');
              } else {
                setCurrentScreen('passengerHome');
              }
            }}
          />
        );
      
      case 'kidSafety':
        return <KidSafetySetup onComplete={() => setCurrentScreen('passengerHome')} />;
      
      case 'passengerHome':
        return <PassengerHome onFindRides={() => setCurrentScreen('vehicleSelection')} />;
      
      case 'vehicleSelection':
        return <VehicleSelection onRequestRide={() => setCurrentScreen('findingDriver')} />;
      
      case 'findingDriver':
        return (
          <FindingDriver
            onDriverFound={() => setCurrentScreen('rideAccepted')}
            onCancel={() => setCurrentScreen('passengerHome')}
          />
        );
      
      case 'rideAccepted':
        return <RideAccepted onStartRide={() => setCurrentScreen('rideInProgress')} />;
      
      case 'rideInProgress':
        return <RideInProgress onCompleteRide={() => setCurrentScreen('rideCompleted')} />;
      
      case 'rideCompleted':
        return <RideCompleted onSubmit={() => setCurrentScreen('passengerHome')} />;
      
      case 'driverSignup':
        return <DriverSignup onComplete={() => setCurrentScreen('driverDashboard')} />;
      
      case 'driverDashboard':
        return <DriverDashboard onViewRideRequest={() => setCurrentScreen('driverRideInProgress')} />;
      
      case 'driverRideInProgress':
        return <DriverRideInProgress onCompleteRide={() => setCurrentScreen('driverDashboard')} />;
      
      default:
        return <SplashScreen onContinue={() => setCurrentScreen('onboarding')} />;
    }
  };

  const canGoBack = currentScreen !== 'splash' && currentScreen !== 'onboarding' && currentScreen !== 'roleSelection';
  const showHomeButton = currentScreen === 'passengerHome' || currentScreen === 'driverDashboard';

  const handleBack = () => {
    // Define navigation paths
    const backPaths: Record<Screen, Screen> = {
      splash: 'splash',
      onboarding: 'onboarding',
      roleSelection: 'onboarding',
      passengerSignup: 'roleSelection',
      kidSafety: 'passengerSignup',
      passengerHome: 'roleSelection',
      vehicleSelection: 'passengerHome',
      findingDriver: 'vehicleSelection',
      rideAccepted: 'passengerHome',
      rideInProgress: 'rideAccepted',
      rideCompleted: 'passengerHome',
      driverSignup: 'roleSelection',
      driverDashboard: 'roleSelection',
      driverRideInProgress: 'driverDashboard',
    };

    setCurrentScreen(backPaths[currentScreen]);
  };

  const handleHome = () => {
    if (userRole === 'passenger') {
      setCurrentScreen('passengerHome');
    } else if (userRole === 'driver') {
      setCurrentScreen('driverDashboard');
    }
  };

  return (
    <div className="relative" style={{ fontFamily: 'Roboto, sans-serif' }}>
      {/* Mobile Frame Container */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div 
          className="relative bg-white shadow-2xl overflow-hidden"
          style={{
            maxWidth: '430px',
            width: '100%',
            height: '932px',
            maxHeight: '95vh',
            borderRadius: '48px',
            border: '12px solid #1a1a1a'
          }}
        >
          {/* Status Bar */}
          <div 
            className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-8 z-50"
            style={{ backgroundColor: 'transparent' }}
          >
            <span className="text-sm" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif', fontWeight: 600 }}>
              9:41
            </span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-3 border-2 border-gray-800 rounded-sm relative">
                <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 w-1 h-1.5 bg-gray-800 rounded-r-sm" />
              </div>
            </div>
          </div>

          {/* Navigation Bar */}
          {(canGoBack || showHomeButton) && (
            <div 
              className="absolute top-8 left-0 right-0 h-14 flex items-center px-6 z-40"
              style={{ 
                backgroundColor: userRole === 'driver' ? '#4CAF50' : '#FFC107',
                backdropFilter: 'blur(10px)'
              }}
            >
              {canGoBack && !showHomeButton && (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-white"
                  style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
                >
                  <ArrowLeft className="w-6 h-6" />
                  <span>Back</span>
                </button>
              )}
              {showHomeButton && (
                <div className="flex items-center gap-2 text-white">
                  <House className="w-6 h-6" />
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                    {userRole === 'passenger' ? 'AutoConnect' : 'Driver App'}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Screen Content */}
          <div 
            className="w-full h-full overflow-y-auto"
            style={{ 
              paddingTop: (canGoBack || showHomeButton) ? '56px' : '0',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {renderScreen()}
          </div>

          {/* Home Indicator (iOS style) */}
          <div 
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full"
            style={{ width: '140px', height: '5px' }}
          />
        </div>
      </div>

      {/* Screen Info - Demo Helper */}
      <div 
        className="fixed bottom-6 right-6 bg-white shadow-lg p-4 max-w-xs"
        style={{ borderRadius: '12px', border: '2px solid #e0e0e0' }}
      >
        <h4 
          className="mb-2 text-gray-800"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '14px' }}
        >
          📱 AutoConnect Prototype
        </h4>
        <p 
          className="text-gray-600 mb-2"
          style={{ fontFamily: 'Roboto, sans-serif', fontSize: '12px' }}
        >
          Current: <strong>{currentScreen}</strong>
        </p>
        <p 
          className="text-gray-500"
          style={{ fontFamily: 'Roboto, sans-serif', fontSize: '11px', lineHeight: '1.4' }}
        >
          Navigate through the app to see passenger and driver flows. All interactions are simulated.
        </p>
        <button
          onClick={() => setCurrentScreen('roleSelection')}
          className="mt-3 w-full text-white"
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: '12px',
            backgroundColor: '#6B7280',
            padding: '8px 12px',
            borderRadius: '6px'
          }}
        >
          Reset to Role Selection
        </button>
      </div>
    </div>
  );
}