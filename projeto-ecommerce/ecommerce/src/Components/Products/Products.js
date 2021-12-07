import React from 'react'
import { ProductCard } from './ProductCard'
import styled from 'styled-components'

export class Products extends React.Component {
    render() {
        return <div>
            Products
            <ProductCard/>
        </div>
    }
}