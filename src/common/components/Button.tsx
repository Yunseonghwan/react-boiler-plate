import { HTMLAttributes, memo } from 'react';
import styled from 'styled-components';

type ButtonType = 'submit' | 'button' | 'reset';

const btnRadiusType = {
  md: '5px',
  lg: '30px',
};

const backgroundColorType = {
  none: 'none',
  white: 'white',
};

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  width?: string;
  height?: string;
  radius?: keyof typeof btnRadiusType;
  onClick?: () => void;
  disabled?: boolean;
  backgroundColor?: keyof typeof backgroundColorType;
  mWidth?: string;
  mHeight?: string;
}

const Button: React.FC<ButtonProps> = props => {
  const {
    width = '100%',
    height = '46px',
    backgroundColor = 'none',
    children,
    type = 'button',
    onClick,
    style,
    radius = 'md',
    disabled = false,
    mWidth,
    mHeight,
    ...rest
  } = props;
  return !disabled ? (
    <DefaultBtnStyle
      $width={width}
      $height={height}
      $mHeight={mHeight}
      $mWidth={mWidth}
      $bgColor={backgroundColorType[backgroundColor]}
      type={type}
      onClick={onClick}
      style={{
        border: backgroundColor === 'none' ? `1px solid #fffff` : 'none',
        borderRadius: btnRadiusType[radius],
        ...style,
      }}
      {...rest}
    >
      {children}
    </DefaultBtnStyle>
  ) : (
    <DisabledButtonStyle
      disabled={disabled}
      $width={width}
      $height={height}
      $mHeight={mHeight}
      $mWidth={mWidth}
      style={{
        borderRadius: btnRadiusType[radius],
        border: backgroundColor === 'none' ? `1px solid #ffff` : 'none',
        backgroundColor: backgroundColor === 'none' ? 'none' : '#fffff',
      }}
      {...rest}
    >
      {children}
    </DisabledButtonStyle>
  );
};

const DefaultBtnStyle = styled.button<{
  $width: string;
  $height: string;
  $mWidth?: string;
  $mHeight?: string;
  $bgColor?: string;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: ${({ $bgColor }) => $bgColor};
  &:hover {
    background-color: ${({ $bgColor }) => ($bgColor === 'none' ? '#fff' : '#fff')};
  }
  @media (max-width: 999px) {
    width: ${({ $mWidth }) => $mWidth};
    height: ${({ $mHeight }) => $mHeight};
  }
`;

const DisabledButtonStyle = styled.button<{ $width: string; $height: string; $mWidth?: string; $mHeight?: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  cursor: not-allowed;
  @media (max-width: 999px) {
    width: ${({ $mWidth }) => $mWidth};
    height: ${({ $mHeight }) => $mHeight};
  }
`;

export default memo(Button);
