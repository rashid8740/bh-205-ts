"use client";

import { Camera, Image as ImageIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero(): JSX.Element {
  const router = useRouter();

  const handleCameraClick = () => {
    router.push("/check-drug?mode=camera");
  };

  const handleGalleryClick = () => {
    router.push("/check-drug?mode=gallery");
  };

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 max-w-6xl mx-auto text-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="w-full md:w-2/3 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-6">
              Check On Your Drug Status Today!
            </h1>
            <p className="text-xl leading-relaxed space-y-2">
              <span className="block">
                Ensure the safety of the medications you
              </span>
              <span className="block">
                use by easily checking if a drug has been
              </span>
              <span className="block">
                recalled. Simply upload a clear image or
              </span>
              <span className="block">take a photo of the drug packaging,</span>
              <span className="block">
                making sure the batch number in picture
              </span>
              <span className="block">is visible.</span>
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-row md:flex-col justify-center md:justify-start space-x-8 md:space-x-0 md:space-y-12">
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={handleCameraClick}
            >
              <Camera className="w-24 h-24 text-gray-800 mb-3" />
              <span className="text-lg font-semibold">Take a picture</span>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={handleGalleryClick}
            >
              <ImageIcon className="w-24 h-24 text-gray-800 mb-3" />
              <span className="text-lg font-semibold">Upload from gallery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
