import React, { useRef } from "react";

// custom components
import GifsGrid from "@/components/GifsCard";

// types import
import { IGifs } from "@/types/gifs.types";

interface IGifsSection {
  gifsData: IGifs[] | undefined;
  handleOffsetChange: () => void;
}

const GifsSection: React.FC<IGifsSection> = ({
  gifsData,
  handleOffsetChange,
}) => {
  const scollRef = useRef(null);

  const handleScrollContainer = (e: any) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) handleOffsetChange();
  };

  return (
    <div
      className="flex flex-wrap gap-10 h-[400px] overflow-y-scroll"
      ref={scollRef}
      onScroll={(e) => handleScrollContainer(e)}
    >
      {gifsData?.map((ele, i) => (
        <GifsGrid
          title={ele.title}
          key={`${ele.title}-${i}`}
          url={ele.images.original.url}
          width={ele.images.original.width}
          height={ele.images.original.height}
          avatarUrl={ele?.user?.avatar_url ?? ""}
        />
      ))}
    </div>
  );
};

export default GifsSection;
