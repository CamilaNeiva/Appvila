import { BaseContainer } from './style'

export const Container = ({ children, alignItems, gap, className }) => {
  return (
    <BaseContainer alignItems={alignItems} gap={gap} className={className}>
      {children}
    </BaseContainer>
  )
}
