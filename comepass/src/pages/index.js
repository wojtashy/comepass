import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import backgroundVideo from '../videos/bg-video-reason.mp4'

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

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
    Siema siema
  </Layout>
)

export default IndexPage
