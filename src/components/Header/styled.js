import styled from 'styled-components/macro'

export const HeaderStyled = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey50};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey200};
  display: flex;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
`