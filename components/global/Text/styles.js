import styled from 'styled-components';

export const StyledText = styled.div`
  ${({
    color, width, size, weight,
  }) => `
    width: ${width};
    font-size: ${size}px;
    font-weight: ${weight};
    color: ${color || 'inherit'};
  `}

  line-height: 1.02;
`;

export default StyledText;
