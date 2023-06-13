import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import banner1 from '../../assets/banner1.png'
import Iron from '../../assets/imgs/carrusel/ironbars.jpg'
import Ceramic from '../../assets/imgs/carrusel/ceramicos.jpg'

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
  
    <div id='home' className="w-full embla mb-8" ref={emblaRef}>

      <div className="embla__container">
        <div className="embla__slide">
          <img className='w-full h-full object-cover' src={banner1} alt="/" />
        </div>

        <div className="embla__slide">
          <img className='w-full h-full object-cover' src={Ceramic} alt="/" />
        </div>

        <div className="embla__slide">
          <img className='w-full h-full object-cover' src={Iron} alt="/" />
        </div>

      </div>
    
    </div>
  )
}

export default EmblaCarousel;
