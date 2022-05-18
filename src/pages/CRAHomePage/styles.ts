import styled from 'styled-components'

import CRALogoBase from './CRA-logo.svg'

export const Container = styled.div`
  background-color: #282c34;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: white;
`

export const CRALogo = styled(CRALogoBase)`
  height: 70%;
`
