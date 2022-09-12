/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SocialMediaIcons from "./sm-icons"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const BarPositionChanger = ()=>(
    console.log('works!')
  )
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <SocialMediaIcons 
      position={'static'} 
      mouseDown={BarPositionChanger}></SocialMediaIcons>
      <div
        style={{
          margin: `0 auto`,
          minHeight: `calc(100vh - 120px)`,
          display: `flex`,
          justifyContent: `space-between`,
          flexDirection: `column`,
          alignItems: `center`,
          width: `100vw`
        }}
      >
        <main>{children}</main>
        <footer>
          <p>social media</p>
        <SocialMediaIcons position={'footer'}></SocialMediaIcons>
          <div className="footer__decoration"></div>
          <div className="footer__decoration"></div>
          <div className="footer__decoration"></div>
          <div className="footer__decoration"></div>
          <div className="footer__decoration"></div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
