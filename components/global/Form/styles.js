import styled, { css } from 'styled-components';
import { Text } from 'components/global';
import { color } from 'components/utils/color';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  ${({ type }) => (type === 'horizontal' && css`flex-flow: wrap row; justify-content: space-between;`)}
`;

export const EmptyLabel = styled.div`
  width: 100px;
  margin-right: 20px;

  @media(max-width: 768px) {
    display: none;
  }
`;

export const StyledText = styled(Text)`
  ${({ itemType }) => (
    itemType === 'vertical'
      ? css`
        width: 100px;
        margin-right: 20px;

      `
      : css`
        width: 100%;
      `
  )}

  @media(max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
    margin-left: 3px;
    margin-right: 0;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: ${({ hasLabel }) => (hasLabel ? 'calc(100% - 120px)' : '100%')};

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const ErrorLabel = styled(Text)`
  position: absolute;
  width: calc(100% - 40px);
  padding: 0 20px;
  color: ${color.red};
  font-size: 13px;
  bottom: -17px;
`;

export const FormItem = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  align-items: center;
  ${({ itemType }) => (
    itemType === 'vertical'
      ? 'flex-direction: row;'
      : css`
        flex-direction: column;
        align-items: flex-start;
        ${StyledText} {
          margin-bottom: 10px;
        }

        ${FieldWrapper} {
          width: 100%;
        }
      `
  )}

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FileInputLabel = styled(Text)`
  width: 100%;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const FileInput = styled.div`
  font-family: 'Proxima Nova', sans-serif;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 17px;
  width: calc(100% - 40px);
  height: 50px;
  outline: none;
  border-radius: 30px;
  border: solid 1px ${color.eggshell};
  background: ${color.eggshell};
  color: ${color.black};
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const FileInputIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 30px;

  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
    right: 20px;
  }
`;

export const FileInputRemove = styled(Text)`
  width: auto;
  text-decoration: underline;
  position: absolute;
  right: 60px;
  cursor: pointer;
  color: ${color.cement};
  z-index: 999;

  @media (max-width: 768px) {
    font-size: 15px;
    right: 42px;
  }
`;

export const PhotoInputWrapper = styled.div`
  width: 280px;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 190px;
  background-color: ${color.offWhite};
  border-radius: 100%;
  border: 1px solid ${color.black};
`;

export const Image = styled.img`
  width: ${({ hasImage }) => (!hasImage ? '30px' : '190px')};
  height: ${({ hasImage }) => (!hasImage ? '30px' : '190px')};
  border-radius: ${({ hasImage }) => (hasImage ? '100%' : '0')}
`;

export const Upload = styled.input`
  width: 150%;
  height: 150%;
  position: absolute;
  margin-top: -5%;
  margin-left: -30%;
  cursor: pointer;
`;

export const FileSelectWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

export const FileInputWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
`;

export const PhotoLabel = styled(Text)`
  font-size: 16px;
  margin-left: 20px;
  font-weight: bold;
  width: 70px;
`;

export const Options = styled.div`
  width: 100%;
  height: 300px;
  overflow: auto;
  flex-direction: column;
  display: flex;
  margin-top: 20px;
`;

export const SelectWrapper = styled.div`
  position: absolute;
  width: calc(100% - 40px);
  background: ${color.offWhite};
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
  z-index: 9999;
  top: 85px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  padding: 20px;
  height: 0;
  transition: all 0.3s ease;
`;

export const Option = styled(Text)`
  cursor: pointer;
  font-size: 17px;
  width: calc(100% - 40px);
  padding: 10px 20px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};

  &:hover {
    font-weight: bold;
  }
`;

export const SearchField = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const SearchInnputField = styled.input`
  font-family: 'Proxima Nova', sans-serif;
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: 15px;
  width: calc(100% - 30px);
  height: 40px;
  outline: none;
  border-radius: 26px;
  border: 0.5px solid ${color.black};
  background: ${color.offWhite};
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 35px;
`;

export const FieldIcon = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 25px;
`;
