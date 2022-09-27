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
    <ul className="about__comepass__list">
      {data.Comepass.band_Members.map( e =>(
        <li className="about__comepass--member">
          <p>{e.memberName}</p>
        </li>
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
    <StaticQuery 
    query={graphql`
    {
      Comepass {
        events(where: {landingPage: true}) {
          eventUrl
          eventTitle
          eventDate
          eventDescription
          eventPhoto {
            url
          }
          landingPage
        }
      }
    }
    `}render={data=>(
      data.Comepass.events.map( (event,i)=>(
          <div className="event__card" key={i} >
              <p className="events__card__title">
                  {event.eventTitle} 
              </p>
              <h3 className="events__card_date">
                  Data: {event.eventDate}
              </h3>
              <p className="events__card__description">
                  {event.eventDescription}
              </p>
              <a href={event.eventUrl} rel="noopener" className="event__card--info__button">
                  Więcej
              </a>
              
              <img alt='event image' src={event.eventPhoto.url} className="event__card__image"/>
          </div>
      ))
  )}/>
  </Layout>
)

export default IndexPage;
