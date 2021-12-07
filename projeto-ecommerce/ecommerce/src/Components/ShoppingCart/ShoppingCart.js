import React from 'react'
import { ShoppingCartItem } from './ShoppingCartItem'
import styled from 'styled-components'

const ShoppingCartContainer = styled.div`
    border : 1px solid blue;
    margin: 8px;

`
const CartListContainer = styled.div`
    display: grid;

`

export class ShoppingCart extends React.Component {
    render() {
        return <ShoppingCartContainer>
            <h3>Carrinho:</h3>
            
            <CartListContainer>
                <ShoppingCartItem/>
            </CartListContainer>
            
        </ShoppingCartContainer>
    }
}