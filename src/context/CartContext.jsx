import {createContext, useEffect, useState, useContext} from 'react'

export const CartContext = createContext([])

export function CartContextProvider({children}) {
  const API_KEY = 'fda393a1f3c7005d8a496308b6a741ac';
  const [movie, setMovie] = useState([])
  const [moviesCart, setMoviesCart] = useState([])
  const [cost, setCost] = useState(0)
  const [favorite, setFavorite] = useState([])
  const [search, setSearch] = useState('')
  const [nextPage, setNextPage] = useState(1)
  
  console.log(moviesCart)
  useEffect(() => {
    if (search) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`)
        .then(response => response.json())
        .then(data => setMovie(data.results))
    } else{ 
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${nextPage}`)
        .then(response => response.json())
        .then(data => setMovie(data.results))
    }

  }, [search, nextPage])

  console.log(search)


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

  const getSearch = (search) => {
    setSearch(search)
  }

  const Npage = () =>{
    setNextPage(nextPage + 1)
  }
  const Ppage = () =>{
    if(nextPage > 1){
      setNextPage(nextPage - 1)
    }
  }

  console.log(nextPage)


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
    handleDeleteFavorite,
    setSearch,
    Npage,
    Ppage,
    nextPage
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)

