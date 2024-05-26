import { defaultImage } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  id: string;
  title: string;
  description: string;
  image?: string;
  date?: string;
}

interface ContainerProps {
  data: Props;
}

export default function BlogFeaturedCard({data}: ContainerProps) {
  const navigate = useNavigate();
  const onDetails = () => {
    navigate(`/blog/post/${data.id}`);
  }
  return (
    <div className="px-4">
      <Container>
        <TopTitle className="text-xl font-light tracking-heavier lg:py-4 lg:px-12 py-2 px-6">
          FEATURED POST
        </TopTitle>
        <img
          src={data.image ? data.image : defaultImage}
          className="aspect-video w-full object-cover"
          alt="post-image"
        />
        <div className="p-8">
          <p className="mb-5 text-sm">
            Wehevo C • <time>{data.date}</time>
          </p>
          <p onClick={onDetails} className="text-3xl font-medium mb-3 cursor-pointer hover:text-blue-400">{data.title}</p>
          <p className="mt-1 text-base font-light">
            {data.description}
          </p>
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  margin-bottom: 3.5rem;
  max-width: 61rem;
  // overflow: hidden;
  background: ${({ theme }) => theme.backgroundColor};
  border-width: 1px;
  border-color: ${({ theme }) => theme.borderColor};
`;

const TopTitle = styled.p`
  position: absolute;
  top: -2rem;
  left: -1px;
  z-index: 1;
  border-width: 1px;
  background: ${({ theme }) => theme.backgroundColor};
  border-color: ${({ theme }) => theme.borderColor};
`;
