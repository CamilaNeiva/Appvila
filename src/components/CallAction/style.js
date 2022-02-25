import styled from 'styled-components'

export const Titulo = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  line-height: 50px;
  font-size: ${({ theme }) => theme.typography.title};
  font-weight: 700;
  margin-bottom: 30px;
  max-width: 420px;
  text-align: center;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 32px;
    line-height: 40px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 25px;
    max-width: 370px;
  }
`

export const Texto = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.body};
  line-height: 24px;
  padding: 0px 50px;
  max-width: 720px;
  text-align: center;
  margin-bottom: 40px;

  @media ${({ theme }) => theme.breakpoints.xl} {
    max-width: 635px;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    max-width: 515px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    max-width: 700px;
    padding: 0;
  }
`
export const Botao = styled.a`
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
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`
