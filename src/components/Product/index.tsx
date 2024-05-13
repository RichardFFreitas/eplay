import React from 'react'
import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => {
  return (
    <Card>
      <img src="//placehold.it/222x250" alt="" />
      <Titulo>Nome do jogo</Titulo>
      <Tag>Categoria</Tag>
      <Tag>Plataforma</Tag>
      <Descricao>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laborum
        dolor velit sunt itaque quis omnis, harum a rem alias odit nemo nobis
        obcaecati sapiente, optio distinctio commodi, voluptates reiciendis.
      </Descricao>
    </Card>
  )
}

export default Product
