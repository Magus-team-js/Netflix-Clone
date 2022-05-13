import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <nav>
        <Link to='/favlist'>FavList</Link>
      </nav>
    </>
  )
}
