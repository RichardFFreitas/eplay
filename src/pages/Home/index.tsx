import React from 'react'
import ProductsList from '../../components/ProductsList'
import Banner from '../../components/Banner'
import Game from '../../models/Game'

import Resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starwars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Residente Evil',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: Resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Residente Evil',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Residente Evil',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starwars
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Residente Evil',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'Ação',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    title: 'Zelda',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'Ação',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 8,
    category: 'Ação',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  }
]

const Home = () => {
  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoções" bg="gray" />
      <ProductsList games={emBreve} title="Promoções" bg="black" />
    </>
  )
}

export default Home
