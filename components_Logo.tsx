import React from 'react'
import Image from 'next/image'

export function Logo() {
  return (
    <div className="relative w-10 h-10 mr-2">
      <Image
        src="/logo.svg"
        alt="African Recipe Generator Logo"
        layout="fill"
        objectFit="contain"
      />
    </div>
  )
}


