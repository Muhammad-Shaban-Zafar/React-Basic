import React from 'react'

export default function Button(props) {


  function btnFuntion() {
    alert(`THIS IS ${props.color} BUTTON`)
  }

  return (
    <>
    <button className={`btn btn-${props.bgColor} btn-${props.FS} fw-${props.FW} mx-1`} onClick={btnFuntion}>{props.name}</button>
    </>
  )
}
