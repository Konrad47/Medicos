import React from "react"
import "../styles/materialApplication.css"

const MaterialApplication = ({
  imageApplication,
  titleApplication,
  descriptionApplication,
  descriptionApplication2,
  descriptionApplication3,
}) => {
  return (
    <>
      <div className="material-a-container">
        <div className="container">
          <div className="material-grid">
            <div className="text-con">
              <h2 className="h2-style">{titleApplication}</h2>
              <p className="p-style">{descriptionApplication}</p>
              <p className="p-style">{descriptionApplication2}</p>
              <p className="p-style">{descriptionApplication3}</p>
            </div>
            <div className="image-con">{imageApplication()}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MaterialApplication
