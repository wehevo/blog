import { styled } from "styled-components";

export default function About() {
  const title = "Hey! So Glad You're Here.";

  return (
    <div className="w-screen px-4">
      <Container>
        <img
          src={require("@/assets/images/png/me1.jpg")}
          className="aspect-video w-full object-cover"
          alt="my-profile"
        />
        <div className="p-8">
          <p className="font-fair text-4xl mb-10">{title}</p>
          <p className="text-base font-light">
            {
              "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you."
            }
          </p>
          <p className="mt-8 text-base font-light">
            {
              "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you."
            }
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
  margin-top: 2rem;
  margin-bottom: 3.5rem;
  max-width: 61rem;
  background: ${({ theme }) => theme.backgroundColor};
  border-width: 1px;
  border-color: ${({ theme }) => theme.borderColor};
`;
