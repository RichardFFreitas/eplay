// import { useParams } from 'react-router-dom'
import Gallery from '../../components/Gallery'
import Hero from '../../components/Hero'
import hogwarts from '../../assets/images/fundo_hogwarts.png'

const Product = () => {
  // const { id } = useParams()
  return (
    <>
      <Hero />
      <Gallery name="jogo teste" defaultCover={hogwarts} />
    </>
  )
}

export default Product
