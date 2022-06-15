import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #8DD7CF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: 60px;
  border-bottom: 1px solid #e6e6e6;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }

  .search {
    margin-left: 30px;
    position: relative;
    input {
      width: 20rem;
      border: none;
      background-color: #fff;
      padding: 0 10px;
      border-radius: 4px;
      height: 30px;
      color: #333;
      outline: none;

      
      &::placeholder {
        color: #999;
        font-size: 1rem;
      }
    }
    .search-icon {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      color: #333; 
      cursor: pointer;
      font-size: 1.2rem;

      &:hover {
        color: #999;
      }
    }
  }
  .icons { 
    display: flex;
    width: 7%;
    justify-content: space-between;
    position: relative;
    align-items: center;
    .icon {
      margin-right: 10px;
      cursor: pointer;
      color: #333;
      font-size: 2rem;
    }
    .count-cart{
      font-size: 1rem;
      color: #fff;
      width: 0.7rem;
      height: 0.7rem;
      display: flex;
      align-items: center;
      background-color: #ffc107;
      border-radius: 50%;
      padding: 0.5rem;
      margin-left: 10px;
      position: absolute;
      top: -12px;
      right: -2px;
      z-index: 1;

    }
  }
`