import { useState } from 'react';
import { Shield, User, Phone, ArrowRight } from 'lucide-react';

interface KidSafetySetupProps {
  onComplete: () => void;
}

export function KidSafetySetup({ onComplete }: KidSafetySetupProps) {
  const [guardianName, setGuardianName] = useState('');
  const [guardianPhone, setGuardianPhone] = useState('');
  const [autoShare, setAutoShare] = useState(true);

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      {/* Header */}
      <div className="mb-8">
        <div 
          className="mb-4 rounded-full flex items-center justify-center mx-auto"
          style={{ 
            width: '80px', 
            height: '80px', 
            backgroundColor: '#FFF9E6'
          }}
        >
          <Shield className="w-10 h-10 text-[#FFC107]" strokeWidth={2} />
        </div>
        <h1 
          className="mb-2 text-gray-800 text-center"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: '28px', fontWeight: 700 }}
        >
          Kid Safety Setup
        </h1>
        <p 
          className="text-gray-600 text-center"
          style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px', lineHeight: '1.5' }}
        >
          We prioritize your safety. Add a parent or guardian who will be notified about your rides.
        </p>
      </div>

      {/* Form */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Guardian Name Input */}
        <div>
          <label 
            className="block mb-2 text-gray-700"
            style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
          >
            Parent/Guardian Name
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={guardianName}
              onChange={(e) => setGuardianName(e.target.value)}
              placeholder="Enter parent/guardian name"
              className="w-full pl-12 pr-4 border-2 border-gray-300 focus:border-[#FFC107] outline-none transition-all"
              style={{
                fontFamily: 'Roboto, sans-serif',
                height: '56px',
                borderRadius: '8px',
                fontSize: '16px'
              }}
            />
          </div>
        </div>

        {/* Guardian Phone Input */}
        <div>
          <label 
            className="block mb-2 text-gray-700"
            style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
          >
            Parent/Guardian Phone
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <span className="absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-600">+91</span>
            <input
              type="tel"
              value={guardianPhone}
              onChange={(e) => setGuardianPhone(e.target.value)}
              placeholder="Enter phone number"
              className="w-full pl-24 pr-4 border-2 border-gray-300 focus:border-[#FFC107] outline-none transition-all"
              style={{
                fontFamily: 'Roboto, sans-serif',
                height: '56px',
                borderRadius: '8px',
                fontSize: '16px'
              }}
            />
          </div>
        </div>

        {/* Auto Share Toggle */}
        <div 
          className="p-4 flex items-center justify-between"
          style={{ 
            backgroundColor: '#F5F5F5', 
            borderRadius: '8px'
          }}
        >
          <div className="flex-1">
            <h4 
              className="text-gray-800 mb-1"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Auto-share ride details
            </h4>
            <p 
              className="text-gray-600"
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}
            >
              Automatically notify guardian when you book a ride
            </p>
          </div>
          <button
            onClick={() => setAutoShare(!autoShare)}
            className="ml-4 relative transition-all"
            style={{
              width: '52px',
              height: '32px',
              backgroundColor: autoShare ? '#4CAF50' : '#E0E0E0',
              borderRadius: '16px'
            }}
          >
            <div
              className="absolute top-1 transition-all bg-white rounded-full"
              style={{
                width: '24px',
                height: '24px',
                left: autoShare ? '26px' : '2px'
              }}
            />
          </button>
        </div>

        {/* Info Box */}
        <div 
          className="p-4"
          style={{ 
            backgroundColor: '#E3F2FD', 
            borderRadius: '8px',
            border: '1px solid #90CAF9'
          }}
        >
          <p 
            className="text-gray-700"
            style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px', lineHeight: '1.6' }}
          >
            <strong>Safety Features:</strong> Live tracking, automatic ride sharing with guardian, emergency SOS button, and verified drivers only.
          </p>
        </div>
      </div>

      {/* Complete Button */}
      <button
        onClick={onComplete}
        disabled={!guardianName || !guardianPhone}
        className="w-full flex items-center justify-center gap-2 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-8"
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 500,
          backgroundColor: '#FFC107',
          height: '56px',
          borderRadius: '8px',
          fontSize: '18px'
        }}
      >
        Complete Setup
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
