import styled from "styled-components";
import { useState, ChangeEvent } from "react";

interface Props {
  switchState: boolean;
  onChangeHandler?: () => void;
}

export default function ToggleSwitch({switchState, onChangeHandler}: Props) {
  return (
    <StyledLabel htmlFor="checkbox" checked={switchState}>
      <input
        id="checkbox"
        type="checkbox"
        checked={switchState}
        onChange={onChangeHandler}
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
