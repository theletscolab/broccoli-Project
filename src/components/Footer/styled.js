import styled from 'styled-components/macro'

const StyledFooter = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey30};
  border-top: 2px solid ${({ theme }) => theme.colors.grey200};
  padding: 1.6rem 0;
  display: block;
  color: ${({ theme }) => theme.colors.grey800};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.3;
  text-align: center;
`

export { StyledFooter }
