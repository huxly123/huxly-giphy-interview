import React from "react";

// TYPES IMPORT
import { TTheme } from "@/types/gifs.types";

interface IThemeSetter {
  theme: TTheme;
  handleThemeChange: (theme: TTheme) => void;
}

const ThemeSetter: React.FC<IThemeSetter> = ({ theme, handleThemeChange }) => {
  const isLightTheme = theme === "LIGHT";
  return (
    <div
      className={`w-[100px] h-10 rounded-xl flex justify-center items-center cursor-pointer border ${
        isLightTheme
          ? "bg-whiteborder-black text-black"
          : "bg-black border-blue-300 text-white"
      }`}
      onClick={() => {
        if (isLightTheme) {
          handleThemeChange("DARK");
        } else {
          handleThemeChange("LIGHT");
        }
      }}
    >
      <p> {isLightTheme ? "Light" : "Dark"}</p>
    </div>
  );
};

export default ThemeSetter;
