import "./index.styles.scss";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { styled } from "styled-components";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import BlogFeaturedCard from "@/components/UI/BlogFeaturedCard";
import ShapeButton, { ShapeType } from "@/components/UI/ShapeButton";
import BlogCard from "@/components/UI/BlogCard";
import ArrowUpperIcon from "@/assets/images/svg/ArrowUpperIcon";
import CustomInput from "@/components/UI/CustomInput";
import CustomTextarea from "@/components/UI/CustomTextarea";
import About from "./About";
import MyBlog from "./MyBlog";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { TabType } from "@/types/enum";
import { useContextHeaderTab } from "@/context/HeaderTabProvider";
import { LegacyRef, useEffect, useRef, useState } from "react";
import SocialCard from "@/components/UI/SocialCard";
import ShareButton from "@/components/UI/ShareButton";
import { firestore } from "@/utils/firebase";

const HomePage = () => {
  const navigate = useNavigate();
  const { tabType, changeTabType } = useContextHeaderTab();
  const [cookies, setCookie] = useCookies(["isAuthenticated"]);
  const contactRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const [featuredPost, setFeaturedPost] = useState<any>({});
  const [blogData, setBlogData] = useState<any>([]);

  const onScrollTop = () => {
    window.scrollTo(0, 0);
  };
  const onScrollContact = () => {
    if (contactRef.current == null) return;
    contactRef.current.scrollIntoView({ behavior: "smooth" });
    changeTabType(TabType.Home);
  };
  const onScrollAbout = () => {
    if (aboutRef.current == null) return;
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (tabType == TabType.Contact) {
      onScrollContact();
    } else if (tabType == TabType.About) onScrollAbout();
  }, [tabType]);

  const onLogin = () => {
    navigate("/blog/login");
  };
  const onLogout = () => {
    setCookie("isAuthenticated", "failed");
  };
  const onDashboard = () => {
    navigate("/blog/dashboard");
  };
  useEffect(() => {
    const bucket = firestore.collection("blog");
    bucket.doc("post").get().then((doc) => {
      if(doc.exists)
        setFeaturedPost({ id: doc.id, ...doc.data() });
    });
    bucket.get().then((docs) => {
      // docs.forEach((doc) => {
      //   if (doc.exists) {
      //     console.log(doc.data());
      //     console.log(doc.id);
      //   }
      // });
      const _blogData = docs.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setBlogData(_blogData);
    });
  }, []);
  const renderSubscribe = () => {
    return (
      <div className="flex flex-col md:flex-row border-y border-current lg:mt-3 lg:py-14 py-9">
        <p className="flex-1 font-fair text-3xl text-center my-auto">
          Never Miss a New Post.
        </p>
        <div className="flex flex-1 md:flex-row flex-col justify-center md:items-end items-center gap-3 lg:mt-0 mt-10">
          <CustomInput label="Enter your email *" type="email" name="email" />
          <ShapeButton name={"Subscribe"} />
        </div>
      </div>
    );
  };

  const renderBody = () => {
    return (
      <div className="flex md:flex-row flex-col border-b border-current ">
        <div className="md:w-[65%] w-full md:border-r md:border-current px-4 pt-14 md:pb-14 my-4">
          <div className="mx-auto max-w-xl ">
            <p className="text-start lg:text-2xl lg:tracking-heavist text-lg tracking-heavy font-light pb-14">
              TRAIN OF THOUGHT
            </p>
            <div className="flex flex-col gap-8 mb-8">
              {blogData.map((data: any, index: number) => (
                <BlogCard key={index} data={data} />
              ))}
            </div>
            <div className="flex w-full justify-center">
              <ShapeButton name={"More Posts"} />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="mx-auto lg:max-w-80 max-w-xl md:px-2 px-4 md:pt-14 pt-6 my-4">
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
              programming operations with exceptional team supervision, project
              coordination, and analytical problem-solving skills.
              <br />I optimizes resources used to achieve challenging targets.
              <br />I am diplomatic in resolving disputes and coordinating
              diverse teams.
            </p>
            <p
              onClick={() => {
                changeTabType(TabType.About);
              }}
              className="py-12 cursor-pointer hover:text-blue-500"
            >
              {"Read More >>"}
            </p>
            <div className="border-b border-current"></div>
            <p className=" text-start lg:text-2xl lg:tracking-heavist text-lg tracking-heavy font-light py-10">
              FOLLOW ME
            </p>
            <div className="grid grid-cols-2 gap-3">
              {Array.from({ length: 10 }).map((_, index) => (
                <SocialCard key={index} index={index + 1} />
              ))}
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
    );
  };

  const renderContact = () => {
    return (
      <div
        ref={contactRef as LegacyRef<HTMLDivElement>}
        // id="contact"
        className="w-full flex flex-col justify-center items-center mt-7 px-4"
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
      <div className="md:px-5">
        { featuredPost && <BlogFeaturedCard data={featuredPost}/> }
        {renderSubscribe()}
        {renderBody()}
      </div>
    );
  };
  return (
    <>
      <TransitionGroup>
        <CSSTransition key={tabType} timeout={500} classNames="fade">
          {tabType === TabType.Home || tabType === TabType.Contact ? (
            renderHome()
          ) : tabType === TabType.About ? (
            <div ref={aboutRef as LegacyRef<HTMLDivElement>}>
              <About />
            </div>
          ) : tabType === TabType.MyBlog ? (
            <MyBlog />
          ) : (
            <></>
          )}
        </CSSTransition>
      </TransitionGroup>
      {renderContact()}
      <ShareButton text="hello" url="https://audiomobile.xyz/vibe?id=8754" />
    </>
  );
};
export default HomePage;

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
