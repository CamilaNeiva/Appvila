import styled from 'styled-components'

export const BaseColumn = styled.div`
  flex: 1 0 0;
  flex-direction: column;
  display: ${({ display }) => display ?? 'flex'};
  align-items: ${({ alignItems }) => alignItems ?? 'flex-start'};
  flex-grow: ${({ flexGrow }) => flexGrow ?? '1'};
  width: 100%;
`
