import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;

  p {
    margin: 0;
  };

  button {
    background-color: #EAEEF2;
    height: 32px;
    border: 1px solid #EAEEF2;
    margin-left: 8px
    border-radius: 12px;
  };

  button:hover {
    background-color: #FFFFFF;
  }
`


export class ShoppingCartItem extends React.Component {
  render() {
    return <ItemContainer>
      <p>{this.props.cartItem.quantity}x</p>
      <p>{this.props.cartItem.name}</p>
      <button 
        onClick={() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}
      >
        Remover
      </button>
    </ItemContainer>
  }
}
