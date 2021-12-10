import React from 'react'
import styled from 'styled-components';

const FiltersContainer = styled.div`
    border: 1px solid #00FFFF;
    box-shadow: 0px 8px 24px rgba(112, 144, 176, 0.15);
    border-radius: 12px;
    padding: 8px;
    background-color: #EAEEF2;
`;

const InputContainer = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8px;

    input {
        background-color: #E5E5E5;
    }
`

export class Filters extends React.Component {
  render() {
    return <FiltersContainer>
      <h3>Filtros</h3>
        <InputContainer>
          Valor mínimo:
          <input
            type="number"
            value={this.props.minFilter}
            onChange={this.props.onChangeMinFilter}
          />
        </InputContainer>
        <InputContainer>
          Valor máximo:
          <input
            type="number"
            value={this.props.maxFilter}
            onChange={this.props.onChangeMaxFilter}
          />
        </InputContainer>
        <InputContainer>
          Busca por nome:
          <input
            type="text"
            value={this.props.nameFilter}
            onChange={this.props.onChangeNameFilter}
          />
        </InputContainer>
    </FiltersContainer>
  }
}
