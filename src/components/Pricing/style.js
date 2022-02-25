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
  font-size: ${({ theme }) => theme.typography.title3};
  margin: 0 auto 25px;
  line-height: 42px;
  font-weight: 700;
  text-align: center;
  max-width: 800px;
`

export const Texto = styled.p`
  font-size: ${({ theme }) => theme.typography.body};
  margin: 0 auto;
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => theme.colors.grey};
`

export const PricingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`
