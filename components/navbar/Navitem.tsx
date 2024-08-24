import React from 'react'
import Link from 'next/link'


interface  NavItemProps{
    href:string;
    title:string
}
function Navitem({href,title}:NavItemProps) {
  return (
    <Link className='block py-2 pl-3 text-xl text-mycolor-700
    hover:text-white/80
    ' href={href}>{title}</Link>
  )
}

export default Navitem