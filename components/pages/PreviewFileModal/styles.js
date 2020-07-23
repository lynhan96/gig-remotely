import styled from 'styled-components';
import { Modal } from 'components/global';

export const StyledModal = styled(Modal)`
  width: 900px;
  padding: 50px 30px;

  @media (max-width: 768px) {
    width: calc(100% - 40px);
    padding: 40px 15px;
  }

  iframe {
    width: 95%;
    height: 90vh;

    img {
      width: 100%;
    }
  }
`;

export default StyledModal;
