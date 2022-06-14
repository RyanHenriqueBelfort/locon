import { useCart } from '../../context/CartContext'
import { Container } from './StyleCart'

import { Trash } from '../trash/Trash'
import { Empty } from '../Empty/Empty'

export const Cart = () => {
  const { moviesCart, cost, deleteAllMoviesCart, handleDeleteCart} = useCart()

  return (
    <Container>
      <div className="header">
        <h3>Carrinho</h3>
        <Empty getMethod={deleteAllMoviesCart}></Empty>
      </div>
      {moviesCart.map((movie, i) => (
        <div key={i} className="movies">
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
          <span>{movie.title}</span>
          <div className="end">
            <p>R$ 9.90</p>
            <Trash movie={movie} getMethod={handleDeleteCart}/>
          </div>
        </div>
      )
      )}
      <div className="Total">
        {moviesCart ? <div className="total">Total: R$ {cost.toFixed(2)}</div> : null}
      </div>
    </Container>
  )
}