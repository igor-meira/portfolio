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
const products = [
  {
    id: 1,
    name: 'Produto Legal',
    price: 70,
    photo: 'https://picsum.photos/250/200?a=1'
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 200,
    photo: 'https://picsum.photos/250/200?a=2'
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 30,
    photo: 'https://picsum.photos/250/200?a=3'
  },
  {
    id: 4,
    name: 'Produto 4',
    price: 150,
    photo: 'https://picsum.photos/250/200?a=4'
  },
  
]

class App extends React.Component {
  state = {
      minFilter: '10',
      maxFilter: '1000',
      nameFilter: 'produto'
  }

  render() {
    return (
      <AppContainer>
        <Filters
            minFilter={this.state.minFilter}
            maxFilter={this.state.maxFilter}
            nameFilter={this.state.nameFilter}
        />
        <Products products={products}/>
        <ShoppingCart/>
      </AppContainer>
    );
  }  
}

export default App;
