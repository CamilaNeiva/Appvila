import logoDark from '../../imgs/logo.svg'
import logoWhite from '../../imgs/white-logo.svg'
import {
  Header,
  Logo,
  MenuNav,
  Lista,
  ListaItem,
  Link,
  LinkButton,
  StyledContainer,
  MenuButton,
  Icon,
  MenuMobile,
  MobileListItem,
  MobileLink
} from './style'
import { useEffect, useState } from 'react'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { PATHS } from '../../constants/paths'

const menuItens = [
  {
    href: PATHS.home,
    label: 'Home'
  },
  {
    href: PATHS.features,
    label: 'Features'
  },
  {
    href: PATHS.overview,
    label: 'Overview'
  },
  {
    href: PATHS.pricing,
    label: 'Pricing'
  },
  {
    href: PATHS.team,
    label: 'Team'
  },
  {
    href: PATHS.blog,
    label: 'Blog'
  },
  {
    href: PATHS.contact,
    label: 'Contact'
  }
]

export const Menu = () => {
  const [mudarCor, setMudarCor] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const a = () => {
    if (window.scrollY > 50) {
      setMudarCor(true)
    } else {
      setMudarCor(false)
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    window.addEventListener('scroll', a)
    return () => window.removeEventListener('scroll', a)
  }, [])
  return (
    <Header alterarCor={mudarCor}>
      <StyledContainer alignItems="center">
        <a href="#">
          <Logo src={mudarCor ? logoDark : logoWhite} />
        </a>
        <MenuNav>
          <Lista>
            {menuItens.map(({ href, label }) => {
              return (
                <ListaItem key={href}>
                  <Link alterarCor={mudarCor} href={`#${href}`}>
                    {label}
                  </Link>
                </ListaItem>
              )
            })}
          </Lista>
        </MenuNav>

        <MenuButton onClick={toggleMenu}>
          <Icon icon={isMenuOpen ? faTimes : faBars} />
        </MenuButton>
        {isMenuOpen && (
          <MenuMobile>
            <ul>
              {menuItens.map(({ href, label }) => {
                return (
                  <MobileListItem key={href}>
                    <MobileLink href={`#${href}`}>{label}</MobileLink>
                  </MobileListItem>
                )
              })}
            </ul>
          </MenuMobile>
        )}

        <LinkButton alterarCor={mudarCor} href="#">
          Get It Now
        </LinkButton>
      </StyledContainer>
    </Header>
  )
}
