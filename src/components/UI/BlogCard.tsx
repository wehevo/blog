import styled from "styled-components";
import { PiSunBold } from "react-icons/pi";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

interface Props {
  src?: string;
}

export default function BlogCard({src}: Props) {
  const default_img = "https://images.unsplash.com/photo-1715498114790-c06348e610b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <StyledBack className="flex">
      <img
        src={src ?? default_img}
        className="w-5/12 object-cover"
        alt=""
      />
      <div className="py-6 sm:pl-6 pl-3 sm:pr-10 pr-3 flex-1 flex flex-col justify-between overflow-hidden">
        <div>
          <p className="mb-5 text-sm">
            Wehevo C • <time>18 May 2024</time>
          </p>
          <TextTitle className="">
            Do Not Leave Tokyo Before Eating This Ramen
          </TextTitle>
          <TextDescription className="">
            Create a blog post subtitle that summarizes your post in a few short,
            punchy sentences and entices your audience to continue reading punchy
          </TextDescription>
        </div>
        <div className="border-t pt-4 flex justify-between items-center">
          <div className="flex gap-2">
            <p className="text-xs">0 views</p>
            <p className="text-xs">0 comments</p>
          </div>
          <div className="flex items-center">
            <p className="text-xs mr-1">10</p>
            <CiHeart size={20} color={'red'}/>
          </div>
        </div>
      </div>
    </StyledBack>
  );
}

const StyledBack = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 36rem;
  min-height: 22rem;
  overflow: hidden;
  background: ${({ theme }) => theme.backgroundColor};
  border-width: 1px;
  border-color: ${({ theme }) => theme.borderColor};
`;

const TextTitle = styled.p`
  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 6rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const TextDescription = styled.p`
  font-size: 1rem/* 16px */;
  line-height: 1.5rem/* 24px */;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 4.5rem;
  font-weight: 300;
`;

const DarkIcon = styled(MdOutlineDarkMode)`
  position: absolute;
  top: 18%;
  left: 8px;
  color: white;
`;
