import React from 'react'
import styled from 'styled-components';

const FiltersContainer = styled.div`
    border: 1px solid #EAEEF2;
    border-radius: 12px;
    padding: 24px;
    background-color: #FFFFFF;
`;

const InputContainer = styled.label`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 8px;

    input {
        background-color: #FFFFFF;
        height: 24px;
        border: 1px solid #EAEEF2;

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
