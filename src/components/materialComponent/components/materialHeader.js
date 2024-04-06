import React from "react"
import "../styles/materialHeader.css"
const MaterialHeader = ({
  backgroundHeader,
  titleHeader,
  descriptionHeader,
}) => {
  return (
    <>
      <div className={`material-h-container ${backgroundHeader}`}>
        <div className="container">
          <h1 className="h1-style">{titleHeader}</h1>
          <p className="p-style">{descriptionHeader}</p>
        </div>
      </div>
    </>
  )
}

export default MaterialHeader
