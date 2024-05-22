import Select, { StylesConfig } from 'react-select'
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "@/context/ThemeProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useContextHeaderTab } from '@/context/HeaderTabProvider';
import { blogOptionType, blogOptions } from "@/utils/constants";
import { getEnumValueByIndex } from '@/utils/helpers';
import { BlogTabType } from '@/types/enum';

export default function BlogDetail() {
  let { slug } = useParams();
  const { changeBlogTabType } = useContextHeaderTab();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const colourStyles: StylesConfig = {
    control: (styles) => ({ ...styles,
      backgroundColor: theme == 'light' ? 'white' : '#282c34',
    }),
    option: (styles) => {
      return {
        ...styles,
        color: theme == 'light' ? '#282c34' : 'white',
        backgroundColor: theme == 'light' ? 'white' : '#282c34',
        marginTop: -4,
        marginBottom: -4,
      };
    },
    input: (styles) => ({ ...styles, color: theme == 'light' ? 'white' : '#282c34', }),
    singleValue: (styles) => ({ ...styles, color: theme == 'light' ? 'black' : 'white' }),
  };


  const onChangeTab = (index: number) => {
    changeBlogTabType(getEnumValueByIndex(BlogTabType, index) as BlogTabType);
    navigate('/blog');
  }
  const renderTabs = () => {
    return (
      isMobile ?
        <div className="my-6">
          <Select options={blogOptions} defaultValue={blogOptions[0]} styles={colourStyles} onChange={(e) => {onChangeTab(blogOptions.indexOf(e as blogOptionType))}} />
        </div> :
        <div className="flex justify-start gap-8 my-8">
        {blogOptions.map((tab, index) => (
          <button key={index} className="text-base font-light hover:text-blue-500" onClick={()=>{
            onChangeTab(index);
          }}>
            {tab.label}
          </button>
        ))}
      </div>
    );
  }

  const renderBlogDetail = () => {
    return (
      <div className=" md:px-14 px-4 md:py-10 py-4 border border-current">
        <div>Now showing post {slug}</div>
      </div>
    );
  }

  return (
    <div className="md:px-5">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {renderTabs()}
        {renderBlogDetail()}
      </div>
      <div className="mt-16 border-b border-current"></div>
    </div>
  );
}