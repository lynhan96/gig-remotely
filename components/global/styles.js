import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { color } from 'components/utils/color';

export const Layout = styled.div`
  margin: 0;
  display: flex !important;
  flex-direction: column;
  color: ${color.black};
  background: ${color.offWhite};
  margin-top: 145px;

  @media(min-width: 1025px) and (max-width: 1280px) {
    margin-top: 125px;
  }

  @media(max-width: 1024px) {
    margin-top: 85px;
  }
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

export const LoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    height: 70vh;
    padding-bottom: 70px;
    margin-bottom: 0;
`;

const animation = keyframes`
  0% {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.0);
  }
  50% {
    box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
  100% {
    box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0);
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
    -webkit-box-shadow: 0 0 0px 1000px ${color.offWhite} inset !important;
  }

  input,
  textarea,
  button,
  select,
  label,
  span,
  img,
  div,
  a{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  .show-page {
    display: flex !important;
  }

  .sticky {
    padding-top: 30px !important;
    padding-bottom: 30px !important;
    box-shadow: 0 4px 10px 0px rgba(0, 0, 0, 0.2);

    @media (max-width: 1024px) {
      padding-top: 10px !important;
      padding-bottom: 10px !important;
    }
  }

  .active-switch {
    background: black;
    transform: scale(1);
    animation: ${animation} 0.2s linear forwards;
  }

  .active-switch-icon {
    margin-left: 25px;
  }

  .hide-job-item {
    display: none;
  }

  .show-apply-button {
    display: flex;
  }

  .open-select {
    height: 370px;
    padding: 20px;
  }

  .close-select {
    height: 0;
    padding: 0 !important;
  }


  .show-sub-menu {
    @media (max-width: 1024px) {
      display: flex;
    }
  }

  .hide-sub-menu {
    @media (max-width: 1024px) {
      display: none;
    }
  }

  .show-field,
  .show-input-error,
  .show-input-label,
  .open-select-search {
    display: flex;
  }

  .hide-field,
  .hide-input-label,
  .close-select-search,
  .hide-input-error {
    display: none;
  }

  .bold {
    font-weight: bold !important;
  }

  .hide-input-label {
    height: 0;
    margin: 0;
  }

  .input-wrapper-width-label {
    width: calc(100% - 120px);

    @media(max-width: 768px) {
      width: 100%;
    }
  }

  .collapse-show {
    height: 130px;
    opacity: 1;

    @media (max-width: 1500px) {
      height: 120px;
    }

    @media (max-width: 320px) {
      height: 105px;
    }
  }

  .collapse-hidden {
    height: 0;
    opacity: 0;
    z-index: -1;
  }

  .conditions-show {
    opacity: 1;
  }

  .conditions-hidden {
    opacity: 0;
    height: 0;

    @media (max-width: 440px) {
      opacity: 1;
      height: auto;
      margin-top: 20px;
    }
  }

  .condition-choose {
    text-decoration: underline;
  }

  .condition-not-choose {
    text-decoration: none;
  }

  .input-error {
    border: solid 1px ${color.red};
    color: ${color.red};
  }

  .payment-input-field {
    width: 90%;
    position: absolute;
    top: 43px;
    left: 23px;
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
    width: 10px;
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

  .ReactModal__Overlay {
    opacity: 0 !important;
    transition: all 0.3s ease;
    background-color: rgba(0, 0, 0, 0.5) !important;
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1 !important;
    transition: all 0.3s ease;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0 !important;
    transition: all 0.3s ease;
  }

  #nprogress .bar {
    background: #171E44 !important;
    z-index: 999999;
  }

  .facebook-button-class {
    padding: 0;
    margin-right: 15px;
    border: none;
    background: transparent;
    outline: none;
    width: 50px;
    height: 50px;
  }

  .google-login-button {
    div {
      display: none;
    }

    span {
      padding: 0 !important;
    }

    box-shadow: none !important;
    border: none !important;
    outline: none !important;
  }
`;
