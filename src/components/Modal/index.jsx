
import PropTypes from 'prop-types';
import Item1 from '../../assets/ead.png'
import Gamification from '../../assets/gamification.png'
import Social from '../../assets/icon-social.png'
import App from '../../assets/icon-app.png'
import { useTranslation } from 'react-i18next'

import { ButtonFechar, Container, ContainerModal, ImgOne } from './styles'

function Modal({ isOpen, setModalOpen, children }) {

  const {t} = useTranslation();

    if (isOpen) {
      return (
        <Container>
          {children}
          <ButtonFechar onClick={setModalOpen}>X</ButtonFechar>
          <p>{t("SolucoesPrincipais")}</p>
          <ContainerModal>
            <div className="group">
            <div className='option'>
              <ImgOne src={Item1}></ImgOne>
              <div className='option'>
              <div className='text'>
                  <h1>{t("CrieEscolaOnline")}</h1>
                  <p>Lorem ipsum dolor sit amet</p>
                  </div>
                  </div>
                <img src={App} className='img1'></img>
                <div className='text'>
                  <h1>{t("Aplicativo")}</h1>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className='option'>
                <img src={Social} className='img2'></img>
                <div className='text'>
                  <h1>{t("ComunidadeRede")}</h1>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div className='option'>
                <img src={Gamification} className='img3'></img>
                <div className='text'>
                  <h1>{t("Gamificacao")}</h1>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
          </ContainerModal>
        </Container>
      );
    }
  
    return null;
  }

  Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setModalOpen: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };
  
  export default Modal;