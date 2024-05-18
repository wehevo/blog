import styled from "styled-components";
export enum ShapeType {
  FullWidth = "full-width",
  Round = "circle",
  RoundBorder = "square",
  Rectangle = "rectangle",
  Outline = "outline",
}
interface Props {
  name: string;
  bgColor?: string;
  shapeType?: ShapeType;
  onClickHandler?: () => void;
}
export default function ShapeButton({name, bgColor, shapeType = ShapeType.Rectangle, onClickHandler}: Props) {
  const CustomButton = styled.button<{type: ShapeType}>`
    padding-left: ${(type) => type.type == ShapeType.Rectangle ? '2.25rem' : 0} /* 36px */;
    padding-right: ${(type) => type.type == ShapeType.Rectangle ? '2.25rem' : 0} /* 36px */;
    width: ${(type) => type.type == ShapeType.FullWidth ? '100%' : 'auto'};
  `;
  return (
    <CustomButton type={shapeType} onClick={onClickHandler} className="bg-blue-500 font-light text-white h-12 transition duration-300 ease-in-out hover:bg-blue-600">
      {name}
    </CustomButton>
  );
}
