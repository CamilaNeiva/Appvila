import { BaseSection } from './style'

export const Section = ({ children, pt, pb, variant, id }) => {
  return (
    <BaseSection pt={pt} pb={pb} variant={variant} id={id}>
      {children}
    </BaseSection>
  )
}
