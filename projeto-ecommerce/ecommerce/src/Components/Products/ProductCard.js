import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border: 1px solid #EAEEF2;
    box-shadow: 0px 8px 24px rgba(112, 144, 176, 0.15);
    border-radius: 12px;
`;

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;

  p {
    margin: 4px 0;
  }
`

const AddToCartButton = styled.button`
    align-self: center;
    margin-top: 4px;
`

export class ProductCard extends React.Component {
  render() {
    const product = this.props.product
    return <CardContainer>
      <img src={product.photo} alt='imagem do produto'/>
      <CardInfo>
        <p>{product.name}</p>
        <p>R${product.price},00</p>
        <AddToCartButton onClick={() => this.props.onAddProductToCart(product.id)}>
          Adicionar ao carrinho
        </AddToCartButton>
      </CardInfo>
    </CardContainer>
  }
}