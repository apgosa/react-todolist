import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
        //document.querySelector('input').select();
        inputRef.current.select();
    }

  return (
    <div>
        <h1>Focus Screen</h1>

        <input className='form-control'
        placeholder='Su nombre'
        ref ={inputRef}></input>

        <button className='btn btn-outline-primary mt-3'
        onClick={ handleClick }> Focus</button>

    </div>
  )
}
