import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import backgroundVideo from '../videos/bg-video-reason.mp4'
import EventsList from "../components/eventsList"
import insta from "../images/white-instagram.png"
const AboutUs = () =>{

  return(
    <div className="about-section">
      <div className="about-section-title-container">
        <h1 className="about-section-title">About</h1>
        <StaticImage src='../images/comepass_white.png' alt='comepass' className="about-comepass_image"/>
      </div>
      <StaticImage src='../images/comepass_band.png' alt='comepass band' className="about-comepass-band_image"/>
      <StaticQuery query={graphql`query  {
  
    Comepass {
      band_Members {
        memberInstagram
        memberName
        memberRole
      }
      bandInfos {
        bandDescription
      }
    }
  }`} render={data=>(
  <div className="about_comepass-description">
    <p>
      {data.Comepass.bandInfos[0].bandDescription}
    </p>
    <ul>
      {data.Comepass.band_Members.map( e =>(
        <a href={e.memberInstagram} target="_blank">
        <li>
          <img src={insta}/>
          <p>{e.memberName + " - " + e.memberRole}</p>
        </li>
        </a>
        ))}
    </ul>
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
    <h2 className="events__list__title">Gdzie gramy</h2>
    <EventsList limit={1}/>
  </Layout>
)

export default IndexPage;
