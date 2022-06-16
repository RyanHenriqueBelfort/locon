import {useState} from 'react'
import { Container } from './StylePurchase'

import { useCart } from '../../context/CartContext'

export const Purchase = () => {
  const { moviesCart, cost, deleteAllMoviesCart, handleDeleteCart } = useCart()
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [cep, setCep] = useState('')
  const [backToHome, setBackToHome] = useState(0)

  const handleSubmit = ()=>{
    if(name === '' || cpf === '' || email === '' || cep === ''){
      alert('Preencha todos os campos obrigatórios')
    } else {
      alert('Compra realizada com sucesso')
      setBackToHome(1)
    }
  }

  return (
    <Container>
      <div className="form">
        <form action="">
          <h1>Finalizar compra</h1>
          <input type="text" className="name" placeholder="Nome Completo *" onChange={(e) => setName(e.target.value)}/>

          <div className="cpf-phone">
            <input type="text" placeholder="CPF *" onChange={(e) => setCpf(e.target.value)}/>
            <input type="text" placeholder="Celular" />
          </div>

          <input type="email" className="email" placeholder="Email*" onChange={(e) => setEmail(e.target.value)}/>

          <div className="cep-address">
            <input type="text" name="" id="" placeholder="CEP *" onChange={(e) => setCep(e.target.value)}/>
            <input type="text" name="" id="" placeholder="Endereço" />
          </div>

          <div className="city-state">
            <input type="text" name="" id="" placeholder="Cidade" />
            <input type="text" name="" id="" placeholder="Estado" />
          </div>
        </form>
      </div>
      <div>
        <div className="table">
          {moviesCart.map((movie, i) => (
            <div key={i} className="movies">
              <table>
                <tr>
                  <th>Imagem</th>
                  <th>Nome</th>
                  <th>Preço</th>
                </tr>
                <tr>
                  <td><img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" /></td>
                  <td>{movie.title}</td>
                  <td>R$ 9.90</td>
                </tr>
              </table>
            </div>
          )
          )}
        </div>
        {moviesCart.length === 0 ? (
         null

        ) :  <>
        <div className="total">
          <span>
            Total:
          </span>
          <span>
            R$ {cost.toFixed(2)}
          </span>
        </div>
        {backToHome === 0 ? (
          <a>
          <button className="btn" onClick={handleSubmit}>Finalizar Pedido</button>
        </a>
        ):(
          <a href="/">
          <button className="btn" onClick={handleSubmit}>Finalizar Pedido</button>
          </a>
        )}
      </>}

      </div>
    </Container>
  )
}