import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "./menu"
import { StaticImage } from "gatsby-plugin-image"
import {facebookLogo} from "../images/facebook-white.png"

const barStyle = {
    height: 180,
    width: 40,
    backgroundColor: '#000',
    position: 'absolute',
    right: 0,
    borderRadius: '7px 0px 0px 7px',
    boxShadow: `-3px 1px 7px -4px #FFF`,
    transform: 'translateY(10px)',
    display: 'flex',
    justifyContent: 'space-around'
}
const barElements=[
    {
        image: facebookLogo,
        url: 'https://www.facebook.com/comepassband'
    },
    {

    }
]

const SocialMediaIcons = () =>{

    return(
        <>
            <div style={barStyle}>
                {barElements.map(e =>{
                    <li>
                        <a href={e.url}>
                            <image src={e.image} alt='obrazek'></image>
                        </a>
                    </li>
                    
                })}
            </div>
        </>
    )

}

export default SocialMediaIcons

