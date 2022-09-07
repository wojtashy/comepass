import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const barStyle = {
    
}


const smLogoStyle = {
    height: 'auto',
    maxWidth: '100%'
}

const SocialMediaIcons = (props) =>{

    return(
        <>
            <div className={`sm-icons-${props.position}-bar`}>
                       { props.position === 'static' ? <div className="sm__icons--toggle__button"></div> : null }
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

