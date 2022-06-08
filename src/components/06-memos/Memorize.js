import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'
import { Small } from './Small';

export const Memorize = () => {

    const {state, increment } = useCounter(1);

    const [show, setShow] = useState(true)

  return (
    <div>
        <h1>Counter <Small value={state} /></h1>
        <hr/>
        <button className="btn btn-primary" onClick={() => increment(1)} >+1</button>

        <button className="btn btn-outline-primary" onClick={() =>setShow(!show)} > Show/Hide {JSON.stringify(show)}</button>
    </div>
  )
}
