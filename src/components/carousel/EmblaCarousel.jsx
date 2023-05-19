import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Bricks from '../../assets/imgs/carrusel/bricks.jpg'
import Iron from '../../assets/imgs/carrusel/ironbars.jpg'
import Ceramic from '../../assets/imgs/carrusel/ceramicos.jpg'

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
  
    <div className="w-full embla" ref={emblaRef}>

      <div className="embla__container">
        <div className="embla__slide">
          <img className='object-contain' src={Bricks} alt="/" />
        </div>

        <div className="embla__slide">
          <img className='object-contain' src={Ceramic} alt="/" />
        </div>

        <div className="embla__slide">
          <img className='object-contain' src={Iron} alt="/" />
        </div>

      </div>
    
    </div>
  )
}

export default EmblaCarousel;
