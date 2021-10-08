import React from "react"
import Dashboards from "../components/Dashboard/Dashboards"
import Layout from "../components/Layout/Layout"
import Profile from "../components/Profile/Profile"
const dashboard = () => {
  return (
    <Layout auth={true}>
      <div className=" container mt-4 mb-4">
        <h5>concert center</h5>
        <br />
        <div className="row">
          <div className="col-3">
            <Profile />
          </div>
          <div className="col">
            <Dashboards/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default dashboard
