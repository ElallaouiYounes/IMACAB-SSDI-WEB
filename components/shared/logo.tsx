"use client"
import Image from 'next/image'
 
export default function Logo() {
  return (
    <Image
      src="/imacab.png"
      width={100}
      height={25}
      alt="Picture of the author"
    />
  )
}