import styled from "styled-components";
import { useState, ChangeEvent } from "react";

export default function ToggleSwitch() {
  const [switchState, setSwitchState] = useState(true);
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    console.log("---", e.target.checked);
    if(switchState === true) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    setSwitchState(!switchState);
  }
  return (
    <StyledLabel htmlFor="checkbox" checked={switchState}>
      <input
        id="checkbox"
        type="checkbox"
        checked={switchState}
        onChange={handleOnChange}
      />
    </StyledLabel>
  );
}

const StyledLabel = styled.label<{ checked: boolean }>`
  cursor: pointer;
  text-indent: -9999px;
  width: 45px;
  height: 26px;
  background: ${({ checked }) => (checked ? "green" : "gray")};
  display: block;
  border-radius: 20px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: ${({ checked }) => (checked ? "4px" : "calc(55% - 4px)")};
    top: 3px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 20px;
    transition: 0.3s;
  }
`;
