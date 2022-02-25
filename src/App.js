import { ThemeProvider } from 'styled-components'
import { theme } from './design-system/theme'
import { Intro } from './components/Intro'
import { Menu } from './components/Menu'
import { Recursos } from './components/Recursos'
import { Achievement } from './components/Achievement'
import { Pricing } from './components/Pricing'
import { CallAction } from './components/CallAction'
import { Footer } from './components/Footer'
import { NavigateToTop } from './components/NavigateToTop'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <Intro />
      <Recursos />
      <Achievement />
      <Pricing />
      <CallAction />
      <Footer />
      <NavigateToTop />
    </ThemeProvider>
  )
}

export default App
