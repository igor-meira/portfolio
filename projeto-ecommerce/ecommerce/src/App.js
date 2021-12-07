import React from 'react';
import { Filters } from './Components/Filters/Filters';
import { Products } from './Components/Products/Products';
import { ShoppingCart } from './Components/ShoppingCart/ShoppingCart';
import styled from 'styled-components'

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  paddin: 16px;
  gap: 8px;
  
`

function App() {
  return (
    <AppContainer>
      <Filters/>
      <Products/>
      <ShoppingCart/>
    </AppContainer>
  );
}

export default App;
