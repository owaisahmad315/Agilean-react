import React from 'react'

const Rectangle = (props) => {
  return (
    <div className={props.style}>
        <div className='flex flex-col'>
            <h1 className={props.titleStyle}>{props.title}</h1>
            <p className={props.textStyle}>{props.text}</p>
        </div>
    </div>
  )
}

export default Rectangle