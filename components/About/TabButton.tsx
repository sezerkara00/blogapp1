'use client'

import React from 'react'
import {motion} from 'framer-motion'


const variants={
  default:{width:0},
  active:{width :"calc(100% - 0.75rem)" }  
}


interface TabButtonProps{
  active : boolean;
  selecTab:() => void;
  children:React.ReactNode
}

const TabButton = ({active,children,selecTab} : TabButtonProps) => {
  const buttonClases=active ? "text-white":"text-slate-100"

  return (
    <div>
      <button onClick={selecTab}>
        <p className={`mr-3 font-semibold ${buttonClases}`}>
            {children}
        </p>
        <motion.div
          animate={active? "active" : "default"}
          variants={variants}
          className='h-1 bg-mycolor-100 mt-2 mr-3'
        />
      </button>
    </div>
  )
}

export default TabButton
