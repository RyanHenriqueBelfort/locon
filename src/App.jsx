import { CardMovie } from './components/cardMovies/CardMovies';
import { Cart } from './components/Cart/Cart';

import { GlobalStyle } from './GlobalStyle'
import { CartContextProvider } from './context/CartContext';
import { Favorite } from './components/Favorite/Favorite';
import { Header } from './components/Header/Header';
import { ButtonPage } from './components/ButtonPage/ButtonPage';

function App() {

  return (
    <>
      <CartContextProvider>
        <Header></Header>
        <CardMovie></CardMovie>
        <ButtonPage></ButtonPage>
        <GlobalStyle />
      </CartContextProvider>

    </>
  )
}

export default App
