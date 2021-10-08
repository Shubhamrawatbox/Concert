import React from "react"
import "./Concerts.scss"
const Concerts = ({concertDetail}) => {

return (
    <div className="concert">
      <div className="card">
        <img src={concertDetail.image} alt="not found" />
        <div className="card-body">
          <div className="row">
            <div className="col">
              <span>{concertDetail.month}</span>
              <h2>{concertDetail.day}</h2>
            </div>
            <div className="col-9">
              <h5 className="card-title">{concertDetail.name}</h5>
              <p className="card-text">{concertDetail.description}</p>
              <p>{concertDetail.slug}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Concerts
