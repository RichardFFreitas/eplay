import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  title: string
  bg: 'gray' | 'black'
}

const ProductsList = ({ bg, title }: Props) => {
  return (
    <Container>
      <div className="container">
        <h2>{title}</h2>
        <List>
          <Product />
          <Product />
          <Product />
          <Product />
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
