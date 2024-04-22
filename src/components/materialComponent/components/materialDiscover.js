import React, { useContext, useState } from "react"
import { I18nextContext, Link } from "gatsby-plugin-react-i18next"
import "../styles/materialDiscover.css"
import MaterialTile from "../../../components/materialTile/materialTile"
import MaterialModal from "../../../components/materialModal/materialModal"
import QueryNavigate from "../../../hooks/queryNavigate"

const MaterialDiscover = ({
  materialDiscover,
  titleDiscover,
  descriptionDiscover,
  t,
  materialQuery,
}) => {
  const { language } = useContext(I18nextContext)

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

  const goToMaterials = () => {
    QueryNavigate(materialQuery, "materials", language)
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
          <button onClick={goToMaterials} className="bright-button">
            {t`materials.more-materials`}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_889_6898)">
                <path
                  d="M19 12L5 12"
                  stroke="#4D8CE5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 12L13 6"
                  stroke="#4D8CE5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 12L13 18"
                  stroke="#4D8CE5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_889_6898">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default MaterialDiscover
