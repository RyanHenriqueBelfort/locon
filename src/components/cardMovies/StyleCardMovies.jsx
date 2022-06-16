import styled from "styled-components";


export const StyleCardMovies = styled.div`
  width: 80%;
  gap: 2rem;
  display: flex;
  justify-content: center;
  
  flex-flow: row wrap;
  margin: 7rem auto 0 auto;
  /* background-color: darkgray; */
  h5{
    text-align: center;
    font-size: 1rem;
  }

  .date{
    background-color: #fff;
    text-align: center;
  }
  .card {
    position: relative;
    width: 300px;
    height: auto;
    border: 2px solid #333;
    img{
      transition: all 0.5s;
      width: 300px;
      height: 450px;
      object-fit: cover;
      
      &:hover{
        transform: scale(1.1);
      }
    }
  }
  .title{
    border-top: 2px solid #333;
    font-size: 1.2rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;

    .coracao{
      padding: 0.5rem;
      color: red;  
      /* border-radius: 100%; */
      /* background-color: #ffc107; */
      cursor: pointer;
      transition: all 0.5s;
      &:hover{
        transform: scale(1.5);
      }
    }
  }

  .card-body {
    padding: 1rem;
    background-color: white;
    height: auto;
  }

  .average_genre{
    display: flex;
    justify-content: space-between;

    .star{
      display: flex;
      align-items: center;
    }
  }

  .btn{
    background-color: #ffc107;
    border: none;
    width: 100%;
    height: 3rem;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
  }
  
`