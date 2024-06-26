import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeProvider";
import { styled } from "styled-components";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import ToggleSwitch from "../UI/ToggleSwitch";
import { useContextHeaderTab } from "@/context/HeaderTabProvider";
import { TabType } from "@/types/enum";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const Desktop = ({ children }: any) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }: any) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }: any) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }: any) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

const Header = () => {
  const navigate = useNavigate();
  const { theme, onChangeTheme } = useContext(ThemeContext);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [cookies, setCookie] = useCookies(["isAuthenticated"]);

  const checkAuth = () => {
    if (cookies.isAuthenticated === "success") {
      return true;
    } else {
      return false;
    }
  }

  const onToggleMenu = () => setIsOpenMenu(!isOpenMenu);
  const onNavigate = (path: string) => {
    navigate(path);
    setIsOpenMenu(false);
  };
  const {changeTabType} = useContextHeaderTab();

  const onChangeTab = (tabType: TabType) => {
    changeTabType(tabType);
    setIsOpenMenu(false);
    onNavigate("/blog")
  }

  return (
    <Background>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-2">
        <nav className="flex items-center justify-between min-h-16">
          <Link
            to="/blog"
            className="router-link-active router-link-exact-active font-bold text-xl italic tracking-wide"
          >
            <span>WEHE</span>
            <span className="text-gray-500">VO</span>
          </Link>
          <Default>
            <ul className="flex items-center gap-5 font-semibold">
              <li>
                {!checkAuth() ? <button
                  onClick={() => {
                    navigate("/blog/login");
                  }}
                  className="py-3 block"
                >
                  Login
                </button> :
                <button
                  onClick={() => {
                    navigate("/blog/dashboard");
                  }}
                  className="py-3 block"
                >
                  Dashboard
                </button>}
              </li>
              <li>
                <Link to="/blog/resume" className="py-3 block">
                  Résumé
                </Link>
              </li>
              <li>
                <Link
                  to="https://github.com/wehevo"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="py-3 block"
                >
                  {"GitHub"}
                </Link>
              </li>
              <li>
                <ToggleSwitch
                  switchState={theme == "light"}
                  onChangeHandler={onChangeTheme}
                />
              </li>
            </ul>
          </Default>
          <Mobile>
            <div className="flex-1 flex justify-end items-center gap-3">
              <ToggleSwitch
                switchState={theme == "light"}
                onChangeHandler={onChangeTheme}
              />
              <button onClick={onToggleMenu}>
                {isOpenMenu ? <IoClose size={30} /> : <IoIosMenu size={30} />}
              </button>
            </div>
          </Mobile>
        </nav>
      </div>
      <Mobile>
        <MenuList className=" shadow-md" isopen={isOpenMenu}>
          {!checkAuth() ? <button className="w-full" onClick={() => onNavigate("/blog/login")}>
            Login
          </button> :
          <button className="w-full" onClick={() => onNavigate("/blog/dashboard")}>
            Dashboard
          </button>}
          <button onClick={()=>{onChangeTab(TabType.Home)}} className="w-full">Home</button>
          <button onClick={()=>{onChangeTab(TabType.About)}} className="w-full">About</button>
          <button onClick={()=>{onChangeTab(TabType.MyBlog)}} className="w-full">My Blog</button>
          <button onClick={()=>{onChangeTab(TabType.Contact)}} className="w-full">Contact</button>
        </MenuList>
      </Mobile>
    </Background>
  );
};

const Background = styled.header`
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  top: 0px;
  position: sticky;
  z-index: 50;
  background: ${({ theme }) => theme.backgroundColor};
`;

const MenuList = styled.div<{ isopen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  position: absolute;
  background: ${({ theme }) => theme.backgroundColor};
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  width: 100%;
  padding: 1rem;
  z-index: 40;
  top: 1;
  transform: scaleY(${({ isopen }) => (isopen ? "1" : "0")});
  transform-origin: top;
  transition: transform 0.3s ease-in-out;
`;

export default Header;
