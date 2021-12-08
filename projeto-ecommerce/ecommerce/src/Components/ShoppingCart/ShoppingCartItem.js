import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
    align-items: center;

    p {
        margin: 0;
    };
    `

export class ShoppingCartItem extends React.Component {
    render() {
        return <ItemContainer>
            <p>{this.props.cartItem.quantity}x</p>
            <p>{this.props.cartItem.name}</p>
            <button>Remover</button>
        </ItemContainer>
    }
}