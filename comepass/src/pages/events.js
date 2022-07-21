import * as React from "react"
import EventsList from "../components/eventsList"
import Layout from "../components/layout"
import Seo from "../components/seo"

const MusicPage = () => (
  <Layout>
    <Seo title="Comepass music" />
    <h1>Events</h1>
      <EventsList limit={0}></EventsList>
    </Layout>
)

export default MusicPage
