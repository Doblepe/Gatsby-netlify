import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
export const Nav = styled.ul `
    display: none;
    list-style-type: none;
    padding: 0;
    font-family: Nunito Regular, Arial, Helvetica;
    font-size: 1.2rem;

    a {text-decoration: none;
    color: ${props => props.theme.colors.textDark}}
    li {
        display: inline-block;
        margin-right: 20px;
        transition: opacity 0.5s ease;
        cursor: pointer;
        .active{
            font-weight: 800;
        }
      /*   :last-child {
            margin-right:0;
        } */
        :hover {
            opacity:0.7;
        }


    }

    @media screen and (min-width:768px){
        display: block;
    }
`
const Menu = () => {
    return (
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
    )
}
export default Menu