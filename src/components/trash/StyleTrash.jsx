import styled from "styled-components";

export const Container = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      /* background-color: #ccc; */
      cursor: pointer;
      &:hover{
        transform: scale(1.1);
        color: red;
      }
      &:active{
        transform: scale(0.9);
      }
`