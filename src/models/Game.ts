class Game {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number

  constructor(
    id: number,
    category: string,
    system: string,
    description: string,
    infos: string[],
    image: string,
    title: string
  ) {
    this.id = id
    this.description = description
    this.title = title
    this.category = category
    this.system = system
    this.infos = infos
    this.image = image
  }
}

export default Game
