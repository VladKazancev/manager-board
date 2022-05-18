import { FC } from 'react'

import { CRAHomePage } from './pages/CRAHomePage'
import { GlobalStyles } from './components/GlobalStyles'
import { Container } from './styles'

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <CRAHomePage />
      </Container>
    </>
  )
}

export default App
