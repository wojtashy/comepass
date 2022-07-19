import * as React from "react"
import EventsList from "../components/eventsList"
import Layout from "../components/layout"
import Seo from "../components/seo"

const MusicPage = () => (
  <Layout>
    <Seo title="Comepass music" />
      <EventsList></EventsList>
    </Layout>
)

export default MusicPage
