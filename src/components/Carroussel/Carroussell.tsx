import React, { useState, useEffect } from 'react';
import "./Carroussel.css";
import Slider from '../Slider/Slider';

interface IProps {
  images: any[];
}
const Carroussell = ({ images }: IProps) => {
  const [current, setCurrent] = useState<number>(0);
  const [selectedImage , setSelectedImage] = useState<string>();

  const handleSelectedImage = (image:string)=> {
    setSelectedImage(image);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prevCurrent => (prevCurrent + 1) % 5); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, []); 
  
  return (
    <section className='carrousellSection'>
        <div className='imgSection'>
          <img src={selectedImage ? selectedImage : `${images[current]}`} alt="" className='imgPoster' />
        </div>
        <div className='sliderContainer'>
          <Slider images={images} title="" selectedImage={handleSelectedImage} />
        </div>
    </section>   
  );
}

export default Carroussell;
