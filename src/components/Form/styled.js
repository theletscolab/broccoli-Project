import styled, { css } from 'styled-components/macro'

const errorStyles = ({ error, theme }) =>
  error && {
    borderColor: theme.colors.error,
    color: theme.colors.error
  }

const FormStyled = styled.form`
  display: block;
  padding: 3.2rem 2.4rem;
  width: 300px;
  ${({ theme }) => css`
    ${theme.mediaQueries.md} {
      width: 375px;
    }
  `};
`
const FormTitle = styled.h2`
  display: block;
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.31;
  margin-bottom: 3.6rem;
  position: relative;

  &::after {
    background-color: ${({ theme }) => theme.colors.grey400};
    bottom: -12px;
    content: ' ';
    height: 2px;
    left: calc(50% - 25px);
    position: absolute;
    width: 50px;
  }
`

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  padding: 0.6rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: right;
`
const InputStyled = styled.input`
  background-color: ${({ theme }) => theme.colors.grey50};
  border: 1px solid ${({ theme }) => theme.colors.grey700};
  border-radius: 1;
  color: ${({ theme }) => theme.colors.grey900};
  display: block;
  font-size: 1.4rem;
  height: 48px;

  padding: 1.2rem 1.6rem;
  width: 100%;

  ${errorStyles}
`

export { FormStyled, FormTitle, ErrorMessage, InputStyled }
