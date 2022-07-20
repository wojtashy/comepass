import * as React from "react"
import { StaticQuery,graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const MusicBar = () => {
  return(
    <div>
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
          <>
          <h2>{track.songTitle}</h2>
            <code>
            {track.trackLyrics.html}
            </code>
          <img src={track.trackImage.url} alt='comepass song'/>
          {console.log(data)}
          </>
          
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
