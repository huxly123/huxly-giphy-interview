"use client";
import { useCallback, useEffect, useState } from "react";

// custom components
import GifsSection from "@/components/GifsSection";
import GifSearch from "@/components/GifSearch";
import ThemeSetter from "@/components/ThemeSetter";

// utils import
import { getSearchedGifs, getTrendingGifs } from "@/utils/gifs";

// types import
import { IGifs, TTheme } from "@/types/gifs.types";

export default function Home() {
  const [trendingGifs, setTrendingGifs] = useState<IGifs[]>();
  const [gifSearch, setGifSearch] = useState("");
  const [searchedGifs, setSearchedGifs] = useState<IGifs[]>([]);
  const [theme, setTheme] = useState<TTheme>("LIGHT");
  const isLightTheme = theme === "LIGHT";
  const [offSet, setOffset] = useState(1);

  // change the input value
  const handleGifSearch = (value: string) => {
    setGifSearch(value);
  };

  // to change the theme value
  const handleThemeChange = (value: TTheme) => {
    setTheme(value);
  };

  // change offset value
  const handleOffsetChange = () => {
    setOffset((prev) => prev + 1);
  };
  // call the trending api
  const getTrending = useCallback(async () => {
    const trending = await getTrendingGifs(20, offSet);
    if (offSet === 1) {
      setTrendingGifs(trending);
    } else {
      setTrendingGifs((prev) => [...(prev as IGifs[]), ...trending]);
    }
  }, [offSet]);

  // call the search api
  const getSearched = useCallback(async () => {
    const searched = await getSearchedGifs(gifSearch, offSet);
    if (offSet === 1) {
      setSearchedGifs(searched);
    } else {
      setTrendingGifs((prev) => [...(prev as IGifs[]), ...searched]);
    }
  }, [gifSearch, offSet]);

  // get trending useeffect
  useEffect(() => {
    void getTrending();
  }, [getTrending]);

  // get searched useeffect
  useEffect(() => {
    if (gifSearch.length > 0) {
      getSearched();
      setOffset(1);
    } else {
      setSearchedGifs([]);
      setOffset(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gifSearch]);

  return (
    <main
      className={`w-[100vw] h-[100vh] px-10 ${
        isLightTheme ? "bg-white" : "bg-black"
      }`}
    >
      <section className="flex items-center gap-10">
        <GifSearch gifSearch={gifSearch} handleGifSearch={handleGifSearch} />
        <ThemeSetter theme={theme} handleThemeChange={handleThemeChange} />
      </section>
      <GifsSection
        gifsData={gifSearch.length > 0 ? searchedGifs : trendingGifs}
        handleOffsetChange={handleOffsetChange}
      />
    </main>
  );
}
