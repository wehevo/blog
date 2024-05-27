import Select, { StylesConfig } from "react-select";
import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "@/context/ThemeProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useContextHeaderTab } from "@/context/HeaderTabProvider";
import { blogOptionType, blogOptions, defaultImage } from "@/utils/constants";
import { getEnumValueByIndex } from "@/utils/helpers";
import { BlogTabType } from "@/types/enum";
import { IoIosLink } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { firestore } from "@/utils/firebase";

export default function BlogDetail() {
  let { slug } = useParams();
  const { blogTabType, changeBlogTabType } = useContextHeaderTab();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { theme } = useContext(ThemeContext);
  const [postData, setPostData] = useState<any>(null);
  const navigate = useNavigate();
  const [currentOption, setCurrentOption] = useState<blogOptionType>(blogOptions[0]);

  useEffect(() => {
    const tabIndex = Object.values(BlogTabType).indexOf(blogTabType);
    setCurrentOption(blogOptions[tabIndex]);

  }, []);

  useEffect(() => {
    const bucket = firestore.collection("blog");
    bucket.doc(slug).get().then((doc) => {
      if(doc.exists)
      {
        // console.log(doc)
        setPostData({ id: doc.id, ...doc.data() });
      }
    });
  }, [])

  const colourStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      backgroundColor: theme == "light" ? "white" : "#282c34"
    }),
    option: (styles) => {
      return {
        ...styles,
        color: theme == "light" ? "#282c34" : "white",
        backgroundColor: theme == "light" ? "white" : "#282c34",
        marginTop: -4,
        marginBottom: -4
      };
    },
    input: (styles) => ({
      ...styles,
      color: theme == "light" ? "white" : "#282c34"
    }),
    singleValue: (styles) => ({
      ...styles,
      color: theme == "light" ? "black" : "white"
    })
  };

  const onChangeTab = (index: number) => {
    changeBlogTabType(getEnumValueByIndex(BlogTabType, index) as BlogTabType);
    navigate("/blog");
  };

  const renderTabs = () => {
    return isMobile ? (
      <div className="my-6">
        <Select
          options={blogOptions}
          defaultValue={blogOptions[0]}
          styles={colourStyles}
          value={currentOption}
          onChange={(e) => {
            onChangeTab(blogOptions.indexOf(e as blogOptionType));
          }}
        />
      </div>
    ) : (
      <div className="flex justify-start gap-8 my-8">
        {blogOptions.map((tab, index) => (
          <button
            key={index}
            className="text-base font-light hover:text-blue-500"
            onClick={() => {
              onChangeTab(index);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  };

  const renderBlogDetail = () => {
    return (
      <div className=" md:px-16 px-4 md:py-16 py-7 border border-current">
        <p className="mb-6 text-sm font-light">
          Wehevo C • <time>{postData.date}</time>
        </p>
        <p className="font-fair md:text-4.5xl text-3xl leading-tight mb-6">{postData.title}</p>
        <p className=" text-lg font-medium mb-6">{postData.description}</p>
        <img src={defaultImage} alt="blog-image" className=" aspect-video object-cover mb-6"/>
        {/* <p className="text-lg font-light mb-6">Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.</p>
        <p className="md:text-2xl text-xl font-bold mb-6">Create Relevant Content</p>
        <p className="text-lg font-light mb-6">Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.</p>
        <p className="text-lg font-light">Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.</p> */}
        <div className="content" dangerouslySetInnerHTML={{__html: postData.content}}></div>

        <div className="border-t border-current pt-4 md:mt-14 mt-6 flex justify-between">
          <div className="flex gap-8">
            <FaFacebookF />
            <FaXTwitter />
            <IoIosLink />
          </div>
          <p className="text-xs">Tag</p>
        </div>
      </div>
    );
  };

  return (
    <div className="md:px-5">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {renderTabs()}
        {postData && renderBlogDetail()}
      </div>
      <div className="mt-16 border-b border-current"></div>
    </div>
  );
}
