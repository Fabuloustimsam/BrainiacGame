import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-purple-700 w-full flex items-center justify-center py-10 px-4">
      <Image
        alt="Brainiac logo"
        src="/whitebrainiac.svg"
        width={468}
        height={108}
        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
      />
    </footer>
  );
}
