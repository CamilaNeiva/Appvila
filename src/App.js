import { ThemeProvider } from 'styled-components'
import { theme } from './design-system/theme'
import { Intro } from './components/Intro'
import { Menu } from './components/Menu'
import { Recursos } from './components/Recursos'
import { Achievement } from './components/Achievement'
import { Pricing } from './components/Pricing'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <Intro />
      <Recursos />
      <Achievement />
      <Pricing />
    </ThemeProvider>
  )
}

export default App
