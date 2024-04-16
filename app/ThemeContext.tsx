import React from "react";

interface IThemeProvider {
  children: React.ReactElement;
  theme: boolean;
}

export const ThemeContext = React.createContext(false);

export const ThemeProvider: React.FC<IThemeProvider> = ({
  children,
  theme,
}) => <ThemeContext.Provider theme={theme}>{children}</ThemeContext.Provider>;
