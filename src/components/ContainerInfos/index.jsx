import Trilha from '../../assets/icon-trilhas.png'
import PlaylistTwo from '../../assets/icon-playlists.png'
import Colecoes from '../../assets/colecoes.png'
import Down from '../../assets/Down.png'
import Rocket from '../../assets/Rocket.png'
import Line from '../../assets/line.png'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { api } from '../../services/api' 

import { ContainerPrincipal, Paragrafos, ParagrafoUnico, Trio, End } from './styles';

function ContainerInfos() {

    const [items,setItems] = useState([]);

    useEffect(() => {
      api.get('./items').then((response) => {
        console.log(response);
        setItems(response.data);
      });
    }, []);


   
    const {t} = useTranslation();

    

  return (
    <main>
    <ContainerPrincipal>
    <Paragrafos>
        <p  className='detalhe'><img src={Line} className='img-line'></img>{t("Pensamos")}</p>
        <p className='recursos'>{t("Conheca")} </p>
    </Paragrafos>
    <ParagrafoUnico>{t("Queremos")}</ParagrafoUnico>

    <Trio>
  {items.map((item) => {
    let divComponent = null;

    if (item.title.pt === 'Trilhas') {
      divComponent = (
        <div className='trilha' key={item.id}>
          <img src={Trilha} alt={item.title.pt} />
          <h2>{item.title.pt}</h2>
          <p>{item.description.pt}</p>
        </div>
      );
    } else if (item.title.pt === 'Playlists') {
      divComponent = (
        <div className='playlistDois' key={item.id}>
          <img src={PlaylistTwo} alt={item.title.pt} />
          <h2>{item.title.pt}</h2>
          <p>{item.description.pt}</p>
        </div>
      );
    } else if (item.title.pt === 'Coleções') {
      divComponent = (
        <div className='colecoesOne' key={item.id}>
          <img src={Colecoes} alt={item.title.pt} />
          <h2>{item.title.pt}</h2>
          <p>{item.description.pt}</p>
        </div>
      );
    }

    return divComponent;
  })}
</Trio>

    <End>
        <p className='help'><img src={Rocket}></img>{t("VejaRecursos")}</p>
        <p className='see'>{t("VerMais")}<img src={Down}></img></p>
    </End>

</ContainerPrincipal>
</main>
  );
}

export default ContainerInfos;