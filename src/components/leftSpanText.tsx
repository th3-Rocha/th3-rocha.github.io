import styled from "styled-components";

const TextStyle = styled.span<{ shouldRotate: boolean }>`
  display: inline-block;
  transform: ${({ shouldRotate }) => shouldRotate ? 'rotate(-90deg) translate(-100%, -100%)' : 'none'};
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 400;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  font-family: "Inter", sans-serif;

`;

const LeftSpanText = ({ Text, shouldRotate, classNameTag }: { Text: string, shouldRotate: boolean, classNameTag?: string }) => {
  return <TextStyle shouldRotate={shouldRotate} className={classNameTag}>{Text}</TextStyle>;
};

export default LeftSpanText;