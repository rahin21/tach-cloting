import React from "react";
import Image from "next/image";
import Script from "next/script";
import mainLogo from "/public/0.webp";

function VideoSection() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Image src={mainLogo} alt="Logo" />
      <p>
        Tach clothing is both simple and complex, with a strong timeless appeal.
      </p>
      <p>
        We take inspiration from the delicacy of vintage clothing and look to
        make it fresh again.
      </p>
      <p>
        Every piece is carefully thought and locally made in Uruguay, in a fair
        trade environment.
      </p>
      <div
      className="relative w-full h-0 max-w-[800px] lg:pb-[36.25%] pb-[56.25%] mt-5 lg:mt-0"
      >
        <iframe
          src="https://player.vimeo.com/video/998982116?badge=0&autopause=0&player_id=0&app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write;"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="beetlebugs - Nick Leng"
        ></iframe>
      </div>
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
    </div>
  );
}

export default VideoSection;
