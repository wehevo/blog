import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

interface Props {
  type: string;
  name: string;
}

export default function SearchInput({type, name}: Props) {
  return (
    <div className="relative h-full flex">
      <StyledInput
        type={type}
        name={name}
        placeholder="Search"
        required
        className="md:mb-0 mb-4 w-full h-full bg-transparent px-2 focus:border-b border-blue-400"
      />
      <button className=" mr-2 top-4"><CiSearch size={20}/></button>
    </div>
  );
}

const StyledInput = styled.input`
  &:focus {
    outline: none;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 500px ${({ theme }) => theme.backgroundColor}
      inset !important;
    box-shadow: 0 0 0 500px ${({ theme }) => theme.backgroundColor} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.textColor};
  }
  color: ${({ theme }) => theme.textColor};
`;
