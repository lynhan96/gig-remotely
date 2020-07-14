import styled from 'styled-components';

export const StyledText = styled.div`
  ${({ width, size, weight }) => `
    width: ${width};
    font-size: ${size}px;
    font-weight: ${weight};
  `}

  line-height: 1.02;
`;

export default StyledText;
