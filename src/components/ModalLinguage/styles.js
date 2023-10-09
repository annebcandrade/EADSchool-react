import styled from "styled-components";

export const Container = styled.div`
   width: 20%;
    background-color: #fff;
    margin-left: 500px;
    padding: 20px;
    border:none;

    @media (max-width: 768px) {
   display:flex;
   flex-direction: column;
   height: 5%;
   width: 5%;
   margin-left: -10px;
  }
    `

export const ButtonFechar = styled.button`
      background-color: #5F41D9;
    border:  none;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
    cursor: pointer;

`


export const ContainerModal = styled.div`
    display: flex;
    flex-direction: column;
`
