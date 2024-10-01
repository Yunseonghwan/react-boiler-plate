import styled from 'styled-components';
import { SpinnerStyle } from './styled/SpinnerStyled';

/* 기본 lading App.tsx suspense fallback 에서 사용 */
const PageLoading = () => {
  return (
    <>
      <ContainerStyle />
      <LoadingContainerStyle>
        <SpinnerStyle $size={60} $bgColor={'#000'} />
      </LoadingContainerStyle>
    </>
  );
};

const ContainerStyle = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const LoadingContainerStyle = styled.div`
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default PageLoading;
