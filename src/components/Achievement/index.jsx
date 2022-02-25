import {
  Titulo,
  Texto,
  Cabecalho,
  ConteudoContainer,
  WrapperConteudo,
  Numeros,
  TextoConteudo
} from './style'

import { Section } from '../Section'
import { Container } from '../Container'
import { Column } from '../Column'

const conteudo = [
  {
    numero: '100%',
    texto: 'Satisfaction'
  },
  {
    numero: '120K',
    texto: 'Happy Users'
  },
  {
    numero: '125k+',
    texto: 'Downloads'
  }
]

export const Achievement = () => {
  return (
    <Section pt={130} pb={130}>
      <Container>
        <Column alignItems={'center'}>
          <Cabecalho>
            <Titulo>Trusted by developers from over 80 planets</Titulo>
            <Texto>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </Texto>
          </Cabecalho>
          <ConteudoContainer>
            {conteudo.map(({ numero, texto }, index) => {
              return (
                <WrapperConteudo key={index}>
                  <Numeros>{numero}</Numeros>
                  <TextoConteudo>{texto}</TextoConteudo>
                </WrapperConteudo>
              )
            })}
          </ConteudoContainer>
        </Column>
      </Container>
    </Section>
  )
}
