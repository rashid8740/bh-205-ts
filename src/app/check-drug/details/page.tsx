"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { Facebook, MessageCircle, X } from "lucide-react";

export default function DrugDetails(): JSX.Element {
  const [isSharePopupOpen, setIsSharePopupOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleShare = () => {
    setIsSharePopupOpen(true);
  };

  const handleReportPharmacy = () => {
    router.push("/check-drug/report-pharmacy");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="px-4 py-8 max-w-5xl mx-auto">
        <div className="relative">
          {isSharePopupOpen && (
            <div className="absolute top-0 left-0 right-0 bg-white rounded-lg shadow-md p-4 z-10">
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-8">
                  <button className="flex flex-col items-center">
                    <MessageCircle size={24} className="text-green-500" />
                    <span>WhatsApp</span>
                  </button>
                  <button className="flex flex-col items-center">
                    <Facebook size={24} className="text-blue-600" />
                    <span>Facebook</span>
                  </button>
                </div>
                <button
                  onClick={() => setIsSharePopupOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => setIsSharePopupOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
                  Share
                </button>
              </div>
            </div>
          )}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Drug Details</h2>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Name of the Drug:</span>{" "}
                Cetrizine
              </p>
              <p>
                <span className="font-semibold">Status:</span> Recalled
              </p>
              <p>
                <span className="font-semibold">Batch no:</span> 25690209-0
              </p>
              <p>
                <span className="font-semibold">Manufacture Date:</span>{" "}
                21-05-2024
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handleReportPharmacy}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
          >
            Report Pharmacy
          </button>
          <button
            onClick={handleShare}
            className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800"
          >
            Share
          </button>
        </div>
      </main>
    </div>
  );
}
