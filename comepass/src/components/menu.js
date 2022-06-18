import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"


export function LogoMobile(){
    return (
    <StaticImage src="../images/image00001.png"
        height={100}
        width={100}
        className="logo"
        alt="Comepass logo"
    ></StaticImage>
    )
}
const menuButtonStyle ={
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#000',
    height: 100,
    width: 100,
    borderBottom: '2px solid white',
    borderTop: '2px solid white'
    
}
const listStyle = {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    listStyle: 'none',
    position: 'absolute',
    padding: '5vw',
    top: 0
}

const Menu = () =>{
    const listItemStyle = {
        color: '#FFF',
        textDecoration: 'none'
    }
    const MenuChangeHandler = () =>(menuState === 'hidden' ? setMenuState('visible') : setMenuState('hidden'))
    const [menuState,setMenuState] = React.useState('hidden');
    return(
        

    <>
        <div className={`mobile-menu-is-${menuState}`} style={menuButtonStyle}onClick={ MenuChangeHandler}>

        </div>
        <ul style={listStyle}>
            <Link style={listItemStyle} to={'/music'}>
                <li>MUSIC</li>
            </Link>
            <Link style={listItemStyle} to={'/bio'}>
                <li>BIO</li>
            </Link>
            <Link style={listItemStyle} to={'/'}>
            <LogoMobile/>
            </Link>
            <Link style={listItemStyle} to={'/merch'}>
            <li>MERCH</li>
            </Link>
            <Link style={listItemStyle} to={'/events'}>
            <li>EVENTS</li>
            </Link>

        </ul>
   </>
    
)

}

export default Menu;