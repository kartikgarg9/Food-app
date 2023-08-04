import React from 'react'
import './Card.module.css'

function AnotherComponent({ someprop }) {
    alert('HHello another component is rendered')
    return <div>HEllo from another compoentn</div>
}

function Card() {
    const [showAnotherComponent, setShowAnotherComponent] = React.useState(false);
  return (
    <>
    <button onClick={() => setShowAnotherComponent((state) => !state)} className={'card'}>Card</button>
    { showAnotherComponent && <AnotherComponent someprop={showAnotherComponent} /> }
    </>
  )
}

export default Card
