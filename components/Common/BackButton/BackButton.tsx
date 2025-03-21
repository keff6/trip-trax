import React from 'react'
import { useRouter } from 'next/router'
import { IoArrowBack } from "react-icons/io5";

export default function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className='p-2'>
      <IoArrowBack />
    </button>
  )
}
