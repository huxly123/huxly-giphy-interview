import { GiphyFetch } from "@giphy/js-fetch-api";

const gif = new GiphyFetch("Vfn58LtN6ZriQUQH84f3nPUlxgYaXQ9r");

export const getTrendingGifs = async (
  limit: number = 20,
  offset: number = 1
): Promise<any> => {
  // fetch  gifs
  const { data: gifs } = await gif.trending({ limit: limit, offset: offset });
  return gifs;
};

export const getSearchedGifs = async (
  search: string,
  offset: number = 1
): Promise<any> => {
  // fetch gifs
  const { data: gifs } = await gif.search(search, {
    sort: "relevant",
    lang: "es",
    limit: 20,
    offset: offset,
  });
  return gifs;
};
