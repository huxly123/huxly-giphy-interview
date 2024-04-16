export interface IGifs {
  [key: string]: string | Record<string, any>;
  url: string;
  embed_url: string;
  title: string;
  images: {
    original: {
      url: string;
      height: number;
      width: number;
    };
  };
  user: {
    avatar_url: string;
  };
}

export type TTheme = "LIGHT" | "DARK";
