import * as React from "react"
import { StaticQuery,graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import tidal from "../images/tidal-white.png"
import spotify from "../images/white-spotify.png"
import youtube from "../images/white-youtube.png"



const MusicBar = () => {
  
   return(
    
    <div className="tracks__container">
      <StaticQuery
        query={graphql`query {
          Comepass {
            bandtracks {
              songTitle
              spotifyLink
              tidalLink
              youtubeLink
              trackImage {
                url
              }
              trackLyrics { 
                html
              }
            }
          }
        }        
        `} render={data=>(data.Comepass.bandtracks.map(track=>(
          <div className="tracks_bar-track" >
            <div className="tracks__bar__column--left">
            <h2 className="tracks_bar-track-title">{track.songTitle}</h2> 
              <div className={`track__bar--smLinks`}>
                <a href={track.spotifyLink}>
                  <img src={spotify}  alt="song link"className={`track__card--smIcons`}/>
                </a>
                <a href={track.youtubeLink}>
                  <img src={youtube} alt="song link" className={`track__card--smIcons`}/>
                </a>
                <a href={track.tidalLink}>
                  <img src={tidal} alt="song link" className={`track__card--smIcons`}/>
                </a>
              </div>
            </div>
            <img src={track.trackImage.url} className="tracks_bar-track-image" alt='comepass song'/>
          </div>
          
    )))
  }
       ></StaticQuery> 
    </div>
    
  )
  } 

const MusicPage = () => (
  <Layout>
    <Seo title="Comepass music" />
    <h1 className="music__title">Twórczość</h1>
    <MusicBar></MusicBar>
  </Layout>
)

export default MusicPage
