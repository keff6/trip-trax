import React from 'react'
import BackButton from '../Common/BackButton/BackButton'
import Itinerary from '../Itinerary/Itinerary'

export default function Trip() {
  return (
    <div>
      <header className='h-24 bg-limed-spruce text-white'>
        <div className='h-24 flex items-center'>
          <BackButton />
          <div className='pl-3'>
            <h1>Brasil 2025</h1>
            <h5>Viaje familiar</h5>
            <h2>15 Julio 2025 - 25 Julio 2025</h2>
          </div>
        </div>
      </header>
      <section>
        <Itinerary />
      </section>
    </div>
  )
}
