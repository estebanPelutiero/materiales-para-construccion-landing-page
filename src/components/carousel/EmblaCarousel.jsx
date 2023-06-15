import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'

export const EmblaCarousel = () => {

  const autoplayOptions = {
    delay: 7000,
  }

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])

  return (
  
    <div id='home' className="w-full embla mb-8" ref={emblaRef}>

      <div className="embla__container">
        <div className="embla__slide">
          <img className='w-full h-full object-cover object-center' src={banner1} alt="/" />
        </div>

        <div className="embla__slide">
          <img className='w-full h-full object-cover object-center' src={banner2} alt="/" />
        </div>

        <div className="embla__slide">
          <img className='w-full h-full object-cover object-center' src={banner3} alt="/" />
        </div>

      </div>
    
    </div>
  )
}

export default EmblaCarousel;
