import * as React from "react"
import { StaticQuery,graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const MusicBar = () => {
   const [lyricsState,setLyricsState] = React.useState('hidden');

   const handleLyricsView = ()=>{
    lyricsState == 'hidden' ? setLyricsState('visible') : setLyricsState('hidden')
   }
  
   return(
    <div className="tracks__bar">
      <StaticQuery
        query={graphql`query {
  Comepass {
    bandtracks {
      lyrics
      songTitle
      trackLyrics {
        html
      }
      trackImage{
        url
      }
    }
  }
}

        `}render={data=>(data.Comepass.bandtracks.map(track=>(
          <div className="tracks_bar-track">
          <h2 className="tracks_bar-track-title">{track.songTitle}</h2> 
          <img src={track.trackImage.url} className="tracks_bar-track-image" alt='comepass song'/>

          <div onClick={handleLyricsView} className={`tracks_bar-lyrics-${lyricsState} tracks_bar-lyrics`} dangerouslySetInnerHTML={{__html: `${track.trackLyrics.html}`}} ></div> 

          </div>
          
    )))}
       ></StaticQuery>
    </div>
  )
  } 

const MusicPage = () => (
  <Layout>
    <Seo title="Comepass music" />
    <MusicBar></MusicBar>
  </Layout>
)

export default MusicPage
