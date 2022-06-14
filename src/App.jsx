import { GlobalStyles } from '@mui/styled-engine'
import { useEffect, useState, useContext, createContext } from 'react'
import { CardMovie } from './components/cardMovies/CardMovies';
import { Cart } from './components/Cart/Cart';

import { GlobalStyle } from './GlobalStyle'
import { StyleCardMovies } from './components/cardMovies/StyleCardMovies'
import { CartContextProvider } from './context/CartContext';
import { Favorite } from './components/Favorite/Favorite';
import { Header } from './components/Header/Header';

function App() {

  return (
    <>
      <CartContextProvider>
        <Header></Header>
        {/* <Cart></Cart>
        <Favorite></Favorite> */}
        <CardMovie></CardMovie>
        <GlobalStyle />
      </CartContextProvider>

    </>
  )
}

export default App
