import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "./menu"
import { StaticImage } from "gatsby-plugin-image"

export function LogoHeader (){
  return(
    <StaticImage
    src='../images/comepass_white.png'
    style={{
      height: 100,
      width: 100,
      transform: 'rotate(45deg)',
      marginTop: 10
    }}
    >
      
    </StaticImage>
  )
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      width: '100vw',
      height: 120,
      display: 'flex',
      justifyContent: 'center'
    }}
  >
   <Link to="/">
    <LogoHeader></LogoHeader>
   </Link>
    <Menu/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
