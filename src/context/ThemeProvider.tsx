import useTheme from "@/hooks/useTheme";
import React, { ReactNode } from "react";
import { darkTheme, lightTheme } from "@/styles/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

type Props = {
  children: ReactNode;
};

const defaultValue = {
  theme: "light",
  onChangeTheme: () => {},
};

export const ThemeContext = React.createContext(defaultValue);

function ThemeProvider({ children }: Props) {
  const themeProps = useTheme();

  return (
    <ThemeContext.Provider value={themeProps}>
      <StyledThemeProvider theme={themeProps.theme === "light" ? lightTheme : darkTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;