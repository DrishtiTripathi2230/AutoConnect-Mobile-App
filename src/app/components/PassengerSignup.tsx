import { useState } from 'react';
import { User, Phone, Calendar, ArrowRight } from 'lucide-react';

interface PassengerSignupProps {
  onComplete: (isMinor: boolean) => void;
}

export function PassengerSignup({ onComplete }: PassengerSignupProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  const calculateAge = (birthDate: string) => {
    if (!birthDate) return null;
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  };

  const age = calculateAge(dob);
  const isMinor = age !== null && age < 18;
  const maxDob = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      <div className="mb-8">
        <h1
          className="mb-2 text-gray-800"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: '32px', fontWeight: 700 }}
        >
          Create Account
        </h1>
        <p className="text-gray-600" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}>
          Enter your details to get started
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-6">
        {/* Name */}
        <div>
          <label className="block mb-2 text-gray-700" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
              placeholder="Enter your full name"
              className="w-full pl-12 pr-4 border-2 border-gray-300 focus:border-[#FFC107] outline-none transition-all"
              style={{ fontFamily: 'Roboto, sans-serif', height: '56px', borderRadius: '8px', fontSize: '16px' }}
            />
          </div>
          {name.length > 0 && name.trim().length < 2 && (
            <p className="mt-1 text-red-500 text-sm">Enter a valid name</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 text-gray-700" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <span className="absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-600 font-medium">+91</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
              placeholder="10-digit mobile number"
              className="w-full pl-24 pr-4 border-2 border-gray-300 focus:border-[#FFC107] outline-none transition-all"
              style={{ fontFamily: 'Roboto, sans-serif', height: '56px', borderRadius: '8px', fontSize: '16px' }}
            />
          </div>
          {phone.length > 0 && phone.length < 10 && (
            <p className="mt-1 text-red-500 text-sm">Enter a valid 10-digit number</p>
          )}
        </div>

        {/* DOB */}
        <div>
          <label className="block mb-2 text-gray-700" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>
            Date of Birth <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={dob}
              max={maxDob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full pl-12 pr-4 border-2 border-gray-300 focus:border-[#FFC107] outline-none transition-all"
              style={{ fontFamily: 'Roboto, sans-serif', height: '56px', borderRadius: '8px', fontSize: '16px' }}
            />
          </div>
          {age !== null && (
            <p className="mt-1 text-gray-500 text-sm">Age: {age} years</p>
          )}
        </div>

        {/* Minor Alert */}
        {isMinor && (
          <div
            className="p-4 flex items-start gap-3"
            style={{ backgroundColor: '#FFF9E6', borderRadius: '8px', border: '2px solid #FFC107' }}
          >
            <div
              className="rounded-full flex items-center justify-center flex-shrink-0"
              style={{ width: '32px', height: '32px', backgroundColor: '#FFC107' }}
            >
              <span className="text-white" style={{ fontWeight: 700 }}>!</span>
            </div>
            <div>
              <h4 className="text-gray-800 mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                Kid Safety Features Enabled
              </h4>
              <p className="text-gray-600" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px', lineHeight: '1.5' }}>
                As you are under 18, we'll enable additional safety features and require parent/guardian information.
              </p>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={() => onComplete(isMinor)}
        disabled={name.trim().length < 2 || phone.length !== 10}
        className="w-full flex items-center justify-center gap-2 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-8"
        style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, backgroundColor: '#FFC107', height: '56px', borderRadius: '8px', fontSize: '18px' }}
      >
        Continue
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}