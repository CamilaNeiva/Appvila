import React from 'react'
import { BaseColumn } from './style'

export const Column = ({
  children,
  display,
  alignItems,
  className,
  flexGrow
}) => {
  return (
    <BaseColumn
      display={display}
      alignItems={alignItems}
      className={className}
      flexGrow={flexGrow}
    >
      {children}
    </BaseColumn>
  )
}
