import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Icone = styled(FontAwesomeIcon)`
  && {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.icons.md};
  }
`

export const IconeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 7px;
  margin-bottom: 25px;
  position: fixed;
  bottom: 10px;
  right: 30px;
  z-index: 9;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
  }
`
