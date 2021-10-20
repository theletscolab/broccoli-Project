import styled, { css } from 'styled-components/macro'

export const StyledLogo = styled.a`
  color: ${({ theme }) => theme.colors.grey800};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-decoration: none;
  margin-left: 10px;
  ${({ theme }) => css`
    ${theme.mediaQueries.md} {
      text-align: left;
      font-size: ${theme.fontSizes[3]};
    }
  `}
`

