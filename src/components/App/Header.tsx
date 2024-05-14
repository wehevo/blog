import { useContext } from "react";
import ToggleSwitch from "../UI/toggleSwitch";
import { ThemeContext } from "@/context/ThemeProvider";
import { styled } from "styled-components";

const Header = () => {
  const { theme, onChangeTheme } = useContext(ThemeContext);
  return (
    <Background>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-2">
        <nav className="flex items-center justify-between">
          <a href="/blog" className="router-link-active router-link-exact-active font-bold text-xl italic tracking-wide">
            <span>WEHE</span>
            <span className="text-gray-500">VO</span>
          </a>
          <ul className="flex items-center gap-5 font-semibold">
            <li>
              <a href="/blog/login" className="py-3 block">Login</a>
            </li>
            <li>
              <a href="/blog/resume" className="py-3 block">Résumé</a>
            </li>
            <li>
              <a href="https://github.com/wehevo" rel="noopener noreferrer" target="_blank" className="py-3 block"> GitHub </a>
            </li>
            <li>
              <ToggleSwitch switchState={theme == 'light'} onChangeHandler={onChangeTheme} />
            </li>
          </ul>
        </nav>
      </div>
    </Background>
  )
}

const Background = styled.header`
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-bottom-width: 1px;
  top: 0px;
  position: sticky;
  z-index: 50;
  background: ${({ theme }) => theme.backgroundColor};
`;

export default Header;