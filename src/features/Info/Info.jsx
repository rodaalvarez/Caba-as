import { useLocation } from 'react-router';
import Carroussell from '../../components/Carroussel/Carroussell';
import { importAllImages } from '../../utils/importImages';
import { useEffect } from 'react';
import "./Info.css"
import Contacto from '../Contacto/Contacto';

const Info = () => {
  const imagesCholito = importAllImages(require.context(`../../../public/Cholito`, false, /\.(png|jpe?g|svg)$/));
  const imagesIsabel = importAllImages(require.context('../../../public/Isabel', false, /\.(png|jpe?g|svg)$/));
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
    
  return (
    <section>
        <div id="isabel" className='containerCarrousell'>
          <h2 className='titleCabaña'>Isabel</h2>
          <Carroussell images={imagesIsabel}/>
        </div>
        <div id="cholito" className='containerCarrousell'> 
          <h2 className='titleCabaña'>Cholito</h2>
          <Carroussell images={imagesCholito}/>
        </div>
        <div id="contacto" className='containerCarrousell'>
          <h2 className='titleCabaña'>Contacto</h2>
          <Contacto />
        </div>
    </section>
  )
}

export default Info
