import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/hero'
import Skills from '../components/skills'

const IndexPage = () => (
  <Layout>
    <Hero></Hero>
    <h3>My skills</h3>
    <Skills></Skills>
  </Layout>
)

export const Head = () => <Seo title='Home' />
export default IndexPage
