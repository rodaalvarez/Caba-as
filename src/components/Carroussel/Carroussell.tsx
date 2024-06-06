import React, { useState, useEffect } from 'react';
import "./Carroussel.css";

interface IProps {
  images: any[];
}
const Carroussell = ({ images }: IProps) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prevCurrent => (prevCurrent + 1) % 5); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, []); 
  
  return (
    <section className='carrousellSection'>
        <div className='imgSection' style={{ background: `url(${images[current]})` }}>
          <img src={`${images[current]}`} alt="" className='imgPoster' />
        </div>
        <div className='titleContainer'>
            <h2>{images[current]?.title}</h2>
        </div>
    </section>   
  );
}

export default Carroussell;
