import React, { useState } from 'react'
import "./Slider.css";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface SliderProps {
  images: string[];
  title: string;
  selectedImage: (image:string)=> void;
}

const Slider = ({ images, title, selectedImage } : SliderProps) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftScroll = () => {
      const scrollPosition = scrollX + 200; 
      setScrollX(scrollPosition > 0 ? 0 : scrollPosition);
    };
  
    const handleRightScroll = () => {
      const scrollPosition = scrollX - 200; 
      const maxScroll = -(images.length * 200 - window.innerWidth); 
      setScrollX(scrollPosition < maxScroll ? maxScroll : scrollPosition);
    };
  
      
    return (
      <section className="sectionSlider">        
        <div className="slider-container">
          <button className="btnSlider left" onClick={handleLeftScroll}>
              <LeftOutlined className='iconSlider'/>
          </button>
          <div className="slider-content" style={{ transform: `translateX(${scrollX}px)` }}>
            {images.map((image, index) => (
              <button
                  key={`${image}${index}`}
                  className="movie-card"
                  onClick={()=>selectedImage(image)}
              >
                  <img className='img-poster' src={image} alt={image} />
              </button>
            ))}
          </div>
          <button className="btnSlider right" onClick={handleRightScroll}>
              <RightOutlined className='iconSlider'/>
          </button>
        </div>
      </section>
        
    );
}

export default Slider
