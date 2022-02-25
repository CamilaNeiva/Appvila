import { Titulo, Texto, Botao } from './style'

import { Section } from '../Section'
import { Container } from '../Container'
import { Column } from '../Column'

export const CallAction = () => {
  return (
    <Section pt={130} pb={130}>
      <Container>
        <Column display="flex" alignItems="center">
          <Titulo>You are using free Lite Version of Appvilla</Titulo>
          <Texto>
            Please, purchase full version of the template to get all pages,
            features and commercial license.
          </Texto>
          <div>
            <Botao>Purchase Now</Botao>
          </div>
        </Column>
      </Container>
    </Section>
  )
}
