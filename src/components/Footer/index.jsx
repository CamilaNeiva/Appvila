import {
  Logo,
  Texto,
  Icon,
  Link,
  Titulo,
  LinksLista,
  StyledContainer,
  LogoColumn,
  MenuColumn
} from './style'

import { Section } from '../Section'
import logo from '../../imgs/white-logo.svg'
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faPinterest
} from '@fortawesome/free-brands-svg-icons'

import { theme } from '../../design-system/theme'

const a = [
  {
    titulo: 'Solutions',
    links: ['Marketing', 'Analytics', 'Commerce', 'Insights', 'Promotion']
  },
  {
    titulo: 'Support',
    links: ['Pricing', 'Documentation', 'Guides', 'API Status', 'Live Support']
  },
  {
    titulo: 'Company',
    links: ['About Us', 'Our Blog', 'Jobs', 'Press', 'Contact Us']
  },
  {
    titulo: 'Legal',
    links: [
      'Terms & Conditions',
      'Privacy Policy',
      'Catering Services',
      'Customer Relations',
      'Innovation'
    ]
  }
]

const icones = [
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faPinterest
]

export const Footer = () => {
  return (
    <Section variant={theme.colors.black}>
      <StyledContainer alignItems={'flex-start'}>
        <LogoColumn flexGrow={2}>
          <Logo src={logo} />
          <Texto>
            Making the world a better place through constructing elegant
            hierarchies.
          </Texto>
          <ul>
            {icones.map((icone, index) => {
              return <Icon key={index} icon={icone} />
            })}
          </ul>

          <Texto>
            Designed and Developed by <Link href="#">UIdeck</Link>
          </Texto>
        </LogoColumn>
        {a.map(({ titulo, links }, index) => {
          return (
            <MenuColumn key={index}>
              <Titulo>{titulo}</Titulo>
              <ul>
                {links.map((item, index) => {
                  return (
                    <li key={index}>
                      <LinksLista href="#">{item}</LinksLista>
                    </li>
                  )
                })}
              </ul>
            </MenuColumn>
          )
        })}
      </StyledContainer>
    </Section>
  )
}
