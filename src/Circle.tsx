import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  containerbgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.containerbgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

/*
  const [value, setValue] = useState<number|string>(0);
  setValue(2)
  setValue("hello")
  setValue(true)
*/

function Circle({ bgColor, borderColor }: CircleProps) {
  const [value, setValue] = useState(0);
  return (
    <Container
      containerbgColor={bgColor}
      borderColor={borderColor ?? bgColor}
    />
  );
}

export default Circle;
