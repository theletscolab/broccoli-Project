import styled, { css } from 'styled-components/macro'

const StyledSuccessMessage = styled.form`
  padding: 3.5rem 2.5rem;
  width: 300px;
  ${({ theme }) => css`
    ${theme.mediaQueries.md} {
      width: 375px;
    }
  `};
`
const MessageTitle = styled.h2`
  display: block;
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.31;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    background-color: ${({ theme }) => theme.colors.grey400};
    bottom: -1rem;
    content: ' ';
    height: 0.2rem;
    left: calc(50% - 2.5rem);
    position: absolute;
    width: 50px;
  }
`

const Message = styled.div`
  color: ${({ theme }) => theme.colors.grey700};
  padding: 0.6rem;
  text-align: center;
  margin-bottom: 3rem;
`

export { StyledSuccessMessage, MessageTitle, Message }
