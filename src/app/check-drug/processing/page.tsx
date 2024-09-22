"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import { useImage } from "@/context/ImageContext";

export default function ProcessingPage(): JSX.Element {
  const { capturedImage } = useImage();
  const router = useRouter();

  useEffect(() => {
    if (!capturedImage) {
      router.push("/check-drug");
      return;
    }

    const timer = setTimeout(() => {
      router.push("/check-drug/details");
    }, 3000);

    return () => clearTimeout(timer);
  }, [capturedImage, router]);

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
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mb-4"></div>
            <p className="text-xl font-semibold">Processing...</p>
          </div>
        </div>
      </main>
    </div>
  );
}
