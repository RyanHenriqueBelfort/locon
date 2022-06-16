import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 20%;
  margin: 1.5rem auto;
  padding: 0 20px;
  border-radius: 5px;
  .button1 {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 8rem;
    height: 3rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    background-color: #C82333;
    margin: 0 10px;
    cursor: pointer;
  }
  .button2 {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 8rem;
    height: 3rem;
    border: 1px solid #ccc;
    background-color: #0069D9;
    border-radius: 5px;
    padding: 10px;
    margin: 0 10px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  `