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
  width: 100px;
  margin-right: 20px;

  @media(max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
    margin-left: 3px;
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
`;

export const FileInputIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 30px;
`;

export const FileInputRemove = styled(Text)`
  width: auto;
  text-decoration: underline;
  position: absolute;
  right: 60px;
  cursor: pointer;
  color: ${color.cement};
  z-index: 999;
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
