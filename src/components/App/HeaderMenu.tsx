import { useContextHeaderTab } from "@/context/HeaderTabProvider";
import { TabType } from "@/types/enum";
import { styled } from "styled-components";
import SearchInput from "@/components/UI/SearchInput";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

export default function HeaderMenu() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { tabType, changeTabType } = useContextHeaderTab();
  const navigate = useNavigate();
  const renderTitle = () => {
    return(
      <>
        <p className="text-center lg:text-2xl lg:tracking-heavist text-base tracking-heavy font-light">
          EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.
        </p>
        <p className="font-fair lg:text-8.25xl lg:leading-relaxed text-7xl text-center">
          Train of Thought
        </p>
      </>
    );
  }
  const renderMenuBar = () => {
    return (
      <div className="px-5 my-6">
        <div className="border-y border-current">
          <div className="flex mx-auto max-w-5xl">
            <div className="flex-1 grid grid-cols-5">
              <StyledTab
                onClick={() => {
                  changeTabType(TabType.Home);
                  navigate('/blog');
                }}
              >
                Home
              </StyledTab>
              <StyledTab
                onClick={() => {
                  changeTabType(TabType.About);
                  navigate('/blog');
                }}
              >
                About
              </StyledTab>
              <StyledTab
                onClick={() => {
                  changeTabType(TabType.MyBlog);
                  navigate('/blog');
                }}
              >
                My Blog
              </StyledTab>
              <StyledTab
                onClick={() => {
                  changeTabType(TabType.Contact);
                  navigate('/blog');
                }}
              >
                Contact
              </StyledTab>
              <div className="border-l border-current">
                <SearchInput type="text" name="search"/>
              </div>
            </div>
            <div className="flex items-center border-x border-current px-2">
              <Link to={"https://www.facebook.com/Wehevoo/"} target="_blank"><FaFacebookF size={20} className="mx-2 cursor-pointer" /></Link>
              <FaInstagram size={20} className="mx-2 cursor-pointer" />
              <FaXTwitter size={20} className="mx-2 cursor-pointer" />
              <FaPinterestP size={20} className="mx-2 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="mt-10">
      {renderTitle()}
      {!isMobile && renderMenuBar()}
    </div>
  );
}

const StyledTab = styled.button`
  text-align: center;
  font-weight: 300;
  border-left: 1px solid;
  padding: 14px 0 14px;
`;