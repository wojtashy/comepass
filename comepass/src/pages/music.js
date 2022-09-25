import * as React from "react"
import { StaticQuery,graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import tidal from "../images/tidal-white.png"
import spotify from "../images/white-spotify.png"
import youtube from "../images/white-youtube.png"
const MusicBar = () => {
   const [lyricsState,setLyricsState] = React.useState('hidden');

   const handleLyricsView = () =>{
    lyricsState == 'hidden' ? setLyricsState('visible') : setLyricsState('hidden')
   }
  
   return(
    <>
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
        `}render={data=>(data.Comepass.bandtracks.map(track,i=>(
          <div className="tracks_bar-track">
          <h2 className="tracks_bar-track-title">{track.songTitle}</h2> 
          <div className={`track__bar--smLinks`}>
                <a href={track.spotifyLink}>
                  <img src={spotify} className={`track__card--smIcons`}/>
                </a>
                <a href={track.youtubeLink}>
                  <img src={youtube} className={`track__card--smIcons`}/>
                </a>
                <a href={track.tidalLink}>
                  <img src={tidal} className={`track__card--smIcons`}/>
                </a>
            </div>
            <img src={track.trackImage.url} className="tracks_bar-track-image" alt='comepass song'/>
          <div onClick={handleLyricsView(i)} className={`tracks_bar-lyrics-${lyricsState} tracks_bar-lyrics`} dangerouslySetInnerHTML={{__html: `${track.trackLyrics.html}`}} ></div> 

          </div>
          
    )))}
       ></StaticQuery>
    </div>
    </>
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
