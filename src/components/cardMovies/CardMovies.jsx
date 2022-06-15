import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useCart } from '../../context/CartContext';


import { StyleCardMovies } from './StyleCardMovies'

export const  CardMovie = () => {
  const {movie, getMovies, getMoviesFavorite } = useCart()
  
  return (

    <>
      <StyleCardMovies>
        {!movie && <div>Nenhum filme encontrado</div>}
        {movie && movie.map(item => (
              <div key={item.id} className="card">
                <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt="" />
              <div className="card-body">
                <div className="title">
                  <span>{item.title}</span>
                  <div className="coracao">
                    <FavoriteIcon fontSize='large' onClick={() => getMoviesFavorite(item)}></FavoriteIcon>
                  </div>
                </div>

                <div className="date">
                  <span>{item.release_date}</span>
                </div>
                  <p>
                    R$ 9.90
                  </p>

                <div className="average_genre">
                  <div className='star'>
                    <StarIcon></StarIcon>
                    <span>{item.vote_average}</span>
                  </div>
                  <div>
                    {item.genre_ids[0] === 28 ? <p>Ação</p> : null}
                    {item.genre_ids[0] === 12 ? <p>Aventura</p> : null}
                    {item.genre_ids[0] === 16 ? <p>Animação</p> : null}
                    {item.genre_ids[0] === 35 ? <p>Comédia</p> : null}
                    {item.genre_ids[0] === 80 ? <p>Crime</p> : null}
                    {item.genre_ids[0] === 99 ? <p>Documentário</p> : null}
                    {item.genre_ids[0] === 18 ? <p>Drama</p> : null}
                    {item.genre_ids[0] === 10751 ? <p>Família</p> : null}
                    {item.genre_ids[0] === 14 ? <p>Fantasia</p> : null}
                    {item.genre_ids[0] === 36 ? <p>História</p> : null}
                    {item.genre_ids[0] === 27 ? <p>Terror</p> : null}
                    {item.genre_ids[0] === 10402 ? <p>Música</p> : null}
                    {item.genre_ids[0] === 9648 ? <p>Mistério</p> : null}
                    {item.genre_ids[0] === 10749 ? <p>Romance</p> : null}
                    {item.genre_ids[0] === 878 ? <p>Ficção Científica</p> : null}
                    {item.genre_ids[0] === 10770 ? <p>TV</p> : null}
                    {item.genre_ids[0] === 53 ? <p>Suspense</p> : null}
                    {item.genre_ids[0] === 10752 ? <p>Guerra</p> : null}
                    {item.genre_ids[0] === 37 ? <p>Faroeste</p> : null}
                  </div>

                </div>
                <button className="btn" onClick={() => getMovies(item)}>Adicionar</button>
              </div>
            </div>
          ))}

      </StyleCardMovies>
    </>
  )
} 