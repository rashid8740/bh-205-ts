"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import { useImage } from "@/context/ImageContext";

export default function PreviewPage(): JSX.Element {
  const router = useRouter();
  const { capturedImage } = useImage();

  useEffect(() => {
    if (!capturedImage) {
      router.push("/check-drug");
    }
  }, [capturedImage, router]);

  const handleBack = () => {
    router.push("/check-drug");
  };

  const handleUpload = () => {
    router.push("/check-drug/processing");
  };

  if (!capturedImage) {
    return <div>Redirecting...</div>; // Return a valid JSX element instead of null
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="px-4 py-8 max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md mb-8">
            <Image
              src={capturedImage}
              alt="Captured drug package"
              width={500}
              height={300}
              layout="responsive"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleBack}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Back
            </button>
            <button
              onClick={handleUpload}
              className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800"
            >
              Upload
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
