import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"


export function LogoMobile(){
    return (
    <StaticImage src="../images/logo-comepass.png"
        height={100}
        width={100}
        className="logo"
        alt="Comepass logo"
    ></StaticImage>
    )
}

const listStyle = {
    display: 'flex',
    height: '80vh',
    width: '100vw',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    listStyle: 'none',
}

const Menu = () =>{
    const listItemStyle = {
        color: '#FFF',
        textDecoration: 'none'
    }
    const MenuChangeHandler = () => (menuState === 'hidden' ? setMenuState('visible') : setMenuState('hidden'));
    const [menuState,setMenuState] = React.useState('hidden');
    return(
        

    <>
        <div className={`mobile-menu-button--${menuState} mobile-menu-button`} onClick={MenuChangeHandler}>

        </div>
        <div className={`main-menu main-menu-is-${menuState}`}>
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
        </div>
   </>
    
)

}

export default Menu;