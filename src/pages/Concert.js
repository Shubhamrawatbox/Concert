import React from "react"
import FeaturedConcerts from "../components/Concert/FeaturedConcerts"
import Hero from "../components/HeroSection/Hero"
import Layout from "../components/Layout/Layout"

const Concert = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedConcerts />
    </Layout>
  )
}

export default Concert
