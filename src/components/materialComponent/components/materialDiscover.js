import React, { useState } from "react"
import { Link } from "gatsby-plugin-react-i18next"
import "../styles/materialDiscover.css"
import MaterialTile from "../../../components/materialTile/materialTile"
import MaterialModal from "../../../components/materialModal/materialModal"

const MaterialDiscover = ({
  materialDiscover,
  titleDiscover,
  descriptionDiscover,
  t,
}) => {
  //   const { t } = useTranslation()
  const renderMaterials = value => {
    return value.map((val, index) => (
      <MaterialTile
        openModal={() => openModal(val)}
        key={index}
        material={val}
        t={t}
      />
    ))
  }

  const [showModal, setShowModal] = useState(false)
  const [currentMaterial, setCurrentMaterial] = useState()

  const openModal = material => {
    console.log(material)
    setCurrentMaterial(material)
    setShowModal(true)
  }

  const closeModal = () => {
    console.log(showModal)
    setShowModal(false)
  }

  return (
    <>
      <div className="material-d-container">
        <div className="container">
          <div className="text">
            <h2 className="h2-style">{titleDiscover}</h2>
            <p className="p-style">{descriptionDiscover}</p>
          </div>
          {materialDiscover && (
            <>
              <div className="content-con">
                <div className="results-con">
                  {renderMaterials(materialDiscover)}
                </div>
              </div>
              {currentMaterial && (
                <MaterialModal
                  showModal={showModal}
                  currentMaterial={currentMaterial}
                  closeModal={closeModal}
                  t={t}
                />
              )}
            </>
          )}
          <Link
            to="/materials"
            className="bright-button"
          >{t`materials.more-materials`}</Link>
        </div>
      </div>
    </>
  )
}

export default MaterialDiscover
