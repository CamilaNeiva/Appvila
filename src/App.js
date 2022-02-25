import { ThemeProvider } from 'styled-components'
import { theme } from './design-system/theme'
import { Intro } from './components/Intro'
import { Menu } from './components/Menu'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <Intro />
    </ThemeProvider>
  )
}

export default App
