import BlogCard from "@/components/UI/BlogCard";
import Select, { StylesConfig } from "react-select";
import { BlogTabType, Direction } from "@/types/enum";
import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "@/context/ThemeProvider";
import { useContextHeaderTab } from "@/context/HeaderTabProvider";
import { blogOptionType, blogOptions } from "@/utils/constants";
import { getEnumValueByIndex } from "@/utils/helpers";

export default function MyBlog() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { blogTabType, changeBlogTabType } = useContextHeaderTab();
  const [tab, setTab] = useState<number>(0);
  const { theme } = useContext(ThemeContext);
  const [currentOption, setCurrentOption] = useState<blogOptionType>(blogOptions[0]);

  useEffect(() => {
    const tabIndex = Object.values(BlogTabType).indexOf(blogTabType);
    setTab(tabIndex);
    setCurrentOption(blogOptions[tabIndex]);
  }, []);

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
    setTab(index);
    setCurrentOption(blogOptions[index]);
  };
  const renderTabs = () => {
    return isMobile ? (
      <div className="my-6">
        <Select
          options={blogOptions}
          defaultValue={blogOptions[0]}
          value={currentOption}
          styles={colourStyles}
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

  const renderBlogList = () => {
    return tab === 0 ? (
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-7">
        <BlogCard direction={Direction.Vertical} />
        <BlogCard direction={Direction.Vertical} />
        <BlogCard direction={Direction.Vertical} />
        <BlogCard direction={Direction.Vertical} />
      </div>
    ) : tab === 1 ? (
      <div className="grid grid-cols-1 gap-7">
        <BlogCard direction={Direction.Horizontal} />
        <BlogCard direction={Direction.Horizontal} />
        <BlogCard direction={Direction.Horizontal} />
      </div>
    ) : tab === 2 ? (
      <div className="grid grid-cols-1 gap-7">tab 2</div>
    ) : (
      tab === 3 && <div className="grid grid-cols-1 gap-7">tab 3</div>
    );
  };

  return (
    <>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {renderTabs()}
        {renderBlogList()}
      </div>
      <div className="mt-16 border-b border-current"></div>
    </>
  );
}
