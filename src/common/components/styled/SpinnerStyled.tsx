import { theme } from 'constant/theme';
import styled, { keyframes } from 'styled-components';

const spinAni = keyframes`
	100% {
		transform: rotate(-360deg);
	}
`;

export const SpinnerStyle = styled.div<{
  $size: number;
  $bgColor?: string;
}>`
  background: conic-gradient(from 90deg, black, white 100%);
  border-radius: 50%;
  height: ${({ $size }) => `${$size}px`};
  width: ${({ $size }) => `${$size}px`};
  position: relative;
  animation: ${spinAni} 1s infinite linear;
  &::after,
  &::before {
    content: '';
    position: absolute;
    border-radius: 50%;
  }
  &::after {
    top: 12%;
    right: 12%;
    bottom: 12%;
    left: 12%;
    background-color: ${({ $bgColor }) => ($bgColor ? $bgColor : theme.colors.black)};
  }
  &::before {
    width: 12%;
    height: 15%;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${theme.colors.black};
  }
`;
