import React from 'react'

const Details = ({img, currency})=> {
// console.log(img);
  return (
    <>
    <section className='details'>
      <div className='container'>
        <div className='details__img'>
          <img src={img} alt='деньги'/>
        </div>
        <p className='details__title'>{currency}</p>
      </div>
    </section>
    </>
  )
}

export default Details