import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 7rem auto 0 auto;
  width: 80%;
  
  .form{
    width: auto;
    padding: 1rem;
    border-radius: 5px;
    input{
      height: 2rem;
      border: 1px solid #333;
      border-radius: 0.3rem;
      padding: 0.5rem;
      font-size: 1.2rem;
      margin: 1rem 0;
      &::placeholder{
        color: #333;
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
    .name{
      width: 96.3%;
    }
    .cpf-phone{
      display: flex;
      justify-content: space-between;
      input{
        width: 45%;
      }
    }
    .email{
      width: 96.3%;
    }
    .cep-address{
      display: flex;
      justify-content: space-between;
      input{
        width: 65%;
      }
      input:nth-child(1){
        width: 25%;
      }
  }

  .city-state{
    display: flex;
    justify-content: space-between;
    input{
      width: 45%;
    }
  }
}

.table{
  overflow: auto;
  height: 30rem;
  .movies{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 0.2rem solid #ccc;
    &:last-child{
      border-bottom: none;
    }
    table{
      width: 100%;
      border-collapse: collapse;
      tr{
        display: flex;
        justify-content: space-between;
        &:last-child{
          border-bottom: none;
        }
      }
      th{
        font-size: 1.2rem;
        font-weight: 600;
        padding: 0.5rem;
      }
      td{
        font-size: 1.2rem;
        font-weight: 600;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:last-child{
          border-bottom: none;
        }
    }
  }
}
  
  img{
    object-fit: cover;
    width: 90px;
    height: 105px;
  }

}
.total{
  font-size: 1.4rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.2rem solid #ccc;
  span:nth-child(2){
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem;
  }
}
.btn{
  cursor: pointer;
  width: 100%;
  height: 3rem;
  background-color: #00bcd4;
  border: none;
  border-radius: 0.3rem;
  color: #333;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 1rem 0;
  &:hover{
    background-color: #333;
    color: #fff;
  }
}
`