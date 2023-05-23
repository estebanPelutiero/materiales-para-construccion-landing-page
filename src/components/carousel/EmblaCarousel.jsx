import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Bricks from '../../assets/imgs/carrusel/bricks.jpg'
import Iron from '../../assets/imgs/carrusel/ironbars.jpg'
import Ceramic from '../../assets/imgs/carrusel/ceramicos.jpg'

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
  
    <div id='home' className="w-full embla mb-8" ref={emblaRef}>

      <div className="embla__container">
        <div className="embla__slide">
          <img className='' src={Bricks} alt="/" />
        </div>

        <div className="embla__slide">
          <img className='' src={Ceramic} alt="/" />
        </div>

        <div className="embla__slide">
          <img className='' src={Iron} alt="/" />
        </div>

      </div>
    
    </div>
  )
}

export default EmblaCarousel;
