import { useCart } from '../../context/CartContext'

import { Container } from './StyleButtonPages'

export const ButtonPage = () => {
  const { Ppage, Npage, nextPage, movie } = useCart()
  return (
    <Container>
      {nextPage > 1 ? <button onClick={Ppage} className="button1">Previous Page</button> : null}
      {movie.length === 0 ? null : <button onClick={Npage} className="button2">Next Page</button>}
    </Container>
  )
}