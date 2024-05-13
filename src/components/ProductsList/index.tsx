import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  bg: 'gray' | 'black'
}

const ProductsList = ({ bg, title }: Props) => {
  return (
    <Container bg={bg}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          <Product
            category="Ação"
            description="Test"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$150']}
            system="Windows"
            title="Nome do jogo"
          />
          <Product
            category="Ação"
            description="Test"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$150']}
            system="Windows"
            title="Nome do jogo"
          />
          <Product
            category="Ação"
            description="Test"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$150']}
            system="Windows"
            title="Nome do jogo"
          />
          <Product
            category="Ação"
            description="Test"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$150']}
            system="Windows"
            title="Nome do jogo"
          />
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
