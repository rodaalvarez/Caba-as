import { useLocation } from 'react-router';
import Carroussell from '../../components/Carroussel/Carroussell';
import { importAllImages } from '../../utils/importImages';
import { useEffect } from 'react';

const imagesCholito = importAllImages(require.context(`../../../public/Cholito`, false, /\.(png|jpe?g|svg)$/));
const imagesIsabel = importAllImages(require.context('../../../public/Isabel', false, /\.(png|jpe?g|svg)$/));
const Info = () => {
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
        <div id="isabel">
            <Carroussell images={imagesIsabel}/>
        </div>
        <div id="cholito"> 
            <Carroussell images={imagesCholito}/>
        </div>
    </section>
  )
}

export default Info
 