import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 350px;
  text-align: left;
  padding: 35px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  position: relative;
  border: 1px solid #eee;
  transition: 0.3s;
  bottom: 0;

  &:hover {
    bottom: 10px;
    box-shadow: 0px 3px 6px 0px #ccc;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    flex-basis: 290px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    max-width: 405px;
  }
`

export const IconeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 7px;
  margin-bottom: 25px;
`

export const Icone = styled(FontAwesomeIcon)`
  && {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.icons.md};
  }
`

export const Titulo = styled.h3`
  font-size: ${({ theme }) => theme.typography.subtitle};
  font-weight: 500;
  margin-bottom: 20px;
`

export const Texto = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.typography.body};
  max-width: 315px;
  line-height: 22px;
`
