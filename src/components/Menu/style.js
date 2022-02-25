import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { Container } from '../Container'

const HEADER_HEIGHT = 102

export const Header = styled.header`
  position: fixed;
  padding: 25px 0;
  display: flex;
  width: 100%;
  z-index: 9999;
  height: ${HEADER_HEIGHT}px;
  background-color: ${({ alterarCor, theme }) =>
    alterarCor ? theme.colors.white : theme.colors.primary};
  color: ${({ alterarCor, theme }) =>
    alterarCor ? theme.colors.black : theme.colors.white};
  transition: background-color 500ms;
`

export const Logo = styled.img`
  width: 160px;
  margin-right: 10px;
`

export const MenuNav = styled.nav`
  flex-grow: 1;
  @media ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }
`

export const Lista = styled.ul`
  font-family: inter, sans-serif;
  display: flex;
  justify-content: center;
  font-weight: 600;
  gap: 40px;
`

export const ListaItem = styled.li`
  font-size: ${({ theme }) => theme.typography.body};
`

export const Link = styled.a`
  color: inherit;
  transition: 0.3s;
  &:hover {
    color: ${({ alterarCor, theme }) =>
      alterarCor ? theme.colors.primary : theme.colors.white};
  }
`

export const LinkButton = styled.a`
  font-family: inter, sans-serif;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `2px solid ${theme.colors.white}`};
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: 600;
  border-radius: 7px;
  transition: 0.3s;

  &:hover {
    color: ${({ theme, alterarCor }) =>
      alterarCor ? theme.colors.white : theme.colors.primary};
    background-color: ${({ theme, alterarCor }) =>
      alterarCor ? theme.colors.black : theme.colors.white};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: none;
  }
`

export const StyledContainer = styled(Container)`
  && {
    flex-direction: row;
    justify-content: space-between;
    position: relative;
  }
`
export const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.breakpoints.md} {
    display: flex;
  }
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
`
export const MenuMobile = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
  border-radius: 6px;
  max-height: 350px;
  overflow-y: scroll;
  position: absolute;
  top: ${HEADER_HEIGHT - 25}px;
  width: 100%;
  border: 1px solid #eee;
  display: none;
  @media ${({ theme }) => theme.breakpoints.md} {
    display: block;
  }
`
export const MobileListItem = styled.li`
  padding: 12px 16px;
  font-size: ${({ theme }) => theme.typography.body2};
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  transition: 0.1s;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
export const MobileLink = styled.a`
  color: inherit;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
