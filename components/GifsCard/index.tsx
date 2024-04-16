import React, { useState } from "react";
import Image from "next/image";

interface IGifsCard {
  url: string;
  title: string;
  width: number;
  height: number;
  avatarUrl: string;
}

const GifsCard: React.FC<IGifsCard> = ({
  url,
  title,
  width,
  height,
  avatarUrl,
}) => {
  const [isGifHovered, setIsGifHovered] = useState(false);
  return (
    <div
      className="relative max-w-max object-cover"
      style={{
        width: "calc(33.33%-10px)",
      }}
    >
      {avatarUrl && (
        <Image
          src={url}
          alt={title}
          width={width}
          height={height}
          onMouseOver={() => {
            setIsGifHovered(true);
          }}
          onMouseLeave={() => {
            setIsGifHovered(false);
          }}
          className="rounded-xl h-auto w-full"
        />
      )}
      {isGifHovered && (
        <div className="absolute bottom-2 left-0 flex justify-between items-center w-full px-2">
          <Image src={avatarUrl} alt="user" width={24} height={24} />
          <p className="text-black font-normal">{title}</p>
        </div>
      )}
    </div>
  );
};

export default GifsCard;
