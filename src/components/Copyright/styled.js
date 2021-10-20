import styled from 'styled-components/macro'

const StyledCopyright = styled.div`
  display: block;
  color: ${({ theme }) => theme.colors.grey800};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.3;
  text-align: center;
`

export { StyledCopyright }
