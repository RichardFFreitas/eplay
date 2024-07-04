import React from 'react'
import resident from '../../assets/images/resident.png'

import Section from '../Section'
import { Item, Items } from './styles'

const Gallery = () => {
  return (
    <Section title="Galeria" background="black">
      <Items>
        <Item>
          <img src={resident} alt="imagem do leon" />
        </Item>
        <Item>
          <img src={resident} alt="imagem do leon" />
        </Item>
        <Item>
          <img src={resident} alt="imagem do leon" />
        </Item>
        <Item>
          <img src={resident} alt="imagem do leon" />
        </Item>
      </Items>
    </Section>
  )
}

export default Gallery
