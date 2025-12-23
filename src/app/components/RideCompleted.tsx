import { Star, ThumbsUp, Clock, MapPin, CircleCheck } from 'lucide-react';
import { useState } from 'react';

interface RideCompletedProps {
  onSubmit: () => void;
}

export function RideCompleted({ onSubmit }: RideCompletedProps) {
  const [rating, setRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const feedbackTags = [
    'Safe driving',
    'Clean vehicle',
    'Friendly driver',
    'On time',
    'Good route',
    'Polite behavior'
  ];

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      {/* Success Icon */}
      <div className="text-center mb-6">
        <div 
          className="mx-auto mb-4 rounded-full flex items-center justify-center"
          style={{ 
            width: '100px', 
            height: '100px', 
            backgroundColor: '#E8F5E9'
          }}
        >
          <CircleCheck className="w-16 h-16 text-green-600" strokeWidth={2} />
        </div>
        <h1 
          className="mb-2 text-gray-800"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: '28px', fontWeight: 700 }}
        >
          Trip Completed!
        </h1>
        <p 
          className="text-gray-600"
          style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}
        >
          Thank you for riding with AutoConnect
        </p>
      </div>

      {/* Trip Summary */}
      <div 
        className="mb-6 p-4"
        style={{ 
          backgroundColor: '#F5F5F5', 
          borderRadius: '12px'
        }}
      >
        <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-300">
          <span 
            className="text-gray-600"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Total Fare
          </span>
          <span 
            className="text-gray-800"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '28px', fontWeight: 700 }}
          >
            ₹67
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <div className="flex-1">
              <p 
                className="text-gray-500"
                style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px' }}
              >
                Distance
              </p>
              <p 
                className="text-gray-800"
                style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
              >
                3.5 km
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <div className="flex-1">
              <p 
                className="text-gray-500"
                style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px' }}
              >
                Duration
              </p>
              <p 
                className="text-gray-800"
                style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
              >
                15 minutes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Driver Info */}
      <div className="mb-6">
        <p 
          className="mb-3 text-gray-700"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
        >
          Your driver
        </p>
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1759851683916-b1aee28f28a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhdXRvJTIwcmlja3NoYXclMjBkcml2ZXJ8ZW58MXx8fHwxNzY2NDk5Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Driver"
            className="object-cover"
            style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '12px'
            }}
          />
          <div>
            <h4 
              className="text-gray-800 mb-1"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Rajesh Kumar
            </h4>
            <p 
              className="text-gray-600"
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}
            >
              Auto Rickshaw • KA 01 AB 1234
            </p>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h3 
          className="mb-3 text-gray-800"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 600 }}
        >
          Rate your ride
        </h3>
        <div className="flex gap-3 justify-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className="transition-all"
            >
              <Star
                className={`w-12 h-12 ${
                  star <= rating 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'text-gray-300'
                }`}
                strokeWidth={2}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Feedback Tags */}
      {rating > 0 && (
        <div className="mb-6">
          <h3 
            className="mb-3 text-gray-800"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 600 }}
          >
            What went well? (Optional)
          </h3>
          <div className="flex flex-wrap gap-2">
            {feedbackTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 transition-all ${
                  selectedTags.includes(tag)
                    ? 'text-white'
                    : 'text-gray-700 border-2 border-gray-300'
                }`}
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '14px',
                  borderRadius: '20px',
                  backgroundColor: selectedTags.includes(tag) ? '#4CAF50' : 'transparent'
                }}
              >
                {selectedTags.includes(tag) && <ThumbsUp className="w-3 h-3 inline mr-1" />}
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={onSubmit}
        disabled={rating === 0}
        className="w-full text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-auto"
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 500,
          backgroundColor: '#FFC107',
          height: '56px',
          borderRadius: '8px',
          fontSize: '18px'
        }}
      >
        Submit Rating
      </button>

      <button
        onClick={onSubmit}
        className="w-full text-gray-600 transition-all mt-3"
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontSize: '16px'
        }}
      >
        Skip for now
      </button>
    </div>
  );
}