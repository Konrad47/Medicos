import React from "react"
import "./styles/materialModal.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Modal from "react-bootstrap/Modal"

const MaterialModal = ({
  currentMaterial,
  showModal,
  closeModal,
  props,
  t,
}) => {
  console.log(currentMaterial)
  return (
    <Modal
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-xl material-modal"
      scrollable
    >
      <Modal.Header>
        <div className="left-header">
          <h3 className="h3-style">{currentMaterial.node.title}</h3>
          <div className="categories">
            {currentMaterial.node.category.map((cat, index) => (
              <div key={index}>
                {cat === "Chemia gospodarcza" && (
                  <div className="category hc-background">
                    <p className="p-style ">{t`materials-filter.household-chemicals`}</p>
                  </div>
                )}
                {cat === "Kosmetyka" && (
                  <div className="category cos-background">
                    <p className="p-style ">{t`materials-filter.cosmetology`}</p>
                  </div>
                )}
                {cat === "Farmacja" && (
                  <div className="category far-background">
                    <p className="p-style ">{t`materials-filter.pharmacy`}</p>
                  </div>
                )}
                {cat === "Żywność i suplementy diety" && (
                  <div className="category food-background">
                    <p className="p-style ">{t`materials-filter.food`}</p>
                  </div>
                )}
                {cat === "Pozostałe branże" && (
                  <div className="category oi-background">
                    <p className="p-style ">{t`materials-filter.other-industries`}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <svg
          onClick={closeModal}
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <g clip-path="url(#clip0_594_2629)">
            <path
              d="M18.5 6.5L6.5 18.5"
              stroke="#144487"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.5 6.5L18.5 18.5"
              stroke="#144487"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_594_2629">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.5 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </Modal.Header>
      <Modal.Body>body</Modal.Body>
    </Modal>
  )
}

export default MaterialModal
