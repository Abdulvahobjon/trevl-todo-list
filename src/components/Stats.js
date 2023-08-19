import React from 'react'

export default function Stats({itemse}) {
  return (
    <footer className='stats'>
      <em>You have <mark> { itemse.length } </mark> items on year list , and you already packed {itemse.filter(item=> item.packed == true).length} </em>
    </footer>
  )
}
