import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

interface Props {
  type: string;
  name: string;
}

export default function SearchInput({type, name}: Props) {
  return (
    <div className="relative h-full">
      <button className="absolute right-3 top-4"><CiSearch size={20}/></button>
      <StyledInput
        type={type}
        name={name}
        placeholder="Search"
        required
        className="md:mb-0 mb-4 w-full h-full bg-transparent pl-3 focus:border-b border-blue-400"
      />
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
