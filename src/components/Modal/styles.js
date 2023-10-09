import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #fff;
    margin-left: 300px;
    padding: 20px;

    @media (max-width: 768px) {
   display:flex;
   flex-direction: column;
   height: 5%;
   width: 5%;
   margin-left: -10px;
  }

    p {
        color: #5F41D9;
        font-family: 'Degular', sans-serif;
        font-weight: 600;
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



export const ImgOne = styled.img`
    height: 50px;
    width: 60px;
`

export const ContainerModal = styled.div`
    display: flex;
    flex-direction: column;
  align-items: flex-start;

  .group {
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  margin-bottom: 20px; 
}

  .option {
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* Espaço entre as opções */
}

.option img {
  width: 100px; /* Tamanho da imagem */
  margin-right: 20px; /* Espaço entre a imagem e o texto */
}

.option .text {
  display: flex;
  flex-direction: column;
}

img {
    height: 50px;
}

.img1, .img2, .img3{
    width: 50px;
    height: 60px;
}

    h1 {
        color:  rgba(19, 12, 37, 1);
        font-family: 'Degular', sans-serif;
        font-weight: 600;
        font-size: 15px;
    }

    p{
        color: #423D51;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 13px;
    }

    

`
