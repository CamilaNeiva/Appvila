import styled from 'styled-components'

export const Titulo = styled.h1`
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: 600;
  display: block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  text-align: center;
`

export const Subtitulo = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: ${({ theme }) => theme.typography.title3};
  margin: 0 auto 25px;
  line-height: 42px;
  font-weight: 800;
  text-align: center;
  max-width: 700px;

  @media ${({ theme }) => theme.breakpoints.xl} {
    max-width: 500px;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    max-width: 700px;
    font-size: 24px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 18px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 20px;
  }
`

export const Texto = styled.p`
  margin: 0 auto;
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => theme.colors.grey};
  line-height: 24px;
  margin-bottom: 55px;
  font-size: ${({ theme }) => theme.typography.body};

  @media ${({ theme }) => theme.breakpoints.xl} {
    max-width: 500px;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    max-width: 700px;
    font-size: 14px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 14px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    max-width: 406px;
  }
`
