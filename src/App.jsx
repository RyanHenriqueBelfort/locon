import {useEffect} from 'react'
// import { Routes, Route, Link } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
// import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Navigate, useNavigate} from "react-router-dom";
import Aos from 'aos'
import "aos/dist/aos.css"


import { GlobalStyle } from './GlobalStyle'
import { CartContextProvider } from './context/CartContext';
import { Favorite } from './components/Favorite/Favorite';
import { Header } from './components/Header/Header';
import { ButtonPage } from './components/ButtonPage/ButtonPage';
import { Content } from './pages/Content/Content';
import {Purchase} from './pages/Purchase/Purchase'

function App() {

  useEffect(() =>{
    Aos.init({duration: 1000})
  },[])

  return (
    <>
      <CartContextProvider>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Content />} /> 
            <Route path="/purchase" element={<Purchase />} />
          </Routes>
        </Router>
        
        <GlobalStyle />
      </CartContextProvider>
    </>
  )
}

export default App
