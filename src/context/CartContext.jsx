import {createContext, useEffect, useState, useContext} from 'react'

export const CartContext = createContext([])

export function CartContextProvider({children}) {
  const API_KEY = 'fda393a1f3c7005d8a496308b6a741ac';
  const [movie, setMovie] = useState([])
  const [moviesCart, setMoviesCart] = useState([])
  const [cost, setCost] = useState(0)
  const [favorite, setFavorite] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
      .then(response => response.json())
      .then(data => setMovie(data.results))
  }, [])


  const getMovies = (movie) => {
    const movieExist = moviesCart.find(item => item.id === movie.id)
    if (movieExist) {
      alert('Você já adicionou esse filme')
    }
    else {
      setCost(cost + 9.90)
      
      setMoviesCart(movies => [...movies, movie])
    }
  }

  const getMoviesFavorite = (movie) => {
    const movieExist = favorite.find(item => item.id === movie.id)
    if (movieExist) {
      alert('Você já adicionou esse filme')
    }
    else {
      setFavorite(movies => [...movies, movie])
    }
  }

  async function handleDeleteCart(movie){
    const newMoviesCart = moviesCart.filter(item => item.id !== movie.id)
    setMoviesCart(newMoviesCart)
    setCost(cost - 9.90)
  }

  async function handleDeleteFavorite(movie){
    const newFavorite = favorite.filter(item => item.id !== movie.id)
    setFavorite(newFavorite)
  }

  
  const deleteAllMoviesCart = () => {
    setMoviesCart([])
    setCost(0)
  }
  
  const deleteAllFavoriteMovies = () => {
    setFavorite([])
  }

  return(
    <CartContext.Provider value={{movie, 
    moviesCart, 
    getMovies, 
    cost, 
    setMoviesCart, 
    setCost, 
    deleteAllMoviesCart, 
    favorite,
    setFavorite,
    getMoviesFavorite,
    deleteAllFavoriteMovies,
    handleDeleteCart,
    handleDeleteFavorite
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)

