// app/pharmacy-finder/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

const PharmacyFinder: React.FC = () => {
  const [showLocationPopup, setShowLocationPopup] = useState<boolean>(true);
  const [locationAccepted, setLocationAccepted] = useState<boolean>(false);
  const router = useRouter();

  const handleAccept = (): void => {
    setShowLocationPopup(false);
    setLocationAccepted(true);
    // Here you would typically request the user's location
  };

  const handleDecline = (): void => {
    router.push("/");
  };

  const handleBack = (): void => {
    router.push("/");
  };

  const handleGetDirection = (): void => {
    // Implement direction functionality here
    console.log("Get direction clicked");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="px-4 py-8 max-w-6xl mx-auto relative">
        {showLocationPopup && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-md z-20">
            <p className="mb-4">Bheta wants to use your location</p>
            <div className="flex justify-between">
              <button
                onClick={handleDecline}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800"
              >
                Accept
              </button>
            </div>
          </div>
        )}
        <div className="w-full h-[calc(100vh-200px)] bg-gray-200 relative">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=36.7352294921875%2C-1.3839533963377012%2C37.08831787109375%2C-1.1625120352030515&amp;layer=mapnik"
            style={{ border: "1px solid black" }}
          />
          {locationAccepted && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
              <button
                onClick={handleBack}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100"
              >
                Back
              </button>
              <button
                onClick={handleGetDirection}
                className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800"
              >
                Get Direction
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default PharmacyFinder;
