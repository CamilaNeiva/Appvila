import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Column } from '../Column'
import { Container } from '../Container'

export const StyledContainer = styled(Container)`
  && {
    gap: 30px;
    align-items: center;
  }
`

export const TextColumn = styled(Column)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 41.666667%;

    @media ${({ theme }) => theme.breakpoints.xl} {
      max-width: 450px;
    }
    @media ${({ theme }) => theme.breakpoints.md} {
      align-items: center;
      max-width: 700px;
    }
  }
`

export const ImageColumn = styled(Column)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 58.33333%;
  }
`

export const Titulo = styled.h1`
  font-size: ${({ theme }) => theme.typography.title};
  font-weight: 800;
  line-height: 50px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Inter', sans-serif;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 30px;
    @media ${({ theme }) => theme.breakpoints.sm} {
      line-height: 25px;
      font-size: 22px;
      text-align: center;
    }
  }
`

export const Texto = styled.p`
  margin: 30px 0 40px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 24px;
  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 15px;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 14px;
    text-align: center;
  }
`

export const ButtonApple = styled.a`
  font-family: 'Inter', sans-serif;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  padding: 14px 32px;
  border-radius: 5px;
  text-align: center;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: 600;
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`

export const ButtonGoogle = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 14px 25px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  text-align: center;
  transition: 0.3s;
  display: inline-block;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const Coluna = styled.div`
  flex: 1 0 520px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
  }
`

export const Icone = styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: ${({ theme }) => theme.icons.md}; ;
`

export const Imagem = styled.img`
  display: inline;
`
