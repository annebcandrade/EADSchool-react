import styled from "styled-components";
import BackgroundBlue from '../../assets/azul.png'

export const Background = styled.div`
    background-image: url(${BackgroundBlue});
    height: 51.5vh;
    font-family: 'Inter', sans-serif;
    position: relative;
    margin-top: -20px;


    .Homem {
    width: 280px;
    margin-top: -227px;
    margin-left: 900px; 
  }

  @media (max-width: 768px) {
    .Homem {
     display: none;
    }
  }





`

export const HeaderBlue = styled.div`
    font-family: 'Inter', sans-serif;
    display: flex;
   color: #fff;
   background-color: transparent;
   backdrop-filter: blur(90px);
   gap: 100px;
   margin-top: 20px;
   font-weight: 500;
   font-size: 15.5px;

   @media (max-width: 768px) {
   display:flex;
   flex-direction: column;
   height: 50px;
   width: 50px;
   margin-top: 20px;
  }


`

export const BtnServices = styled.button`
    background-color: transparent;
    border:  none;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 20px;
    cursor: pointer;

    @media (max-width: 768px) {
    width: 100%; 
    margin-top: 210px;
    margin-left: 20px;
  }
`
export const SelectLinguage = styled.button`
    background-color: transparent;
    border:  none;
    color: #fff;
    font-family: 'Inter', sans-serif;
    margin-bottom: 20px;
    cursor:pointer;

    @media (max-width: 768px) {
    width: 100%; 
    margin-top: -790px;
    margin-left: 90px;
  }
`

export const Icons = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
margin-top: -55px;

@media (max-width: 768px) {
    display: none;
  }
`

export const ContainerInfos = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  gap: 20px;
  width: 50%;
  max-width: 800px;
  margin-top: -40px; 
  position: relative;
  margin-left: 120px;

  h2{
    font-family: 'Degular' sans-serif;
    font-weight: 600;
    font-size: 16px;
    Opacity: 75%;
    font-size: 1rem;
  }

  h1{
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 1rem;
  }

  h3{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }


  @media (max-width: 768px) {
    width: 90%; 
    margin-left: 20px; 
    margin-top: 30px;
  }

  button {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color: #fff;
    background-color: transparent;
    border: none;
    display: flex;
    height: 30px;
    justify-content: space-between;
    font-size: 0.8rem; 
    padding: 5px 10px; 
    margin-right: 10px;
    cursor: pointer;

    @media (max-width: 768px) {
   display: none;
  }

    .button-two{
    margin-top: -40px;
    margin-left: 200px; 
  }

  span{
    margin-top: -30px;
  }
}
`







  
