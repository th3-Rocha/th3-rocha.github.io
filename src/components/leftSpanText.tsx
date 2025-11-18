import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: inline-block; /* To make sure the wrapper takes up space */
`;

const TextStyle = styled.span<{ shouldRotate: boolean }>`
  display: inline-block;
  ${({ shouldRotate }: { shouldRotate: boolean }) =>
    shouldRotate &&
    css`
      position: absolute;
      top: 50%;
      left: -12.3rem;
      transform: rotate(-90deg) translateY(-50%);
      transform-origin: middle middle;
      width: 8rem;
    `}
`;

const LeftSpanText = ({
  Text,
  shouldRotate,
  classNameTag,
}: {
  Text: string;
  shouldRotate: boolean;
  classNameTag?: string;
}) => {
  return (
    <Wrapper>
      <TextStyle shouldRotate={shouldRotate} className={classNameTag}>
        {Text}
      </TextStyle>
    </Wrapper>
  );
};

export default LeftSpanText;
