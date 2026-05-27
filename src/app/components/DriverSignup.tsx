import { useState, useRef } from 'react';
import { User, Phone, Car, Upload, ArrowRight, CircleCheck } from 'lucide-react';
import { api } from '../api';

interface DriverSignupProps {
  onComplete: () => void;
}

export function DriverSignup({ onComplete }: DriverSignupProps) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [uploadedDocs, setUploadedDocs] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fileRefs = {
    'Driving License': useRef<HTMLInputElement>(null),
    'Aadhaar Card': useRef<HTMLInputElement>(null),
    'Vehicle RC': useRef<HTMLInputElement>(null),
  };

  const vehicleTypes = [
    'Auto Rickshaw',
    'E-Rickshaw',
    'Cycle Rickshaw',
    'Single-Engine Bike'
  ];

  const handleFileUpload = (doc: string, file: File) => {
    setUploadedDocs(prev => ({ ...prev, [doc]: file.name }));
  };

  const allDocsUploaded = Object.keys(uploadedDocs).length === 3;

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      await api.registerDriver({
        name,
        phone: '+91' + phone,
        vehicleType,
        location: 'Delhi'
      });
      onComplete();
    } catch (err) {
      setError('Could not register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
          <p className="text-gray-600" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}>
            Enter your details to get started
          </p>
        </div>

        <div className="mb-6 p-5" style={{ backgroundColor: '#F1F8F4', borderRadius: '12px', border: '2px solid #4CAF50' }}>
          <h3 className="mb-3 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
            🎉 Zero Commission Model
          </h3>
          <ul className="space-y-2">
            {['Keep 100% of your earnings', 'Accept or reject rides freely', 'Build your reputation with ratings', 'Flexible working hours'].map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px', lineHeight: '1.5' }}>
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 flex flex-col gap-6">
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
                className="w-full pl-12 pr-4 border-2 border-gray-300 focus:border-[#4CAF50] outline-none transition-all"
                style={{ fontFamily: 'Roboto, sans-serif', height: '56px', borderRadius: '8px', fontSize: '16px' }}
              />
            </div>
          </div>

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
                placeholder="10-digit number"
                className="w-full pl-24 pr-4 border-2 border-gray-300 focus:border-[#4CAF50] outline-none transition-all"
                style={{ fontFamily: 'Roboto, sans-serif', height: '56px', borderRadius: '8px', fontSize: '16px' }}
              />
            </div>
            {phone.length > 0 && phone.length < 10 && (
              <p className="mt-1 text-red-500 text-sm">Enter a valid 10-digit number</p>
            )}
          </div>
        </div>

        <button
          onClick={() => setStep(2)}
          disabled={!name.trim() || phone.length !== 10}
          className="w-full flex items-center justify-center gap-2 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-8"
          style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, backgroundColor: '#4CAF50', height: '56px', borderRadius: '8px', fontSize: '18px' }}
        >
          Continue <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="min-h-screen bg-white flex flex-col p-6">
        <div className="mb-8">
          <h1 className="mb-2 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '32px', fontWeight: 700 }}>
            Vehicle Details
          </h1>
          <p className="text-gray-600" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}>
            Tell us about your vehicle
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div>
            <label className="block mb-2 text-gray-700" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>
              Vehicle Type
            </label>
            <div className="relative">
              <Car className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full pl-12 pr-4 border-2 border-gray-300 focus:border-[#4CAF50] outline-none transition-all appearance-none bg-white"
                style={{ fontFamily: 'Roboto, sans-serif', height: '56px', borderRadius: '8px', fontSize: '16px' }}
              >
                <option value="">Select vehicle type</option>
                {vehicleTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-gray-700" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>
              Vehicle Number
            </label>
            <div className="relative">
              <Car className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value.toUpperCase().replace(/[^A-Z0-9\s]/g, ''))}
                placeholder="e.g., DL 01 AB 1234"
                maxLength={13}
                className="w-full pl-12 pr-4 border-2 border-gray-300 focus:border-[#4CAF50] outline-none transition-all"
                style={{ fontFamily: 'Roboto, sans-serif', height: '56px', borderRadius: '8px', fontSize: '16px' }}
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => setStep(3)}
          disabled={!vehicleType || vehicleNumber.length < 6}
          className="w-full flex items-center justify-center gap-2 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-8"
          style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, backgroundColor: '#4CAF50', height: '56px', borderRadius: '8px', fontSize: '18px' }}
        >
          Continue <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      <div className="mb-8">
        <h1 className="mb-2 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '32px', fontWeight: 700 }}>
          Upload Documents
        </h1>
        <p className="text-gray-600" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}>
          Upload clear photos of your documents
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        {(['Driving License', 'Aadhaar Card', 'Vehicle RC'] as const).map((doc) => (
          <div key={doc}>
            <input
              type="file"
              ref={fileRefs[doc]}
              accept="image/*,.pdf"
              style={{ display: 'none' }}
              onChange={(e) => {
                if (e.target.files?.[0]) handleFileUpload(doc, e.target.files[0]);
              }}
            />
            <button
              onClick={() => fileRefs[doc].current?.click()}
              className="w-full p-5 flex items-center justify-between border-2 transition-all"
              style={{
                borderRadius: '12px',
                borderStyle: uploadedDocs[doc] ? 'solid' : 'dashed',
                borderColor: uploadedDocs[doc] ? '#4CAF50' : '#D1D5DB',
                backgroundColor: uploadedDocs[doc] ? '#F1F8F4' : 'white'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full flex items-center justify-center" style={{ width: '48px', height: '48px', backgroundColor: '#F1F8F4' }}>
                  <Upload className="w-6 h-6 text-[#4CAF50]" />
                </div>
                <div className="text-left">
                  <h4 className="text-gray-800 mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                    {doc}
                  </h4>
                  <p className="text-gray-500" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}>
                    {uploadedDocs[doc] ? `✓ ${uploadedDocs[doc]}` : 'Tap to upload photo or PDF'}
                  </p>
                </div>
              </div>
              {uploadedDocs[doc] && <CircleCheck className="w-6 h-6 text-green-600 flex-shrink-0" />}
            </button>
          </div>
        ))}

        <div className="mt-2 p-4" style={{ backgroundColor: '#FFF3E0', borderRadius: '8px', border: '1px solid #FFB74D' }}>
          <p className="text-gray-700" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px', lineHeight: '1.6' }}>
            <strong>Note:</strong> Upload clear images. Documents verified within 24-48 hours.
          </p>
        </div>

        {!allDocsUploaded && (
          <p className="text-center text-gray-500 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {Object.keys(uploadedDocs).length}/3 documents uploaded
          </p>
        )}

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!allDocsUploaded || loading}
        className="w-full flex items-center justify-center gap-2 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-8"
        style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, backgroundColor: '#4CAF50', height: '56px', borderRadius: '8px', fontSize: '18px' }}
      >
        {loading ? 'Registering...' : 'Submit for Verification'}
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}