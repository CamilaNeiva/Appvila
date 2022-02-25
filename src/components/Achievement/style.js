import styled from 'styled-components'

export const Titulo = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.title2};
  margin-bottom: 10px;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 24px;
  }
`

export const Texto = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.body};
  line-height: 24px;
`

export const Cabecalho = styled.div`
  text-align: center;
  @media ${({ theme }) => theme.breakpoints.sm} {
    max-width: 425px;
  }
`

export const ConteudoContainer = styled.div`
  display: flex;
  margin: 50px 0 10px;
  width: 70%;
  justify-content: space-around;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.lg} {
    margin-top: 30px;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    gap: 35px;
  }
`

export const WrapperConteudo = styled.div`
  text-align: center;
`

export const Numeros = styled.span`
  font-size: ${({ theme }) => theme.typography.title2};
  font-weight: 800;
  display: block;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 25px;
  }
`

export const TextoConteudo = styled.p`
  font-size: ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  text-align: center;
`
