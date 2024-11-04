import React from 'react'
import Header from './components/Header/Header'


const page = () => {
  return (
    <div>
      <Header></Header>
      <div className='flex'>
       <section className="flex justify-center gap-[10vmin] xl:gap-[30vmin] items-center py-20 px-[3vmin] md:px-[5vmin] lg:px-[15vmin]">
         <div className="text-center lg:text-start">
          <h3 className="text-secondry font-algerian text-[1.2em] md:[1.5em] lg:text-[1.8em] xl:text-6xl">
          IMPECCABLE 
          <br/>
          CRAFTSMANSHIP AND
          <br/> FINESSE
         </h3>
         <p className="text-[30px] lg:text-[0.7em] xl:text-[0.85em] tracking-wider mt-6 font-medium text-[#787054]">
         An example of intricate workmanship and detail, 
        elegant <br/>  necklaces and long and short chains form a part of our <br/> desirable collection.
         </p>
         <button className="bg-primary py-2 rounded-[10px] px-10 text-white tracking-wider mt-6 transition-all duration-500 hover:text-secondry bg-[#A29875]">Explore Now</button>
        </div >

        <div className='flex items-center justify-center'>
          <img src='images/rs-group-wrap ⏵ rs-group.svg' alt='Image' height='647' width='462' />
          </div>
          </section>
      </div>
    </div>
  )
}

export default page
