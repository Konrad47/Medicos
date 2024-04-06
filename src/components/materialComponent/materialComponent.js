import React from "react"
import MaterialHeader from "./components/materialHeader"

const MaterialComponent = ({
  backgroundHeader,
  titleHeader,
  descriptionHeader,
}) => {
  return (
    <>
      <MaterialHeader
        backgroundHeader={backgroundHeader}
        titleHeader={titleHeader}
        descriptionHeader={descriptionHeader}
      />
    </>
  )
}
export default MaterialComponent
