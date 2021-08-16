import React from 'react'
import {Link} from 'gatsby'
import { OverrideGlobalStyle, Wrapper, Nav } from './MobileMenu.styles'

const MobileMenu = ({menuOpen}) => {
    return (
        <>
        <OverrideGlobalStyle menuOpen={menuOpen}/>
            <Wrapper menuOpen={menuOpen}>
                <Nav>
                <li>
            <Link to="/contact" activeClassName="active">Contacto </Link>
            </li>
           <li>
           <Link to="/about"activeClassName="active">Acerca de </Link>
           </li>
            <li>
            <Link to="/admin/"activeClassName="active">Añadir post </Link>
            </li>
                </Nav>
            </Wrapper>
        </>
    )
}

export default MobileMenu
