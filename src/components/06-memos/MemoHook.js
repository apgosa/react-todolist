import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'


export const MemoHook = () => {

    const {state, increment } = useCounter(500);
    const [show, setShow] = useState(true)

  

    const memoProcesoPesado = useMemo(() => procesoPesado(state), [state])



  return (
    <div>
        <h3>MemoHook <small>{state}</small> </h3>
        <hr/>

        <p>{ memoProcesoPesado }</p>

        <button className="btn btn-primary" onClick={() => increment(1)} >+1</button>

        <button className="btn btn-outline-primary" onClick={() =>setShow(!show)} > Show/Hide {JSON.stringify(show)}</button>
    </div>
  )
}
