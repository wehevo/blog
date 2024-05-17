import styled from "styled-components";
import { PiSunBold } from "react-icons/pi";
import { MdOutlineDarkMode } from "react-icons/md";

// interface Props {
//   switchState: boolean;
//   onChangeHandler?: () => void;
// }

export default function BlogFeaturedCard() {
  const title = "Back to Fiction: What I'm Reading This Summer";
  return (
    <Container>
      <TopTitle className="text-xl font-light tracking-heavier lg:py-4 lg:px-12 py-2 px-6">
        FEATURED POST
      </TopTitle>
      <img
        src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        className="aspect-video w-full object-cover"
        alt=""
      />
      <div className="p-8">
        <p className="mb-5 text-sm">
          Wehevo C • <time>18 May 2024</time>
        </p>
        <p className="text-3xl font-medium mb-3">{title}</p>
        <p className="mt-1 text-base font-light">
          Create a blog post subtitle that summarizes your post in a few short,
          punchy sentences and entices your audience to continue reading....
        </p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  margin-bottom: 2rem;
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
