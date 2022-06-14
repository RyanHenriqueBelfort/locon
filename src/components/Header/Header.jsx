import { HeaderStyle } from './StyleHeader'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';


export const Header = ()=> {
  return (
    <HeaderStyle className="header">
      <h1>LocOn</h1>

      <div className="search">
        <input type="text" placeholder='Pesquisa'/>
        <SearchIcon className="search-icon"/>
      </div>

      <div className="icons">
        <FavoriteIcon className="icon"></FavoriteIcon>
        <ShoppingCartIcon className="icon"></ShoppingCartIcon>
      </div>
    </HeaderStyle>
  )
  
}