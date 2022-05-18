import { FC } from 'react'

import { Container, CRALogo } from './styles'

export const CRAHomePage: FC = () => {
  return (
    <Container>
      <CRALogo />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    </Container>
  )
}
