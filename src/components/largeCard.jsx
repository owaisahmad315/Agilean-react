import React from 'react'

const largeCard = (props) => {
  return (
    <div>
        <div className={props.divcName}>
          <p className={props.textcName}>
          {props.text}
          </p>
        </div>
          <p className={props.titlecName}>
          {props.title}
          </p>
    </div>

  )
}

export default largeCard