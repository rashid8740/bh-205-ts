"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Image from "next/image";
import { X } from "lucide-react";

export default function ReportPharmacy(): JSX.Element {
  const [pharmacyName, setPharmacyName] = useState<string>("");
  const [county, setCounty] = useState<string>("");
  const [town, setTown] = useState<string>("");
  const [isReported, setIsReported] = useState<boolean>(false);
  const router = useRouter();

  const handleReport = () => {
    if (pharmacyName && county && town) {
      // Here you would typically send the report to your backend
      setIsReported(true);
    } else {
      alert("Please fill in all fields before reporting.");
    }
  };

  const handleCancel = () => {
    router.back();
  };

  const closePopup = () => {
    setIsReported(false);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="px-4 py-8 max-w-6xl mx-auto relative">
        {isReported && (
          <div className="absolute top-0 left-0 right-0 bg-gray-100 p-4 rounded-lg shadow-md z-10">
            <div className="flex justify-between items-center">
              <p>
                You have successfully reported {pharmacyName} pharmacy in{" "}
                {county}. Thank you for your help. Let{"'"}s keep our health
                safe.
              </p>
              <button
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/illustration.png"
              alt="Report Pharmacy Illustration"
              width={400}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Report Pharmacy</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Input Pharmacy Name"
                className="w-full p-2 border rounded"
                value={pharmacyName}
                onChange={(e) => setPharmacyName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="County"
                className="w-full p-2 border rounded"
                value={county}
                onChange={(e) => setCounty(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Town"
                className="w-full p-2 border rounded"
                value={town}
                onChange={(e) => setTown(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handleCancel}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleReport}
            className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800"
          >
            Report Pharmacy
          </button>
        </div>
      </main>
    </div>
  );
}
