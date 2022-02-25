import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 210px;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  position: relative;
  margin-top: 30px;
  border: 1px solid #eee;
  width: 300px;
  transition: 0.3s;
  bottom: 0;

  &:hover {
    bottom: 10px;
    box-shadow: 0px 3px 6px 0px #ccc;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-basis: 330px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-basis: 100%;
  }
`

export const Titulo = styled.h2`
  font-size: ${({ theme }) => theme.typography.subtitle2};
  font-weight: 600;
  margin-bottom: 20px;
`

export const Texto = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.body2};
  line-height: 22px;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 25px;
`

export const Valor = styled.span`
  font-size: 30px;
  font-weight: 600;
`

export const TextoValor = styled.span`
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.body2};
  line-height: 22px;
  color: ${({ theme }) => theme.colors.grey};
`

export const LinkWrapper = styled.div`
  margin-top: 30px;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 12px 30px;
  border-radius: 5px;
  text-align: center;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  display: inline-block;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

export const Link = styled.a`
  font-size: ${({ theme }) => theme.typography.tiny};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
`

export const Subtitulo = styled.h3`
  font-size: ${({ theme }) => theme.typography.tiny};
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 25px;
`

export const ListaItem = styled.li`
  margin-bottom: 15px;
`
export const Item = styled.span`
  padding-left: 10px;
  font-size: ${({ theme }) => theme.typography.body2};
  color: ${({ theme }) => theme.colors.grey};
`

export const Icone = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.body};
  left: 0;
  top: 4px;
`

export const CardContainer = styled.div`
  padding: 25px;
  border-top: 1px solid #eee;
  &:first-child {
    border-top: none;
  }
`
