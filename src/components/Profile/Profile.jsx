import React from "react"
import profileimg from "../../images/Picture2-1.jpg"
import './Profile.scss'
const Profile = () => {
  return (
    <div className="profile shadow mb-5 bg-white rounded p-3">
      <div className="img-section">
        <img src={profileimg} alt="not found" className="img-fluid" />
      </div>
      <div className="text-section">
        <h4>Ahmed Ansari</h4>
        <h5>Concert Manager</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          voluptatem.
        </p>
      </div>
    </div>
  )
}

export default Profile
