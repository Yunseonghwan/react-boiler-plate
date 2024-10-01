import { theme } from 'constant/theme';
import { HTMLAttributes, memo } from 'react';
import styled from 'styled-components';

/* text component */

type HTMLTextElement = 'div' | 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a';

type FontType = keyof typeof theme.fonts;

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: HTMLTextElement;
  color?: string;
  size?: number;
  fontFamily?: FontType;
  lineHeight?: string | number;
  mSize?: number;
  mFontFamily?: FontType;
  mLineHeight?: string | number;
}

const Typography: React.FC<TypographyProps> = props => {
  const {
    children,
    as = 'span',
    color = theme.colors.white,
    size = 16,
    mSize = size,
    fontFamily = 'regular400',
    mFontFamily = fontFamily,
    lineHeight = 1.5,
    mLineHeight = 1.5,
    style,
    ...rest
  } = props;

  return (
    <TypographyStyle
      as={as}
      $mSize={mSize}
      $size={size}
      $fontFamily={theme.fonts[fontFamily]}
      $mFontFamily={theme.fonts[mFontFamily]}
      $lineHeight={lineHeight}
      $mLineHeight={mLineHeight}
      style={{
        color,
        ...style,
      }}
      {...rest}
    >
      {children}
    </TypographyStyle>
  );
};

const TypographyStyle = styled.span<{
  $mSize: number;
  $size: number;
  $fontFamily: string;
  $mFontFamily: string;
  $lineHeight: string | number;
  $mLineHeight: string | number;
}>`
  font-size: ${({ $size }) => `${$size}px`};
  font-family: ${({ $fontFamily }) => $fontFamily};
  line-height: ${({ $lineHeight }) => $lineHeight};
  @media (max-width: 999px) {
    font-size: ${({ $mSize }) => `${$mSize}px`};
    font-family: ${({ $mFontFamily }) => $mFontFamily};
    line-height: ${({ $mLineHeight }) => $mLineHeight};
  }
`;

export default memo(Typography);
