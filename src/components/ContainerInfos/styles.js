import styled from "styled-components";

export const ContainerPrincipal = styled.div`
`

export const Paragrafos = styled.div`
    display: flex;
    gap: 600px;
    margin-left: 40px;
    margin-top: 20px;
    

    .img-line {
        margin-top: -40px;
    }

    .detalhe {
        font-family: 'Degular', sans-serif;
        font-weight: 600;
        color: rgba(67, 46, 152, 1);
;
    }

    .recursos{
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        color: rgba(66, 61, 81, 1);

    }

    @media (max-width: 768px) {
        margin-top: -600px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

`
export const ParagrafoUnico = styled.p`
    font-family: 'Degular', sans-serif;
    font-weight: 400;
    color: rgba(19, 12, 37, 1);
    font-size: 30px;
    margin-left: 40px;
    margin-top: 20px;
`

export const Trio = styled.div`
 padding: 20px;
    display: flex;
    margin-left: 40px;
    gap: 220px;

    h2{
        font-family: 'Degular', sans-serif;
        font-weight: 600;
        color: rgba(19, 12, 37, 1);
        font-size: 20px;

    }

    p{
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        color: rgba(66, 61, 81, 1);

    }

    @media (max-width: 768px) {
        height: 35px;
        gap: 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`
export const End = styled.div`
    padding: 20px;
    display: flex;
    gap: 600px;
    margin-left: 40px;
    margin-top: 20px;

  

    .help {
        font-family: 'Degular', sans-serif;
        font-weight: 600;
        font-size: 16px;
        color: rgba(66, 61, 81, 1);

        img {
        gap: 50px;
         height: 20px;
         vertical-align: middle; 
        }

    }

    .see {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        color: rgba(95, 65, 217, 1);
        font-size: 16px;

        img {
            height: 20px;
        }
    }

    @media (max-width: 768px) {
    display: none;
  }
    
`
