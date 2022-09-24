import * as React from "react"
import { StaticQuery,graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import instagram from "../images/white-instagram.png"
const MusicPage = () => (
  <Layout>
    <Seo title="Bio" />
    <div className="bio__main__container">
      <StaticQuery query={graphql` query{
  Comepass {
    band_Members {
      memberInstagram
      memberName
      memberRole
      photo {
        url
      }
    }
    bandInfos {
      extendedBandDescription
    }
  }
}
`}
          render={data=>(
          <div className="bio__container">
            <p className="bio__card__description">{data.Comepass.bandInfos[1].extendedBandDescription}</p>
            <h1 className="bio__team__title">Skład zespołu</h1>
              <div className="bio__cards__container">
              {data.Comepass.band_Members.map(e=>(
                <div className="bio__member__card">
                  <img className="bio__member__photo" src={e.photo.url}/>
                  <p className="bio__member__name">{e.memberName}</p>
                  <p className="bio__member__role">{e.memberRole}</p>
                  <a href={e.memberInstagram} target="blank" className="bio__member__instagram--url">
                    <img src={instagram} className="bio__instagram__icon"/> <p className="bio__instagram__name">@{e.memberInstagram.slice(e.memberInstagram.lastIndexOf("/")+1, e.memberInstagram.length)}</p>
                  </a>
                </div>
                  ))}
              </div>
          </div>
          )}
      />
      
    </div>
  </Layout>
)

export default MusicPage
