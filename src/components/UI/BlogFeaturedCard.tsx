import styled from "styled-components";

// interface Props {
//   switchState: boolean;
//   onChangeHandler?: () => void;
// }

export default function BlogFeaturedCard() {
  const title = "Back to Fiction: What I'm Reading This Summer";
  return (
    <div className="px-4">
      <Container>
        <TopTitle className="text-xl font-light tracking-heavier lg:py-4 lg:px-12 py-2 px-6">
          FEATURED POST
        </TopTitle>
        <img
          src="https://static.wixstatic.com/media/c22c23_89024a2cd2e943a6b89d99404958e3bb~mv2.jpg/v1/fill/w_940,h_529,fp_0.50_0.50,q_90,enc_auto/c22c23_89024a2cd2e943a6b89d99404958e3bb~mv2.jpg"
          className="aspect-video w-full object-cover"
          alt="post-image"
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
