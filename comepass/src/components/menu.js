import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'


const MenuWrapper = styled.div`
    height: 100px;
`;


const Menu = () =>(

    <ul>
        <Link to={'/music'}>
            <li>MUSIC</li>
        </Link>
        
        <li>BIO</li>
        <li>MERCH</li>
        <li>EVENTS</li>
   </ul>
    
)

export default Menu;