import React from "react"
import Moment from "react-moment"
import "./Dashboard.scss"
const ConcertCards = ({ Concertinfo }) => {
  return (
    <div className="concert-card shadow-sm p-3 mb-2 bg-white rounded">
      <h5>{Concertinfo.title}</h5>
      <ul>
        <li>{Concertinfo.category}</li>
        <li>
          <small>
            <Moment format="D MMM YYYY">{Concertinfo.starttime}</Moment>
          </small>
          &nbsp;to &nbsp;
          <small>
            <Moment format="D MMM YYYY">{Concertinfo.endtime}</Moment>
          </small>
        </li>
        <li>
          {Concertinfo.timezone}
        </li>
      </ul>
      <hr />
      <div className="row">
        <div className="col">
          {Concertinfo.label.map(tag => {
            return <span className="badge badge-pill badge-light">{tag}</span>
          })}
        </div>
        <div className="col-2">
          <button className="btn btn-sm btn-outline-danger float-right">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConcertCards
