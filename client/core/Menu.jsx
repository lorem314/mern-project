import React from "react"
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </header>
  )
}

export default Menu
