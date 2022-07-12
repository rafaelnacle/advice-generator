import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../../assets/styles/global'
import defaultTheme from '../../assets/styles/themes/default'
import AdviceCard from '../AdviceCard/AdviceCard'
import { Container } from './styles'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <AdviceCard />
      </Container>
    </ThemeProvider>
  )
}

export default App
