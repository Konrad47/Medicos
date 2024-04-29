import React from "react"
import MaterialHeader from "./components/materialHeader"
import MaterialApplication from "./components/materialApplication"
import MaterialDiscover from "./components/materialDiscover"

const MaterialComponent = ({
  backgroundHeader,
  titleHeader,
  descriptionHeader,
  imageApplication,
  titleApplication,
  descriptionApplication,
  descriptionApplication2,
  descriptionApplication3,
  materialDiscover,
  titleDiscover,
  descriptionDiscover,
  t,
  materialQuery,
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
        descriptionApplication2={descriptionApplication2}
        descriptionApplication3={descriptionApplication3}
        backgroundHeader={backgroundHeader}
        titleHeader={titleHeader}
        descriptionHeader={descriptionHeader}
      />
      {materialDiscover && (
        <MaterialDiscover
          materialDiscover={materialDiscover}
          titleDiscover={titleDiscover}
          descriptionDiscover={descriptionDiscover}
          materialQuery={materialQuery}
          t={t}
        />
      )}
    </>
  )
}
export default MaterialComponent
