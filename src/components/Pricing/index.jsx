import { PricingWrapper } from './style'

import { PriceCard } from '../PriceCard'
import { Cabecalho } from '../Cabecalho'
import { Section } from '../Section'
import { theme } from '../../design-system/theme'
import { Container } from '../Container'
import { Column } from '../Column'
import { PATHS } from '../../constants/paths'

const plans = [
  {
    titulo: 'Hobby',
    texto: 'All the basics for starting a new business',
    valor: 12,
    textoBotao: 'Buy Hobby',
    link: '#',
    beneficios: [
      'Cras justo odio.',
      'Dapibus ac facilisis in.',
      'Morbi leo risus.',
      'Potenti felis, in cras ligula.'
    ]
  },
  {
    titulo: 'Freelancer',
    texto: 'All the basics for starting a new business',
    valor: 24,
    textoBotao: 'Buy Freelancer',
    link: '#',
    beneficios: [
      'Cras justo odio.',
      'Dapibus ac facilisis in.',
      'Morbi leo risus.',
      'Potenti felis, in cras ligula.'
    ]
  },
  {
    titulo: 'Startup',
    texto: 'All the basics for starting a new business',
    valor: 32,
    textoBotao: 'Buy Startup',
    link: '#',
    beneficios: [
      'Cras justo odio.',
      'Dapibus ac facilisis in.',
      'Morbi leo risus.',
      'Potenti felis, in cras ligula.'
    ]
  },
  {
    titulo: 'Enterprise',
    texto: 'All the basics for starting a new business',
    valor: 48,
    textoBotao: 'Buy Enterprise',
    link: '#',
    beneficios: [
      'Cras justo odio.',
      'Dapibus ac facilisis in.',
      'Morbi leo risus.',
      'Potenti felis, in cras ligula.'
    ]
  }
]

export const Pricing = () => {
  return (
    <Section id={PATHS.pricing} variant={theme.colors.lightGrey}>
      <Container>
        <Column alignItems={'center'}>
          <Cabecalho
            titulo="PRICING"
            subtitulo="Pricing Plan"
            texto="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form."
          />

          <PricingWrapper>
            {plans.map((plan, index) => {
              return <PriceCard key={index} {...plan} />
            })}
          </PricingWrapper>
        </Column>
      </Container>
    </Section>
  )
}
