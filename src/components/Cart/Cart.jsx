import { useCart } from '../../context/CartContext'
import { Container } from './StyleCart'

import { Trash } from '../trash/Trash'
import { Empty } from '../Empty/Empty'
import { Link } from "react-router-dom";


export const Cart = () => {
  const { moviesCart, cost, deleteAllMoviesCart, handleDeleteCart} = useCart()

  const styleLink = {
    textDecoration: 'none',
    color: '#fff',
    background: '#414040',
    borderRadius: '5px',
    fontSize: '1.2rem',
    fontWeight: '600',
    padding: '0.5rem',
    transition: 'all 0.3s',
    hover: {
      color: '#2494a3'
    }

  }

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
        <Link to="/purchase" style={styleLink}>
          Finalizar Pedido
        </Link>
      </div>
    </Container>
  )
}