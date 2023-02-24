import React from 'react'
import './sidebaroptions.css'
function Sidebaroptions({Icon,title,number,selected}) {
  return (
    <div className={`sidebaroptions ${selected && "sidebaroption--active"}`}>
      <Icon/>
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  )
}

export default Sidebaroptions
