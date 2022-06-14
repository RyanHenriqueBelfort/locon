import {Container} from './StyleEmpty'
import { useCart } from '../../context/CartContext'


export const Empty = ({getMethod}) => {
  return (
    <Container>
      <button onClick={getMethod}>Esvaziar</button>
    </Container>
  )
}