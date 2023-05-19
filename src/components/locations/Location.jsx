import React from 'react'

const Location = () => {

  return (

    <div className='w-full h-fit py-3 mx-auto'>

        <div className="flex flex-col justify-center items-center w-[100%] h-[100px] px-16">
          <h1 className='font-cabin lg:text-3xl text-xl text-center font-semibold lg:font-normal bg-orange-300 px-10 py-2 my-2 rounded'>Podés visitar cualquiera de nuestras 2 sucursales!</h1>
        </div>

        <div className='flex flex-col lg:flex-row justify-evenly items-center w-full mt-10'>

          {/* map 1 */}

          <div className='flex flex-col justify-center items-center py-10 lg:w-[50%] w-[90%]'>

            <div className='pb-7 w-[80%]'>
              <h2 className='font-cabin lg:text-xl text-center bg-slate-200 lg:px-10 px-5 py-2 my-2 rounded'>Sucursal Gral. Enrique Yaqueme 1167</h2>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.6685847506596!2d-58.945722978946584!3d-34.1803900867429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb723174de26d1%3A0xe621d886cd5f5a86!2sHJR%20Hernan%20J%20Rotondo%20Corralon%20de%20Materiales!5e0!3m2!1ses-419!2sar!4v1684243228762!5m2!1ses-419!2sar"
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className='map'>
            </iframe>

          </div>

          {/* map 2 */}

          <div className='flex flex-col justify-center items-center py-10 lg:w-[50%] w-[90%] '>

            <div className='pb-7 w-[80%]'>
              <h2 className='font-cabin lg:text-xl text-center bg-slate-200 lg:px-10 px-4 py-2 my-2 rounded'>Sucursal Colectora Norte y Vicente López</h2>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.5013944138336!2d-58.952525211144994!3d-34.1846635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb712079eb575b%3A0xed394fb72bf486bd!2sHJR%20Hernan%20J%20Rotondo!5e0!3m2!1ses-419!2sar!4v1684244837945!5m2!1ses-419!2sar" 
            style={{border: 0}} 
            allowFullScreen="" loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className='map'>
            </iframe>

          </div>

        </div>

    </div>

  )

}

export default Location