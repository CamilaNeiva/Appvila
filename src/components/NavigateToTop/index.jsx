import { Icone, IconeContainer } from './style'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { PATHS } from '../../constants/paths'

export const NavigateToTop = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false)
  const showButton = () => {
    setShouldDisplay(window.scrollY > 400)
  }

  useEffect(() => {
    window.addEventListener('scroll', showButton)
    return () => window.removeEventListener('scroll', showButton)
  }, [])

  return (
    shouldDisplay && (
      <IconeContainer>
        <a href={`#${PATHS.home}`}>
          <Icone icon={faChevronUp} />
        </a>
      </IconeContainer>
    )
  )
}
