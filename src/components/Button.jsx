import React from 'react'

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <div id={id} 
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden bg-violet-50 
                  rounded-full px-7 py-3 text-black flex items-center ${containerClass}`}>
                  {leftIcon}

      <span className='relative incline-flex item-center overflow-hidden font-[general] text-xs uppercase'>
        <div>
          {title}
        </div>
      </span>
    </div>
  )
}

export default Button
