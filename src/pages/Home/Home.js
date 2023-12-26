import React, { useContext } from 'react'
import { countContext } from '../../context/CountContext'

export default function Home() {

  const {myName,number} = useContext(countContext)

  return (

    <>
    <div className="home d-flex text-center align-items-center justify-content-center vh-100">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>WELL COME TO REACT</h1>
                    <p>{myName}</p>
                    <p>The Counting Value is :  <b>{number}</b></p>
                </div>
            </div>
        </div>
    </div>
    </>

  )
}
