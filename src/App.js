import { ThemeProvider } from 'styled-components'
import { theme } from './design-system/theme'
import { Intro } from './components/Intro'
import { Menu } from './components/Menu'
import { Recursos } from './components/Recursos'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <Intro />
      <Recursos />
    </ThemeProvider>
  )
}

export default App
