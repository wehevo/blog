import styled from "styled-components";

export default function HoverButton() {
  return (
    <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
      <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <span className="relative text-black group-hover:text-white">Hover me!</span>
    </button>
  );
}

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
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
