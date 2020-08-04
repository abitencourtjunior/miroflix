import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import { Button } from '../Button'
import './Menu.css'

const Menu = ({ button }) => (
  <nav className="Menu">
    <Link to="/">
      <img className="Logo" src={Logo} alt="Miroflix Logo" />
    </Link>
    {button && (
      <Button as={Link} className="ButtonLink" to="/create/video">
        Novo Vídeo
      </Button>
    )}
  </nav>
)

export default Menu
