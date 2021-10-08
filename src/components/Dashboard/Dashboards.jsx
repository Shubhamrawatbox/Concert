import React, { useEffect, useState } from "react"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import "./Dashboard.scss"
import ConcertCards from "./ConcertCards"
import axios from "axios"

const Dashboards = () => {
  const [concerts, setconcerts] = useState([])
  const [requesting, setrequesting] = useState(true)
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.predicthq.com/v1/events/?category=concerts&country=india&limit=15",
      headers: {
        Authorization: `Bearer eZ-pnYQDAu5RS7Dw_HYBchBdQIz2UJy4JlRCg6Cu`,
      },
    })
      .then(res => {
        setconcerts(res.data.results)
        setrequesting(false)
      })
      .catch(err => {
        console.log(err)
        setrequesting(false)
      })
  }, [])
  console.log("state: ", concerts)

  let allConcerts
  if (requesting === false && concerts.length > 1) {
    allConcerts = concerts.map(concert => {
      const ConcertInfo = {
        title: concert.title,
        category: concert.category,
        starttime: concert.start,
        endtime: concert.end,
        label: concert.labels,
        timezone: concert.timezone,
      }
      return <ConcertCards Concertinfo={ConcertInfo} key={concert.id} />
    })
  } else {
    allConcerts = <h3 className="text-center">loading...</h3>
  }
  return (
    <div className="dashboard shadow mb-4 bg-white rounded p-3">
      <div className="conatiner">
        <div className="row mb-4">
          <h5>My concert Board</h5>
        </div>
        <Tabs defaultActiveKey="upcoming">
          <Tab eventKey="upcoming" title="Upcoming">
            <div className="upcoming">
              <div className="upcoming">{allConcerts}</div>
            </div>
          </Tab>
          <Tab eventKey="booking" title="Booking">
            <div className="booking">Booked Concert</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Dashboards
