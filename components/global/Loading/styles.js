import styled, { keyframes } from 'styled-components';
import { color } from 'components/utils/color';

const dots = keyframes`
  0%, 20% {
    color: white;
    text-shadow: .25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0);
  }
  40% {
    color: ${color.black};
    text-shadow: .25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0);
  }
  60% {
    text-shadow: .25em 0 0 ${color.black}, .5em 0 0 rgba(0,0,0,0);
  }
  80%, 100% {
    text-shadow: .25em 0 0 ${color.black}, .5em 0 0 ${color.black};
  }
`;

export const StyledLoading = styled.div`
  display: initial;
  text-align: center;
  color: ${color.black};
  font-size: 50px;
  font-weight: bold;


  :after {
    content: ' .';
    animation: ${dots} 1s steps(5, end) infinite;
  }

`;

export default StyledLoading;
