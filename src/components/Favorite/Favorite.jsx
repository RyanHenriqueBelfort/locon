import {Container} from './StyleFavorite'
import { Empty } from '../Empty/Empty'
import { useCart } from '../../context/CartContext'
import { Trash } from '../trash/Trash'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export const  Favorite = () => { 
  const { favorite, deleteAllFavoriteMovies, handleDeleteFavorite, getMovies} = useCart()

  return (
    <Container>
      <div className="header">
        <h3>Favoritos</h3>
        <Empty getMethod={deleteAllFavoriteMovies}></Empty>
      </div>
      {favorite.map((movie, i) => (
        <div key={i} className="movies">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
            <span>{movie.title}</span>

          <div className="end">
            <p>R$ 9.90</p>
            <div className="addCart">
              <AddShoppingCartIcon onClick={() => getMovies(movie)}></AddShoppingCartIcon>
            </div>
            <Trash movie={movie} getMethod={handleDeleteFavorite}/>
          </div>
          
        </div>
      )
      )}
    </Container>
  )
}