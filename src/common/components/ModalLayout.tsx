import { ReactNode, memo } from 'react';
import styled, { keyframes } from 'styled-components';
import ModalPortal from '../../ModalPortal';

interface ModalLayoutProps {
  width: string;
  height: string;
  open: boolean;
  children: ReactNode;
  handleModal: () => void;
  title?: string;
  arrow?: boolean;
  header?: boolean;
}

const ModalLayout: React.FC<ModalLayoutProps> = props => {
  const { width, height, open, children, handleModal, title, arrow, header } = props;
  return (
    <ModalPortal>
      {open && <ContainerStyle />}
      <ModalContainerStyle $width={width} $height={height} $open={open}>
        {header && (
          <ModalHeaderStyle>
            <ModalTitleStyle>{title}</ModalTitleStyle>
            {arrow ? (
              <ModalBackArrowStyle onClick={handleModal}>&#x2190;</ModalBackArrowStyle>
            ) : (
              <ModalCloseBtnStyle onClick={handleModal} />
            )}
          </ModalHeaderStyle>
        )}

        {children}
      </ModalContainerStyle>
    </ModalPortal>
  );
};

interface StyledProps {
  $width: string;
  $height: string;
  $open: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ContainerStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ModalContainerStyle = styled.div<StyledProps>`
  padding: 30px 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px;
  border-radius: 10px;
  animation: ${({ $open }) => ($open ? fadeIn : fadeOut)} 0.8s ease-in-out;
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transition: visibility 0.8s linear;
`;

const ModalHeaderStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const ModalTitleStyle = styled.h2`
  font-size: 20px;
  font-family: Pretendard-SemiBold;
`;

const ModalCloseBtnStyle = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;
  &:before,
  &:after {
    position: absolute;
    right: 0;
    content: ' ';
    height: 23px;
    width: 2px;
    background-color: #000;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const ModalBackArrowStyle = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 25px;
  text-align: right;
`;

export default memo(ModalLayout);
