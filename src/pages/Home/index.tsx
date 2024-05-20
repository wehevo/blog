import "./index.styles.scss";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import BlogFeaturedCard from "@/components/UI/BlogFeaturedCard";
import ShapeButton, { ShapeType } from "@/components/UI/ShapeButton";
import BlogCard from "@/components/UI/BlogCard";
import ArrowUpperIcon from "@/assets/images/svg/ArrowUpperIcon";
import CustomInput from "@/components/UI/CustomInput";
import CustomTextarea from "@/components/UI/CustomTextarea";
import { useState } from "react";
import About from "./About";
import MyBlog from "./MyBlog";
import {
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";

enum TabType {
  Home = "Home",
  About = "About",
  MyBlog = "My Blog",
  Contact = "Contact",
  Search = "Search"
}

const HomePage = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [cookies, setCookie] = useCookies(["isAuthenticated"]);
  const [renderTabType, setRenderTabType] = useState<TabType>(TabType.Home);

  const onScrollTop = () => {
    window.scrollTo(0, 0);
  };

  const onLogin = () => {
    navigate("/blog/login");
  };
  const onLogout = () => {
    setCookie("isAuthenticated", "failed");
  };
  const onDashboard = () => {
    navigate("/blog/dashboard");
  };

  const renderHeader = () => {
    return (
      <>
        <p className="text-center lg:text-2xl lg:tracking-heavist text-base tracking-heavy font-light">
          EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.
        </p>
        <p className="font-fair lg:text-8.25xl lg:leading-relaxed text-7xl text-center">
          Train of Thought
        </p>
      </>
    );
  };
  const renderMenuBar = () => {
    return (
      <div className="w-screen px-5 my-6">
        <div className="border-y border-current">
          <div className="flex mx-auto max-w-5xl">
            <div className="flex-1 grid grid-cols-5">
              <StyledTab
                onClick={() => {
                  setRenderTabType(TabType.Home);
                }}
              >
                Home
              </StyledTab>
              <StyledTab
                onClick={() => {
                  setRenderTabType(TabType.About);
                }}
              >
                About
              </StyledTab>
              <StyledTab
                onClick={() => {
                  setRenderTabType(TabType.MyBlog);
                }}
              >
                My Blog
              </StyledTab>
              <StyledTab href="#contact">Contact</StyledTab>
              <StyledTab>Search</StyledTab>
            </div>
            <div className="flex items-center border-x border-current px-2">
              <FaFacebookF size={20} className="mx-2 cursor-pointer" />
              <FaInstagram size={20} className="mx-2 cursor-pointer" />
              <FaXTwitter size={20} className="mx-2 cursor-pointer" />
              <FaPinterestP size={20} className="mx-2 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSubscribe = () => {
    return (
      <div className="w-screen md:px-5">
        <div className="flex flex-col md:flex-row border-y border-current lg:mt-3 lg:py-14 py-9">
          <p className="flex-1 font-fair text-3xl text-center my-auto">
            Never Miss a New Post.
          </p>
          <div className="flex flex-1 md:flex-row flex-col justify-center md:items-end items-center gap-3 lg:mt-0 mt-10">
            <CustomInput label="Enter your email *" type="email" name="email" />
            <ShapeButton name={"Subscribe"} />
          </div>
        </div>
      </div>
    );
  };

  const renderBody = () => {
    return (
      <div className="w-screen md:px-5">
        <div className="flex md:flex-row flex-col border-b border-current ">
          <div className="md:w-[65%] w-full md:border-r md:border-current px-4 pt-14 md:pb-14 my-4">
            <div className="mx-auto max-w-xl ">
              <p className="text-start lg:text-2xl lg:tracking-heavist text-lg tracking-heavy font-light pb-14">
                TRAIN OF THOUGHT
              </p>
              <div className="flex flex-col gap-8 mb-8">
                <BlogCard />
                <BlogCard
                  src={
                    "https://static.wixstatic.com/media/c22c23_5ab44dfe10f84b5e90e19db16bd06ae3~mv2.png/v1/fill/w_740,h_416,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_5ab44dfe10f84b5e90e19db16bd06ae3~mv2.png"
                  }
                />
                <BlogCard
                  src={
                    "https://static.wixstatic.com/media/c22c23_5a6f262789ea450393f4b3c6bc3247df~mv2.jpg/v1/fill/w_740,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_5a6f262789ea450393f4b3c6bc3247df~mv2.jpg"
                  }
                />
                <BlogCard
                  src={
                    "https://static.wixstatic.com/media/c22c23_ea4c50693f8f473b9ba056fc36032ae4~mv2.jpg/v1/fill/w_740,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_ea4c50693f8f473b9ba056fc36032ae4~mv2.jpg"
                  }
                />
                <BlogCard
                  src={
                    "https://static.wixstatic.com/media/c22c23_e3b5cb121db549fdbb1590f51d378b8c~mv2.png/v1/fill/w_740,h_416,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_e3b5cb121db549fdbb1590f51d378b8c~mv2.png"
                  }
                />
                <BlogCard
                  src={
                    "https://static.wixstatic.com/media/c22c23_89024a2cd2e943a6b89d99404958e3bb~mv2.jpg/v1/fill/w_940,h_529,fp_0.50_0.50,q_90,enc_auto/c22c23_89024a2cd2e943a6b89d99404958e3bb~mv2.jpg"
                  }
                />
                <BlogCard
                  src={
                    "https://static.wixstatic.com/media/c22c23_a31ea2b671fe4cddbbb5728c9310c756~mv2_d_5659_3773_s_4_2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_a31ea2b671fe4cddbbb5728c9310c756~mv2_d_5659_3773_s_4_2.jpg"
                  }
                />
              </div>
              <div className="flex w-full justify-center">
                <ShapeButton name={"More Posts"} />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="mx-auto lg:max-w-80 max-w-xl md:px-2 px-5 md:pt-14 pt-6 my-4">
              <p className=" text-start lg:text-2xl lg:tracking-heavist text-lg tracking-heavy font-light pb-14">
                ABOUT ME
              </p>
              <img
                src={require("@/assets/images/png/me1.jpg")}
                alt="about-me"
                className="aspect-video object-cover border border-current bg-blue-300"
              />
              <p className=" text-base leading-7 font-light mt-8">
                I am 10-year experienced senior developer proficient in managing
                programming operations with exceptional team supervision,
                project coordination, and analytical problem-solving skills.
                <br />I optimizes resources used to achieve challenging targets.
                <br />I am diplomatic in resolving disputes and coordinating
                diverse teams.
              </p>
              <p className="py-12 border-b border-current">{"Read More >>"}</p>
              <p className=" text-start lg:text-2xl lg:tracking-heavist text-lg tracking-heavy font-light py-10">
                FOLLOW ME
              </p>
              <div className="grid grid-cols-2 gap-3">
                <img
                  src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Personal%20Blog/01.jpg"
                  alt="follow-image"
                />
                <img
                  src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Personal%20Blog/02.jpg"
                  alt="follow-image"
                />
                <img
                  src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Personal%20Blog/03.jpg"
                  alt="follow-image"
                />
                <img
                  src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Personal%20Blog/04.jpg"
                  alt="follow-image"
                />
                <img
                  src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Personal%20Blog/05.jpg"
                  alt="follow-image"
                />
                <img
                  src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Personal%20Blog/06.jpg"
                  alt="follow-image"
                />
                <img
                  src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Personal%20Blog/07.jpg"
                  alt="follow-image"
                />
                <img
                  src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Personal%20Blog/08.jpg"
                  alt="follow-image"
                />
                <img
                  src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Personal%20Blog/09.jpg"
                  alt="follow-image"
                />
                <img
                  src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Personal%20Blog/10.jpg"
                  alt="follow-image"
                />
              </div>
              <div className="my-10 border-y border-current py-4 px-10 flex justify-between items-center">
                <FaFacebookF size={22} className="mx-2 cursor-pointer" />
                <FaInstagram size={22} className="mx-2 cursor-pointer" />
                <FaXTwitter size={22} className="mx-2 cursor-pointer" />
                <FaPinterestP size={22} className="mx-2 cursor-pointer" />
              </div>
              <div className="pb-14 border-b border-current">
                <p className=" text-start lg:text-2xl lg:tracking-heavist text-lg tracking-heavy font-light pt-4 pb-12">
                  SUBSCRIBE
                </p>
                <div className="flex flex-col gap-5">
                  <label htmlFor="user_email" className=" text-gray-400">
                    Enter your email *
                  </label>
                  <StyledInput
                    type="email"
                    name="email"
                    placeholder=""
                    required
                    className="md:mb-0 mb-4 bg-transparent border w-full border-current px-0 py-3 pl-3 focus:border-blue-600 focus:outline-none"
                  />
                  <ShapeButton
                    name={"Subscribe"}
                    shapeType={ShapeType.FullWidth}
                  />
                </div>
              </div>
              <div className="py-12">
                <p className=" text-start lg:text-2xl lg:tracking-heavist text-lg tracking-heavy font-light pb-12">
                  MY PICK OF THE MONTH
                </p>
                <img
                  src={require("@/assets/images/png/book-pick.png")}
                  alt="about-me"
                  className="w-full aspect-video object-cover border border-current bg-blue-300"
                />
                <p className=" text-base leading-7 font-light mt-8">
                  {`"Where the Crawdads Sing" is a stunning debut novel by Delia Owens that blends elements of mystery, romance, and coming-of-age stories. Set in the marshes of North Carolina, it tells the tale of Kya Clark, a young girl who grows up isolated from society and becomes known as the "Marsh Girl."`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContact = () => {
    return (
      <div
        id="contact"
        className="w-full flex flex-col justify-center items-center mt-7"
      >
        <button onClick={onScrollTop}>
          <ArrowUpperIcon />
        </button>
        <p className="font-fair md:text-4xl text-3xl text-center">
          Drop Me a Line, Let Me Know What You Think
        </p>
        <div className="max-w-[43rem] mt-12 flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-7">
            <CustomInput label="First Name" type="text" name="first-name" />
            <CustomInput label="Last Name" type="text" name="last-name" />
          </div>
          <CustomInput label="Email *" type="email" name="email" />
          <CustomTextarea label="Message..." name="message" />
          <div className="md:w-1/3 w-1/2 mx-auto">
            <ShapeButton name={"Submit"} shapeType={ShapeType.FullWidth} />
          </div>
        </div>
        <div className="mb-12"></div>
      </div>
    );
  };
  const renderHome = () => {
    return (
      <div>
        <BlogFeaturedCard />
        {renderSubscribe()}
        {renderBody()}
      </div>
    );
  };
  return (
    <div className="column_flex_center mt-10 mb-2">
      {renderHeader()}
      {!isMobile && renderMenuBar()}
      <TransitionGroup>
        <CSSTransition
          key={renderTabType}
          timeout={500}
          classNames="fade"
        >
          {renderTabType === TabType.Home ? (
            renderHome()
          ) : renderTabType === TabType.About ? (
            <About />
          ) : renderTabType === TabType.MyBlog ? (
            <MyBlog />
          ) : renderTabType === TabType.Contact ? (
            <div>Search</div>
          ) : (
            <></>
          )}
        </CSSTransition>
      </TransitionGroup>
      {renderContact()}
    </div>
  );
};
export default HomePage;

const StyledTab = styled.a`
  text-align: center;
  font-weight: 300;
  border-left: 1px solid;
  padding: 14px 0 14px;
  cursor: pointer;
`;

const StyledInput = styled.input`
  &:focus {
    outline: none;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 500px ${({ theme }) => theme.backgroundColor}
      inset !important;
    box-shadow: 0 0 0 500px ${({ theme }) => theme.backgroundColor} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.textColor};
  }
  color: ${({ theme }) => theme.textColor};
`;
