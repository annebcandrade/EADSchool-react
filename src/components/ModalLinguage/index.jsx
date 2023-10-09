
import PropTypes from 'prop-types';
import { ButtonFechar, Container, ContainerModal } from './styles';
import Pt from '../../assets/pt.png';
import Es from '../../assets/es.png';
import En from '../../assets/en.png';
import { useTranslation } from 'react-i18next';

function Modal({ isOpen, setModalOpen, children }) {
  const { i18n } = useTranslation();

  const languageOptions = [
    {
      name: "Português",
      value: "ptBR",
      flag: Pt
    },
    {
      name: "English",
      value: "en",
      flag: En
    },
    {
      name: "Espanhol",
      value: "es",
      flag: Es
    }
  ];

  const currentLanguage = i18n.language;

  if (isOpen) {
    return (
      <Container>
        {children}
        <ButtonFechar onClick={setModalOpen}>X</ButtonFechar>
        <ContainerModal>
          {languageOptions.map(languageOption => (
            currentLanguage !== languageOption.value && (
              <button
               key={languageOption.value}
               onClick={() => {
                i18n.changeLanguage(languageOption.value);
                setModalOpen(false);
              }}
            >
              <img src={languageOption.flag} alt={languageOption.name}/> 
              </button>
            )
          ))}
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