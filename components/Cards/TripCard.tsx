import React from 'react'
import { useRouter } from 'next/router'

export default function TripCard() {
  const router = useRouter();

  return (
    <div className='bg-limed-spruce p-4 rounded-md text-white cursor-pointer' onClick={() =>  router.push('/trip/1')}>
      <h1 className='text-spring-rain text-2xl font-bold'>Brasil 2025</h1>
      <h3>Viaje familiar</h3>
      <div>
        <p>Inicio: Martes 15 de Julio 2025</p>
        <p>Final: Sabado 26 de Julio de 2025</p>
      </div>

    </div>
  )
}
