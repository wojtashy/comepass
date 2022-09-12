import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useState } from "react"

const barStyle = {
    
}


const smLogoStyle = {
    height: 'auto',
    maxWidth: '100%'
}



const SocialMediaIcons = (props) =>{
    
    const [SideBarState,SetSideBarState] = useState('visible');

    const HandleBarPosition = () => {
            SideBarState === 'visible' ? SetSideBarState('hidden') : SetSideBarState('visible')
    }
    return(
        <>
            <div className={`sm-icons-${props.position}-bar sm__icons--${SideBarState}`}>
                       { props.position === 'static' ? <div className={`sm__icons--toggle__button sm__icons__button--${SideBarState}`} onClick={HandleBarPosition}></div> : null }
                        <a href='https://tidal.com/browse/artist/28465999' target="_blank" rel="noopener noreferrer" className="sm-images-list_item">
                            <StaticImage alt='tidal'  src='../images/tidal-white.png'/>
                        </a> 
                        <a href='https://open.spotify.com/artist/5Ta2BXVfYW1o06F9zrCGjR' className="sm-images-list_item">
                            <StaticImage alt='spotify'  src='../images/white-spotify.png'/>
                        </a>
                        <a href='https://www.instagram.com/comepass_official' className="sm-images-list_item">
                            <StaticImage alt='instagram'  src='../images/white-instagram.png'/>
                        </a>
                        <a href='https://www.facebook.com/comepassband' className="sm-images-list_item">
                            <StaticImage alt='facebook'  src='../images/facebook-white.png'/>
                        </a>
                        <a href='https://www.youtube.com/c/Comepass' className="sm-images-list_item">
                            <StaticImage alt='youtube'  src='../images/white-youtube.png'/>
                        </a>

                
            </div>
        </>
    )

}


export default SocialMediaIcons

