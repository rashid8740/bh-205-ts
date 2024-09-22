// app/check-drug/camera-permission/page.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function CameraPermission(): JSX.Element {
  const router = useRouter();

  const handleAllow = (): void => {
    router.push("/check-drug/camera");
  };

  const handleBack = (): void => {
    router.push("/check-drug");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="px-4 py-8 max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-4 rounded-lg mb-8">
            <p className="text-center">
              Bheta wants permission to use your camera
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleBack}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleAllow}
              className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800"
            >
              Allow
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
