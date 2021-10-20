import styled, { css } from 'styled-components/macro'

const MainStyled = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 575px;
  padding: 1.6rem;
  text-align: center;
  button {
    align-self: center;
  }
`

const Title = styled.h1`
  display: block;
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: ${({ theme }) => theme.headingWeight};
  line-height: 1.1;
  white-space: pre-wrap;
  ${({ theme }) => css`
    ${theme.mediaQueries.md} {
      font-size: ${theme.fontSizes[5]};
    }
  `}
`

const SubTitle = styled.div`
  display: block;
  color: ${({ theme }) => theme.colors.grey700};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.31;
  margin: 2.4rem 0;
  white-space: pre-wrap;
  ${({ theme }) => css`
    ${theme.mediaQueries.md} {
      font-size: ${theme.fontSizes[2]};
      margin: 3.2rem 0;
    }
  `}
`

export { MainStyled, Title, SubTitle }
