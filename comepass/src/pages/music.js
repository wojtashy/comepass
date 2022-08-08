import * as React from "react"
import { StaticQuery,graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
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
          <div className={`track_bar-sm-links`}>
                
                        <a href='https://tidal.com/browse/artist/28465999' target="_blank" rel="noopener noreferrer" className="track_bar_links--item">
                            <StaticImage alt='tidal'  src='../images/tidal-white.png'/>
                        </a> 
                        <a href='https://open.spotify.com/artist/5Ta2BXVfYW1o06F9zrCGjR' className="track_bar_links--item">
                            <StaticImage alt='spotify'  src='../images/white-spotify.png'/>
                        </a>
                        <a href='https://www.instagram.com/comepass_official' className="track_bar_links--item">
                            <StaticImage alt='instagram'  src='../images/white-instagram.png'/>
                        </a>
                        <a href='https://www.facebook.com/comepassband' className="track_bar_links--item">
                            <StaticImage alt='facebook'  src='../images/facebook-white.png'/>
                        </a>
                        <a href='https://www.youtube.com/c/Comepass' className="track_bar_links--item">
                            <StaticImage alt='youtube'  src='../images/white-youtube.png'/>
                        </a>

                
            </div>
          <div onClick={handleLyricsView} className={`tracks_bar-lyrics-${lyricsState} tracks_bar-lyrics`} dangerouslySetInnerHTML={{__html: `${track.trackLyrics.html}`}} ></div> 

          </div>
          
    )))}
       ></StaticQuery>
    </div>
  )
  } 

  const SocialMediaIcons = () =>{

    return(
        <>
            
        </>
    )

}

const MusicPage = () => (
  <Layout>
    <Seo title="Comepass music" />
    <MusicBar></MusicBar>
  </Layout>
)

export default MusicPage
