import React, { useState } from "react";

interface IGifSearch {
  gifSearch: string;
  handleGifSearch: (val: string) => void;
}

const GifSearch: React.FC<IGifSearch> = ({ gifSearch, handleGifSearch }) => {
  return (
    <div className="my-10 flex">
      <input
        value={gifSearch}
        placeholder="Search For Gif's"
        className="w-[300px] outline-none h-10 border border-green-500 rounded-xl px-4"
        onChange={(e) => handleGifSearch(e.target.value)}
      />
    </div>
  );
};

export default GifSearch;
