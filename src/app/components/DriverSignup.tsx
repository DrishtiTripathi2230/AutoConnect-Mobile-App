import { useState } from 'react';
import { User, Phone, Car, Upload, ArrowRight, CircleCheck } from 'lucide-react';

interface DriverSignupProps {
  onComplete: () => void;
}

export function DriverSignup({ onComplete }: DriverSignupProps) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [documentsUploaded, setDocumentsUploaded] = useState(false);

  const vehicleTypes = [
    'Auto Rickshaw',
    'E-Rickshaw',
    'Cycle Rickshaw',
    'Single-Engine Bike'
  ];

  if (step === 1) {
    return (
      <div className="min-h-screen bg-white flex flex-col p-6">
        <div className="mb-8">
          <h1 
            className="mb-2 text-gray-800"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '32px', fontWeight: 700 }}
          >
            Become a Driver
          </h1>
          <p 
            className="text-gray-600"
            style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}
          >
            Enter your details to get started
          </p>
        </div>

        {/* Benefits */}
        <div 
          className="mb-6 p-5"
          style={{ 
            backgroundColor: '#F1F8F4', 
            borderRadius: '12px',
            border: '2px solid #4CAF50'
          }}
        >
          <h3 
            className="mb-3 text-gray-800"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            🎉 Zero Commission Model
          </h3>
          <ul className="space-y-2">
            {[
              'Keep 100% of your earnings',
              'Accept or reject rides freely',
              'Build your reputation with ratings',
              'Flexible working hours'
            ].map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span 
                  className="text-gray-700"
                  style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px', lineHeight: '1.5' }}
                >
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div>
            <label 
              className="block mb-2 text-gray-700"
              style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
            >
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full pl-12 pr-4 border-2 border-gray-300 focus:border-[#4CAF50] outline-none transition-all"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  height: '56px',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
              />
            </div>
          </div>

          <div>
            <label 
              className="block mb-2 text-gray-700"
              style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
            >
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <span className="absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-600">+91</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full pl-24 pr-4 border-2 border-gray-300 focus:border-[#4CAF50] outline-none transition-all"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  height: '56px',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => setStep(2)}
          disabled={!name || !phone}
          className="w-full flex items-center justify-center gap-2 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-8"
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 500,
            backgroundColor: '#4CAF50',
            height: '56px',
            borderRadius: '8px',
            fontSize: '18px'
          }}
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="min-h-screen bg-white flex flex-col p-6">
        <div className="mb-8">
          <h1 
            className="mb-2 text-gray-800"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '32px', fontWeight: 700 }}
          >
            Vehicle Details
          </h1>
          <p 
            className="text-gray-600"
            style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}
          >
            Tell us about your vehicle
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div>
            <label 
              className="block mb-2 text-gray-700"
              style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
            >
              Vehicle Type
            </label>
            <div className="relative">
              <Car className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full pl-12 pr-4 border-2 border-gray-300 focus:border-[#4CAF50] outline-none transition-all appearance-none bg-white"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  height: '56px',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
              >
                <option value="">Select vehicle type</option>
                {vehicleTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label 
              className="block mb-2 text-gray-700"
              style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
            >
              Vehicle Number
            </label>
            <div className="relative">
              <Car className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                placeholder="e.g., KA 01 AB 1234"
                className="w-full pl-12 pr-4 border-2 border-gray-300 focus:border-[#4CAF50] outline-none transition-all"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  height: '56px',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => setStep(3)}
          disabled={!vehicleType || !vehicleNumber}
          className="w-full flex items-center justify-center gap-2 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-8"
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 500,
            backgroundColor: '#4CAF50',
            height: '56px',
            borderRadius: '8px',
            fontSize: '18px'
          }}
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      <div className="mb-8">
        <h1 
          className="mb-2 text-gray-800"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: '32px', fontWeight: 700 }}
        >
          Upload Documents
        </h1>
        <p 
          className="text-gray-600"
          style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}
        >
          We need these to verify your identity
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        {['Driving License', 'Aadhaar Card', 'Vehicle RC'].map((doc) => (
          <button
            key={doc}
            onClick={() => setDocumentsUploaded(true)}
            className="w-full p-5 flex items-center justify-between border-2 border-dashed border-gray-300 transition-all hover:border-[#4CAF50] hover:bg-green-50"
            style={{ borderRadius: '12px' }}
          >
            <div className="flex items-center gap-3">
              <div 
                className="rounded-full flex items-center justify-center"
                style={{ 
                  width: '48px', 
                  height: '48px', 
                  backgroundColor: '#F1F8F4'
                }}
              >
                <Upload className="w-6 h-6 text-[#4CAF50]" />
              </div>
              <div className="text-left">
                <h4 
                  className="text-gray-800 mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  {doc}
                </h4>
                <p 
                  className="text-gray-500"
                  style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}
                >
                  Click to upload
                </p>
              </div>
            </div>
            {documentsUploaded && (
              <CircleCheck className="w-6 h-6 text-green-600" />
            )}
          </button>
        ))}

        <div 
          className="mt-4 p-4"
          style={{ 
            backgroundColor: '#FFF3E0', 
            borderRadius: '8px',
            border: '1px solid #FFB74D'
          }}
        >
          <p 
            className="text-gray-700"
            style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px', lineHeight: '1.6' }}
          >
            <strong>Note:</strong> Your documents will be securely stored and verified by our team within 24-48 hours.
          </p>
        </div>
      </div>

      <button
        onClick={onComplete}
        disabled={!documentsUploaded}
        className="w-full flex items-center justify-center gap-2 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-8"
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 500,
          backgroundColor: '#4CAF50',
          height: '56px',
          borderRadius: '8px',
          fontSize: '18px'
        }}
      >
        Submit for Verification
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}