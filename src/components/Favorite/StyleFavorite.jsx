import styled from "styled-components";
import { useCart } from '../../context/CartContext'

export const Container = styled.div`
  position: fixed;
  right: 0;
  top: 3.75rem;
  height: 70%;

  z-index: 1000;
  display: flex;
  flex-direction: column;
  background-color: #ddb8b8;
  width: 25%;
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 0.5rem;
    h3{
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
  .movies{
    display: flex;
    font: 0.9rem 'Roboto', sans-serif;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;
    
    &:last-child{
      border-bottom: none;
    }
    img{
      width: 50px;
      height: 65px;
    }
    .end{
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* background-color: coral; */
      width: 8rem;
      p{
        font-size: 0.9rem;
        font-weight: 600;
      }
      .addCart{
        cursor: pointer;
        transition: all 0.3s;
        &:hover{
          color: #2494a3;
        }
      }
    }
  }
`