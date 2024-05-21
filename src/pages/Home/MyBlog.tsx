import BlogCard from "@/components/UI/BlogCard";
import Select, { StylesConfig } from 'react-select'
import { Direction } from "@/types/enum";
import { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "@/context/ThemeProvider";

type optionType = {
  value: string;
  label: string;
}
const options: optionType[] = [
  { value: 'all-posts', label: 'All Posts' },
  { value: 'travel', label: 'Travel' },
  { value: 'my-top', label: 'My Top 5' },
  { value: 'art-calture', label: 'Art & Calture' }
]

export default function MyBlog() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [tab, setTab] = useState<number>(0);
  const { theme } = useContext(ThemeContext);
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
  return (
    <div className="w-screen md:px-5">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {isMobile ?
          <div className="my-6">
            <Select options={options} defaultValue={options[0]} styles={colourStyles} onChange={(e) => {setTab(options.indexOf(e as optionType))}} />
          </div> :
          <div className="flex justify-start gap-8 mt-8 mb-12">
          {options.map((tab, index) => (
            <button key={index} className="text-base font-light hover:text-blue-500" onClick={()=>{setTab(index)}}>
              {tab.label}
            </button>
          ))}
        </div>}
        { tab === 0 &&
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-7">
            <BlogCard direction={Direction.Vertical}/>
            <BlogCard direction={Direction.Vertical}/>
            <BlogCard direction={Direction.Vertical}/>
            <BlogCard direction={Direction.Vertical}/>
          </div>
        }
        { tab === 1 &&
          <div className="grid grid-cols-1 gap-7">
            <BlogCard direction={Direction.Horizontal}/>
            <BlogCard direction={Direction.Horizontal}/>
            <BlogCard direction={Direction.Horizontal}/>
          </div>
        }
        { tab === 2 &&
          <div className="grid grid-cols-1 gap-7">
            <BlogCard direction={Direction.Horizontal}/>
            <BlogCard direction={Direction.Horizontal}/>
            <BlogCard direction={Direction.Horizontal}/>
          </div>
        }
        { tab === 3 &&
          <div className="grid grid-cols-1 gap-7">
            <BlogCard direction={Direction.Horizontal}/>
            <BlogCard direction={Direction.Horizontal}/>
            <BlogCard direction={Direction.Horizontal}/>
          </div>
        }
      </div>
      <div className="mt-16 border-b border-current"></div>
    </div>
  );
}