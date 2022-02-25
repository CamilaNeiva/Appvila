import styled from 'styled-components'

export const BaseContainer = styled.div`
  padding: 0 12px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  max-width: 1320px;
  align-items: ${({ alignItems }) => alignItems ?? 'flex-start'};
  gap: ${({ gap }) => (gap ? `${gap}px` : '0px')};

  @media ${({ theme }) => theme.breakpoints.xl} {
    max-width: 1140px;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    max-width: 960px;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    max-width: 720px;
    flex-direction: column;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 450px;
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    max-width: 100%;
  }
`
