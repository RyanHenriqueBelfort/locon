import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  right: 0;
  top: 3.75rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  background-color: #a9c5f5;
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
      justify-content: flex-end;
      width: 8rem;
      p{
        margin-right: 1rem;
        font-size: 0.9rem;
        font-weight: 600;
      }
    }
  }
  .total{
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #ccc;
    &:last-child{
      border-top: none;
    }
  }
`