// src/components/typography/Typography.js

import styled, { css } from 'styled-components'

const TAG_MAP = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle: 'h4',
  body: 'p',
  bodyStrong: 'p',
  caption: 'span',
  captionStrong: 'span',
}

const variantStyles = {
  display: (t) => css`
    font-size: ${t.typography.fontSize.display};
    font-weight: ${t.typography.fontWeight.black};
    line-height: ${t.typography.lineHeight.tight};
    letter-spacing: ${t.typography.letterSpacing.tighter};
    color: ${t.colors.neutral.text};
  `,
  h1: (t) => css`
    font-size: ${t.typography.fontSize.h1};
    font-weight: ${t.typography.fontWeight.bold};
    line-height: ${t.typography.lineHeight.tight};
    letter-spacing: ${t.typography.letterSpacing.tight};
    color: ${t.colors.neutral.text};
  `,
  h2: (t) => css`
    font-size: ${t.typography.fontSize.h2};
    font-weight: ${t.typography.fontWeight.bold};
    line-height: ${t.typography.lineHeight.tight};
    letter-spacing: ${t.typography.letterSpacing.tight};
    color: ${t.colors.neutral.text};
  `,
  h3: (t) => css`
    font-size: ${t.typography.fontSize.h3};
    font-weight: ${t.typography.fontWeight.medium};
    line-height: ${t.typography.lineHeight.normal};
    letter-spacing: ${t.typography.letterSpacing.normal};
    color: ${t.colors.neutral.text};
  `,
  subtitle: (t) => css`
    font-size: ${t.typography.fontSize.subtitle};
    font-weight: ${t.typography.fontWeight.medium};
    line-height: ${t.typography.lineHeight.normal};
    color: ${t.colors.neutral.text};
  `,
  body: (t) => css`
    font-size: ${t.typography.fontSize.body};
    font-weight: ${t.typography.fontWeight.regular};
    line-height: ${t.typography.lineHeight.normal};
    color: ${t.colors.neutral.text};
  `,
  bodyStrong: (t) => css`
    font-size: ${t.typography.fontSize.body};
    font-weight: ${t.typography.fontWeight.bold};
    line-height: ${t.typography.lineHeight.normal};
    color: ${t.colors.neutral.text};
  `,
  caption: (t) => css`
    font-size: ${t.typography.fontSize.caption};
    font-weight: ${t.typography.fontWeight.light};
    line-height: ${t.typography.lineHeight.tight};
    color: ${t.colors.neutral.text};
  `,
  captionStrong: (t) => css`
    font-size: ${t.typography.fontSize.caption};
    font-weight: ${t.typography.fontWeight.medium};
    line-height: ${t.typography.lineHeight.tight};
    color: ${t.colors.neutral.text};
  `,
}

const getThemeColor = (color, theme) => {
  if (!color) return null
  const [group, tone = 'main'] = color.split('.')
  return theme.colors[group]?.[tone] || null
}

const StyledTypography = styled.span`
  margin: 0;
  padding: 0;
  text-align: ${({ align }) => align || 'left'};
  ${({ variant = 'body', theme }) => variantStyles[variant]?.(theme)}

  ${({ color, theme }) => {
    const themeColor = getThemeColor(color, theme)
    return themeColor
      ? css`
          color: ${themeColor};
        `
      : ''
  }}
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
    `}
`

function Typography({
  variant = 'body',
  color,
  align,
  children,
  as: asTagProp,
  gutter = false,
  fontSize,
  ...rest
}) {
  const asTag = asTagProp || TAG_MAP[variant] || 'p'
  return (
    <StyledTypography
      as={asTag}
      variant={variant}
      color={color}
      align={align}
      gutter={gutter}
      fontSize={fontSize}
      {...rest}
    >
      {children}
    </StyledTypography>
  )
}

export default Typography
