import React from 'react'

function CityCard({city}) {
  return (
    <div className="city-card">
        {
            <img className='city-image' src={city.imageUrl}/>
        }
    </div>
  )
}

export default CityCard