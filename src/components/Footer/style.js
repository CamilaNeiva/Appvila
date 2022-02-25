import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { Column } from '../Column'
import { Container } from '../Container'

export const Logo = styled.img`
  width: 180px;
  color: white;
`

export const Texto = styled.p`
  color: #d2d6dc;
  margin-top: 20px;
  font-size: ${({ theme }) => theme.typography.body2};
  max-width: 360px;
  line-height: 24px;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Link = styled.a`
  color: #d2d6dc;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
export const Icon = styled(FontAwesomeIcon)`
  && {
    color: #d2d6dc;
    font-size: ${({ theme }) => theme.typography.body};
    transition: color 0.3s;
    margin: 30px 20px 20px 0;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`
export const Titulo = styled.h1`
  font-size: ${({ theme }) => theme.typography.subtitle};
  font-weight: 600;
  margin-bottom: 35px;
  color: #d2d6dc;
`

export const LinksLista = styled.li`
  color: #d2d6dc;
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: 400;
  margin-bottom: 12px;

  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const CONTAINER_GAP = '24px'

export const StyledContainer = styled(Container)`
  && {
    gap: ${CONTAINER_GAP};
    @media ${({ theme }) => theme.breakpoints.md} {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`
export const LogoColumn = styled(Column)`
  && {
    @media ${({ theme }) => theme.breakpoints.md} {
      order: 1;
      flex-basis: 100%;
      margin-top: 30px;
    }
  }
`
export const MenuColumn = styled(Column)`
  && {
    @media ${({ theme }) => theme.breakpoints.md} {
      flex-basis: calc(50% - ${CONTAINER_GAP});
    }
  }
`
