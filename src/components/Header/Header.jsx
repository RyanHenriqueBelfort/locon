import { HeaderStyle } from './StyleHeader'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useCart } from '../../context/CartContext'


export const Header = ()=> {
  const {moviesCart, setSearch} = useCart()

  const [searchByWord, setSearchByWord] = useState('')

  const handleSearch = (e) => {
    setSearchByWord(e.target.value.replace(/\s/g, '+'))
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      setSearch(searchByWord)
    }
  }


  return (
    <HeaderStyle className="header">
      <h1>LocOn</h1>

      <div className="search">
        <input type="text" placeholder='Pesquisa' onChange={handleSearch} onKeyPress={handleKeyPress}/>
        <SearchIcon className="search-icon"/>
      </div>

      <div className="icons">
        <FavoriteIcon className="icon"></FavoriteIcon>
        
        <ShoppingCartIcon className="icon"></ShoppingCartIcon>
        <span className="count-cart">{moviesCart.length}</span>
      </div>
    </HeaderStyle>
  )
  
}