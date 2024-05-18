import styled from "styled-components";

interface Props {
  label?: string;
  type: string;
  name: string;
}

export default function CustomInput({label, type, name}: Props) {
  return (
    <div className="relative">
      <label htmlFor="user_email" className=" text-gray-500 font-light text-sm">
        {label}
      </label>
      <StyledInput
        type={type}
        name={name}
        placeholder=""
        required
        className="md:mb-0 mb-4 w-full bg-transparent border-b border-current px-0 pt-3 pb-1 pl-3 focus:border-blue-600 focus:outline-none"
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
