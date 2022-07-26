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
    const MenuChangeHandler = () => {
        if (menuState === 'hidden') 
         {
            setMenuState('visible') 
            document.querySelector('html').style.overflow = 'hidden';
        }else {
            setMenuState('hidden')
            document.querySelector('html').style.overflow = 'scroll';
    }
    };
    const [menuState,setMenuState] = React.useState('hidden');
    return(
        

    <>
        <div className={`mobile-menu-button--${menuState} mobile-menu-button`} onClick={MenuChangeHandler}>

        </div>
        <div className={`main-menu main-menu-is-${menuState}`}>
            <ul style={listStyle}>
                <Link style={listItemStyle} to={'/music'} onClick={MenuChangeHandler}>
                    <li>MUSIC</li>
                </Link>
                <Link style={listItemStyle} to={'/bio'} onClick={MenuChangeHandler}>
                    <li>BIO</li>
                </Link>
                <Link style={listItemStyle} to={'/'} onClick={MenuChangeHandler}>
                <LogoMobile/>
                </Link>
                <Link style={listItemStyle} to={'/merch'} onClick={MenuChangeHandler}>
                <li>MERCH</li>
                </Link>
                <Link style={listItemStyle} to={'/events'} onClick={MenuChangeHandler}>
                <li>EVENTS</li>
                </Link>

            </ul>
        </div>
   </>
    
)

}

export default Menu;