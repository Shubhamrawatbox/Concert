import React from "react"
import EmailFormDisplay from "../components/Email/EmailFormDisplay"
import Hero from "../components/HeroSection/Hero"
import Layout from "../components/Layout/Layout"
import About from "../components/About/About"


const Index = () => {
  return (
    <Layout>
      <div>
        <Hero/>
        <EmailFormDisplay/>
        <About/>
      </div>
    </Layout>
  )
}

export default Index
