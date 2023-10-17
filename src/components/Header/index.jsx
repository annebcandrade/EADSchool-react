
import Arrow from '../../assets/arrow.png'
import User from '../../assets/UserProfile.png'
import Now from '../../assets/btn-now.png'
import Playlist from '../../assets/playlists.png'
import PlaylistBlue from '../../assets/playlist-blue.png'
import Certificado from '../../assets/certificado.png'
import Celular from '../../assets/celular.png'
import BtnComecar from '../../assets/btn.png'
import Play from '../../assets/Play.png'
import Man from '../../assets/man.png'
import { Background, HeaderBlue, BtnServices, SelectLinguage, Icons, ContainerInfos} from './styles'
import { useState } from 'react'
import ModalServicos from '../Modal'
import ModalLinguage from '../ModalLinguage'
import { useTranslation } from 'react-i18next'

function Header(){

    const {t} = useTranslation();


    
    const [openLinguageModal, setOpenLinguageModal] = useState(false);
  const [openServicosModal, setOpenServicosModal] = useState(false);

  const handleOpenLinguageModal = () => {
    setOpenLinguageModal(true);
  };

  const handleOpenServicosModal = () => {
    setOpenServicosModal(true);
  };

    return (
        <main>
        <Background>
        <div className="HeaderBackground"></div>
            <HeaderBlue>
           <BtnServices onClick={handleOpenServicosModal}>{t("Servicos")}<img src={Arrow}></img></BtnServices>
            <p>{t("Preços")}</p>
            <p>{t("Academy")}</p>
            <p>{t("Blog")}</p>
            <p>{t("Contato")}</p>
            <p>|</p>
            <p><img src={User}></img>{t("Entrar")}</p>
            <p><img src={Now}></img></p>
            <SelectLinguage  onClick={handleOpenLinguageModal}>PT<img src={Arrow}></img>
            </SelectLinguage>
            </HeaderBlue>
            <Icons>
                <img src={Playlist} className='icon-esquerda'></img>
                <img src={Certificado}className='icon-centro'></img>
                <img src={PlaylistBlue} className='icon-direita'></img>
            </Icons>
            <ContainerInfos>
                <h2><img src={Celular}></img>{t("PlataformaAll")} </h2>
                <h1>{t("EscolaOnline")}</h1>
                <h3>{t("EadCompleto")}</h3>
                <button><img src={BtnComecar} className='button-one'></img></button>
                <button><img src={Play} className='button-two'></img><span>{t("VerVideo")}</span></button>
                </ContainerInfos>
               
                <img src={Man} className='Homem'></img>
               </Background>
               {openLinguageModal && <ModalLinguage isOpen={openLinguageModal} setModalOpen={() => setOpenLinguageModal(false)} />}
                {openServicosModal && <ModalServicos isOpen={openServicosModal} setModalOpen={() => setOpenServicosModal(false)} />}
               
        </main>
    )
}

export default Header