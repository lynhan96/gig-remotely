import styled, { createGlobalStyle } from 'styled-components';
import { color } from 'components/utils/color';

export const Layout = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  color: ${color.black};
  background: ${color.offWhite};
`;

export const Container = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  background: transparent;
  margin: auto;

  @media (min-width: 1500px) {
    width: 1440px;
  }

  @media (min-width: 1280px) and (max-width: 1500px){
    width: 1140px;
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 992px;
  }

  @media (max-width: 1024px) {
    width: calc(100% - 30px);
  }
`;

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Proxima Nova';
    font-weight: normal;
    src: url('/fonts/Mark Simonson - Proxima Nova Alt Regular-webfont.ttf')  format('truetype');
  }

  @font-face {
    font-family: 'Proxima Nova';
    font-weight: bold;
    src: url('/fonts/Mark Simonson - Proxima Nova Alt Bold-webfont.ttf')  format('truetype');
  }

  @font-face {
    font-family: 'Proxima Nova';
    font-weight: 600;
    src: url('/fonts/Mark Simonson - Proxima Nova Semibold-webfont.ttf')  format('truetype');
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: #090513;
    -webkit-box-shadow: 0 0 0px 1000px #F8F6FB inset !important;
  }

  input,
  textarea,
  button,
  select,
  label,
  a{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  body {
    margin: 0;
    flex-direction: column;
    display: flex;
    color: ${color.black};
    background: ${color.offWhite};
    font-family: 'Proxima Nova', sans-serif;

    #__next {
      flex-direction: column;
      display: flex;
      width: 100%;
    }
  }

  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
    border-radius: 10px;
  }

  ::-webkit-scrollbar
  {
    width: 5px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    background: ${color.black};
  }

  @media (max-width: 767px) {
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
    }
  }
`;
