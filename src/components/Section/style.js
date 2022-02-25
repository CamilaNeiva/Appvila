import styled from 'styled-components'

export const BaseSection = styled.section`
  background-color: ${({ theme, variant }) => variant ?? theme.colors.primary};
  padding-right: 0;
  padding-left: 0;
  padding-top: ${({ pt }) => (pt !== undefined ? `${pt}px` : '100px')};
  padding-bottom: ${({ pb }) => (pb !== undefined ? `${pb}px` : '100px')};
`
