import React from 'react'
import styled from 'styled-components'


//border: 1px solid black;
//diplay: flex;
//flex-direction: column;

const CardContainer = styled.div`
    background: #FFFFFF;
    border: 1px solid #EAEEF2;
    box-sizing: border-box;
    box-shadow: 0px 8px 24px rgba(112, 144, 176, 0.15);
    border-radius: 12px;
    justify-content: center;
`
const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;

    p {
        margin: 4px 0;
        padding: 8px;
    }
`
const AddToCartButton = styled.button`
    align-self: center;
    margin-top: 8px;
`

export class ProductCard extends React.Component {
    render() {
        return <CardContainer>
            <img src={'https://picsum.photos/200/200'} alt='imagem do produto'/>
            <CardInfo>
                <p>Produto</p>
                <p>R$ 100,00</p>
                <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
            </CardInfo>
        </CardContainer>
    }
}