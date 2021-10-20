import styled from 'styled-components/macro'

// parse and define custom button size properties;
const buttonSizes = ({ size, theme }) => {
  if (size) {
    const sizes = theme.buttonSizes
    return sizes[size] && sizes[size]
  }
  return theme.buttonSizes.medium
}

// make the button full width

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  color: ${({ theme }) => theme.colors.awlxDarkBlue};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 0;
  text-align: center;

  &:active {
    background-color: ${({ theme }) => theme.colors.awlxLightBlue};

    color: ${({ theme }) => theme.colors.awlxDarkBlue};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey300};
    color: ${({ theme }) => theme.colors.grey700};
    cursor: auto;

    &:hover {
      border-color: ${({ theme }) => theme.colors.grey300};
    }
  }
  ${buttonSizes}
`
export { StyledButton }
