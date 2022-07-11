import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import backgroundVideo from '../videos/bg-video-reason.mp4'

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const AboutUs = () =>{

  return(
    <div className="about-section">
      <h1 className="about-section-title">About</h1>
      <StaticImage src='../images/comepass_white.png' alt='comepass' className="about-comepass_image"/>
      <StaticImage src='../images/comepass_band.png' alt='comepass band' className="about-comepass-band_image"/>
      <StaticQuery query={graphql`query  {
  Comepass {
    bandInfo(where: {id: "cl5h782h585qe0cuif9e5kyie"}) {
      bandDescription
    }
  }
}`} render={data=>(
  <div className="about_comepass-description">
    <p>
      {data.Comepass.bandInfo.bandDescription}
    </p>
  </div>
)}/>
    </div>
  )

}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
        <div style={{
          display: 'flex',
          width: '100vw'
        }}>
          <video src={backgroundVideo}
          style={{
            width: '100vw',
          }}
          autoPlay='autoplay'
          muted
          loop
>
            
          </video>
        </div>

    </div>
    <AboutUs/>
  </Layout>
)

export default IndexPage
