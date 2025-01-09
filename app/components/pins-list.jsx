'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const PinsList = () => {
  const [pins, setPins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPins = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/pin`, { cache: "no-cache" });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPins(data);
      } catch (e) {
        console.error("Failed to fetch pins:", e);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPins();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-600 mx-auto"></div>
        <p className="mt-4 text-xl text-gray-600">Loading pins...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-600">Awesome Pins Collection</h1>
      {pins.length === 0 ? (
        <p className="text-center text-gray-600">No pins found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pins.map((pin) => (
            <div key={pin?.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600 relative">
                {pin?.image &&(
                  <Image onBlur={true}
                    src={pin.image}
                    width={100}
                    height={100}
                    alt={pin?.title || 'Pin image'}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                )}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-purple-600 mb-2">{pin?.title || 'Untitled'}</h2>
                <p className="text-gray-600 mb-2">{pin?.dresscriptoin || 'No description available'}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {pin?.type || 'Unspecified'}
                  </span>
                  <Link href={`/pin/${pin?.id}`} className="text-purple-600 hover:text-purple-800 transition duration-300">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PinsList;

