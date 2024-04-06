import React from "react"
import MaterialHeader from "./components/materialHeader"
import MaterialApplication from "./components/materialApplication"

const MaterialComponent = ({
  backgroundHeader,
  titleHeader,
  descriptionHeader,
  imageApplication,
  titleApplication,
  descriptionApplication,
}) => {
  return (
    <>
      <MaterialHeader
        backgroundHeader={backgroundHeader}
        titleHeader={titleHeader}
        descriptionHeader={descriptionHeader}
      />
      <MaterialApplication
        imageApplication={imageApplication}
        titleApplication={titleApplication}
        descriptionApplication={descriptionApplication}
      />
    </>
  )
}
export default MaterialComponent
