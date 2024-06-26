import styled from "styled-components";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { Direction } from "@/types/enum";
import { useNavigate } from "react-router-dom";
import { defaultImage } from "@/utils/constants";

interface Props {
  id: string;
  title: string;
  description: string;
  image?: string;
  date?: string;
}

interface ContainerProps {
  direction?: Direction;
  data?: Props;
}

export default function BlogCard({data, direction = Direction.Horizontal}: ContainerProps) {
  const navigate = useNavigate();
  let title="Do Not Leave Tokyo Before Eating This Ramen";
  return (
    <StyledBack className="flex cursor-pointer" direction={direction} onClick={()=>{navigate(`/blog/post/${data?.id}`)}}>
      <StyledImage direction={direction}
        src={data?.image ?? defaultImage}
        alt="blog-image"
      />
      <div className="py-6 sm:pl-6 pl-3 sm:pr-10 pr-3 flex-1 flex flex-col justify-between overflow-hidden">
        <div>
          <p className="mb-5 text-sm">
            Wehevo C • <time>{data?.date}</time>
          </p>
          <TextTitle>{data?.title ?? title}</TextTitle>
          <TextDescription className="">
            {data?.description}
          </TextDescription>
        </div>
        {direction == Direction.Horizontal ? <div className="border-t pt-4 flex justify-between items-center">
          <div className="flex gap-2">
            <p className="text-xs">0 views</p>
            <p className="text-xs">0 comments</p>
          </div>
          <div className="flex items-center">
            <p className="text-xs mr-1">10</p>
            <CiHeart size={20} color={'red'}/>
          </div>
        </div>: <div className="h-5"></div>}
      </div>
    </StyledBack>
  );
}

const StyledBack = styled.div<{direction: Direction}>`
  flex-direction: ${(props) => props.direction == Direction.Horizontal ? 'row' : 'column'};
  margin-left: auto;
  margin-right: auto;
  // max-width: 36rem;
  min-height: 22rem;
  overflow: hidden;
  background: ${({ theme }) => theme.backgroundColor};
  border-width: 1px;
  border-color: ${({ theme }) => theme.borderColor};
`;

const StyledImage = styled.img<{direction: Direction}>`
  width: ${(props) => props.direction == Direction.Horizontal ? '42%' : '100%'};
  aspect-ratio: 16 / 9;
  object-fit: cover;
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
