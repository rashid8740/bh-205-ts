"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function CameraPermission(): JSX.Element {
  const router = useRouter();
  const [permissionState, setPermissionState] =
    useState<PermissionState | null>(null);

  useEffect(() => {
    const checkPermission = async () => {
      try {
        const result = await navigator.permissions.query({
          name: "camera" as PermissionName,
        });
        setPermissionState(result.state);
        result.onchange = () => setPermissionState(result.state);
      } catch (error) {
        console.error("Error checking camera permission:", error);
        setPermissionState("denied");
      }
    };

    checkPermission();
  }, []);

  const handleAllow = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach((track) => track.stop());
      router.push("/check-drug/camera");
    } catch (error) {
      console.error("Error accessing camera:", error);
      setPermissionState("denied");
    }
  };

  const handleBack = () => {
    router.push("/check-drug");
  };

  const renderContent = () => {
    switch (permissionState) {
      case "granted":
        router.push("/check-drug/camera");
        return null;
      case "denied":
        return (
          <div>
            <p>
              Camera access is denied. Please enable it in your browser
              settings.
            </p>
            <button
              onClick={handleBack}
              className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 mt-4"
            >
              Go Back
            </button>
          </div>
        );
      case "prompt":
      default:
        return (
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
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="px-4 py-8 max-w-5xl mx-auto">{renderContent()}</main>
    </div>
  );
}
