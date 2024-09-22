"use client";

import React, { useRef, Suspense, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { useImage } from "@/context/ImageContext";

const ClientSideContent: React.FC = () => {
  const router = useRouter();
  const [mode, setMode] = useState<string>("camera");
  const { setCapturedImage } = useImage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const searchParams = new URLSearchParams(window.location.search);
    setMode(searchParams.get("mode") || "camera");
  }, []);

  const handleBackClick = (): void => {
    router.push("/");
  };

  const handleTakePicture = (): void => {
    router.push("/check-drug/camera-permission");
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        setCapturedImage(e.target?.result as string);
        router.push("/check-drug/preview");
      };
      reader.readAsDataURL(file);
    }
  };

  const renderCameraMode = (): JSX.Element => (
    <div className="flex flex-col md:flex-row md:space-x-8 items-start md:items-stretch">
      <div className="w-full md:w-1/2 flex items-start">
        <div className="w-full aspect-[4/3] relative">
          <Image
            src="/images/drug-package.png"
            alt="Example of drug packaging"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-between mt-6 md:mt-0">
        <div className="flex-grow">
          <p className="text-xl leading-relaxed">
            Please take a <strong className="text-black">clear</strong> and
            well-lit picture of the drug packaging where the{" "}
            <strong className="text-black">batch number</strong> is printed.
            Make sure the entire batch number is
            <strong className="text-black"> fully visible</strong> and in focus,
            avoiding any glare or obstructions that could obscure the text.
          </p>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            onClick={handleBackClick}
            className="px-8 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
          >
            Back
          </button>
          <button
            onClick={handleTakePicture}
            className="px-8 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition duration-150 ease-in-out"
          >
            Take a picture
          </button>
        </div>
      </div>
    </div>
  );

  const renderGalleryMode = (): JSX.Element => (
    <div className="flex flex-col justify-between">
      <div className="flex-grow">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 mb-4">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="w-full"
          />
          <p className="text-center text-gray-500 mt-2">Select an image file</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={handleBackClick}
          className="px-8 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
        >
          Back
        </button>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-8 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition duration-150 ease-in-out"
        >
          Upload
        </button>
      </div>
    </div>
  );

  if (!isClient) {
    return null; // or a loading indicator
  }

  return (
    <main className="px-4 py-8 max-w-5xl mx-auto">
      {mode === "gallery" ? renderGalleryMode() : renderCameraMode()}
    </main>
  );
};

const CheckDrug: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <ClientSideContent />
      </Suspense>
    </div>
  );
};

export default CheckDrug;
