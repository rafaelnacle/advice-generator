import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../../assets/styles/global'
import defaultTheme from '../../assets/styles/themes/default'
import AdviceCard from '../AdviceCard/AdviceCard'
import { Container } from './styles'
import axios, { AxiosResponse } from 'axios'


interface IAdviceProps {
  id: number;
  advice: string;
}

function App() {
  const [adviceData, setAdviceData] = useState<IAdviceProps>({ id: 0, advice: '' });

  const getAdvices = () => {
    axios
      .get<IAdviceProps>('https://api.adviceslip.com/advice')
      .then((response: AxiosResponse) => {
        setAdviceData(response.data.slip)
      })
      .catch(error => console.log(`Error: ${error}`))
  }

  useEffect(() => {
    getAdvices()
  }, [])

  const handleClick = () => {
    getAdvices()
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <AdviceCard
          id={adviceData.id}
          advice={adviceData.advice}
          generateNew={handleClick}
        />
      </Container>
    </ThemeProvider>
  )
}

export default App
