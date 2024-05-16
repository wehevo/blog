import "./index.styles.scss";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { styled } from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaHome,
  FaBlogger,
  FaSearch
} from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import BlogFeaturedCard from "@/components/UI/BlogFeaturedCard";
import MediaQuery, { useMediaQuery } from "react-responsive";

const HomePage = () => {
  const [cookies, setCookie] = useCookies(["isAuthenticated"]);
  const navigate = useNavigate();

  const checkAuth = () => {
    if (cookies.isAuthenticated === "success") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {/* <h1>Home Page</h1>
      <div className="font-medium">
        Anyone can access it, regardless of whether they are logged in or not!
      </div>
      <br />
      {!checkAuth() ? (
        <button
          onClick={() => {
            navigate("/blog/login");
          }}
        >
          Login Page
        </button>
      ) : (
        <div>
          <button
            onClick={() => {
              setCookie("isAuthenticated", 'failed');
            }}
          >
            Logout
          </button>
          <button
            onClick={() => {
              navigate("/blog/dashboard");
            }}
          >
            Dashboard
          </button>
        </div>
      )} */}
      <div className="column_flex_center mt-10 mb-2">
        <p className="text-center lg:text-xl lg:tracking-heavist text-base tracking-heavy font-light">
          EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.
        </p>
        <p className="font-fair lg:text-8.25xl lg:leading-relaxed text-7xl text-center">
          Train of Thought
        </p>
        <div className="border-y border-current w-[98vw] my-6">
          <div className="flex mx-auto max-w-5xl">
            <div className="flex-1 grid grid-cols-5">
              <StyledTab>Home</StyledTab>
              <StyledTab>About</StyledTab>
              <StyledTab>My Blog</StyledTab>
              <StyledTab>Contact</StyledTab>
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
        <BlogFeaturedCard />
      </div>
    </>
  );
};
export default HomePage;

const StyledTab = styled.div`
  text-align: center;
  font-weight: 300;
  border-left: 1px solid;
  padding: 14px 0 14px;
  cursor: pointer;
`;
