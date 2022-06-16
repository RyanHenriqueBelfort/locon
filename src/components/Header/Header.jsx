import { HeaderStyle } from './StyleHeader'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useCart } from '../../context/CartContext'
import { Cart } from '../Cart/Cart';
import { Favorite } from '../Favorite/Favorite';


export const Header = () => {
  const { moviesCart, setSearch } = useCart()
  const [cartOnScreen, setCartOrScreen] = useState()
  const [favoriteOnScreen, setFavoriteOrScreen] = useState()

  const [searchByWord, setSearchByWord] = useState('')

  const handleSearch = (e) => {
    setSearchByWord(e.target.value.replace(/\s/g, '+'))
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setSearch(searchByWord)
    }
  }

  const cartScreen = () => {
    setFavoriteOrScreen(0)
    if(cartOnScreen === 1) {
      setCartOrScreen(0)
    }else {
      setCartOrScreen(1)
    }
  }

  const favoriteScreen = () => {
    setCartOrScreen(0)
    if(favoriteOnScreen === 1) {
      setFavoriteOrScreen(0)
    }else {
      setFavoriteOrScreen(1)
    }
  }
  

  
  return (
    <>
      <HeaderStyle className="header" data-aos={"fade-down"}> 
        <h1>LocOn</h1>

        <div className="search">
          <input type="text" placeholder='Pesquisa' onChange={handleSearch} onKeyPress={handleKeyPress} />
          <SearchIcon className="search-icon" />
        </div>

        <div className="icons">
          <FavoriteIcon className="icon" onClick={favoriteScreen}></FavoriteIcon>

          <ShoppingCartIcon className="icon" onClick={cartScreen}></ShoppingCartIcon>
          <span className="count-cart">{moviesCart.length}</span>
        </div>
      </HeaderStyle>
      {cartOnScreen && <Cart />}
      {favoriteOnScreen &&<Favorite />}
    </>
  )

}