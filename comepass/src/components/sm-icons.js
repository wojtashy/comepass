import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const barStyle = {
    height: 290,
    width: 75,
    backgroundColor: '#000',
    position: 'fixed',
    right: 0,
    borderRadius: '7px 0px 0px 7px',
    boxShadow: `-3px 1px 7px -4px #FFF`,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    zIndex: 5,
    a:{
        margin: '0 auto',
    }
}


const smLogoStyle = {
    height: 'auto',
    width: '80%'
}

const SocialMediaIcons = () =>{

    return(
        <>
            <div style={barStyle}>
                
                        <a href='https://tidal.com/browse/artist/28465999' target="_blank" rel="noopener noreferrer" className="sm-images-list_item">
                            <StaticImage alt='tidal' style={smLogoStyle} src='../images/tidal-white.png'/>
                        </a> 
                        <a href='https://open.spotify.com/artist/5Ta2BXVfYW1o06F9zrCGjR' className="sm-images-list_item">
                            <StaticImage alt='spotify' style={smLogoStyle} src='../images/white-spotify.png'/>
                        </a>
                        <a href='https://www.instagram.com/comepass_official' className="sm-images-list_item">
                            <StaticImage alt='instagram' style={smLogoStyle} src='../images/white-instagram.png'/>
                        </a>
                        <a href='https://www.facebook.com/comepassband' className="sm-images-list_item">
                            <StaticImage alt='facebook' style={smLogoStyle} src='../images/facebook-white.png'/>
                        </a>
                        <a href='https://www.youtube.com/c/Comepass' className="sm-images-list_item">
                            <StaticImage alt='youtube' style={smLogoStyle} src='../images/white-youtube.png'/>
                        </a>

                
            </div>
        </>
    )

}


export default SocialMediaIcons

