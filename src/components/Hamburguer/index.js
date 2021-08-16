import React from 'react'
import { HamburguerIcon } from './hamburguerStyled'


const Hamburguer = ({menuOpen, setMenuOpen}) => {
    return (
        <HamburguerIcon role="button" menuOpen={menuOpen} onClick={()=> setMenuOpen(prev => !prev)}>
            <div />
        </HamburguerIcon >
    )
}

export default Hamburguer
