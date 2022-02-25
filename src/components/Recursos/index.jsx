import {
  faCloudUploadAlt,
  faCog,
  faLayerGroup,
  faLock,
  faShieldAlt,
  faSyncAlt
} from '@fortawesome/free-solid-svg-icons'
import { Cabecalho } from '../Cabecalho'
import { Card } from '../Card'
import { RecursosWrapper } from './style'
import { Section } from '../Section'
import { theme } from '../../design-system/theme'
import { Container } from '../Container'
import { Column } from '../Column'
import { PATHS } from '../../constants/paths'

const itensCard = [
  {
    icone: faCloudUploadAlt,
    titulo: 'Push to Deploy',
    texto:
      'It is a long established fact that a reader will be distracted by the readable content of a page at its layout.'
  },
  {
    icone: faLock,
    titulo: 'SSL Certificates',
    texto:
      'It is a long established fact that a reader will be distracted by the readable content of a page at its layout.'
  },
  {
    icone: faSyncAlt,
    titulo: 'Simple Queues',
    texto:
      'It is a long established fact that a reader will be distracted by the readable content of a page at its layout.'
  },
  {
    icone: faShieldAlt,
    titulo: 'Advanced Security',
    texto:
      'It is a long established fact that a reader will be distracted by the readable content of a page at its layout.'
  },
  {
    icone: faCog,
    titulo: 'Powerful API',
    texto:
      'It is a long established fact that a reader will be distracted by the readable content of a page at its layout.'
  },
  {
    icone: faLayerGroup,
    titulo: 'Database Backups',
    texto:
      'It is a long established fact that a reader will be distracted by the readable content of a page at its layout.'
  }
]

export const Recursos = () => {
  return (
    <Section id={PATHS.features} variant={theme.colors.lightGrey}>
      <Container>
        <Column alignItems={'center'}>
          <Cabecalho
            titulo="FEATURES"
            subtitulo="Your Experience Gets Better And Better Over Time."
            texto="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form."
          />

          <RecursosWrapper>
            {itensCard.map((item, index) => {
              return <Card key={index} {...item} />
            })}
          </RecursosWrapper>
        </Column>
      </Container>
    </Section>
  )
}
