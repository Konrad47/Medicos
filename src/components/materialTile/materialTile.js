import React from "react"
import "./styles/materialTile.css"

const MaterialTile = ({ material, openModal, t }) => {
  return (
    <div className="material-tile" onClick={openModal}>
      <h4 className="h4-style">{material.node.title}</h4>
      <div className="up-text">
        <p className="p-style">{t`materials-content.inci`}</p>
        <span className="p-style">{material.node.inci}</span>
      </div>
      <div className="down-text">
        <p className="p-style">{t`materials-content.cas`}</p>
        <span className="p-style">{material.node.cas}</span>
      </div>
      <div className="categories">
        {material.node.category.map((cat, index) => (
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
      <p className="p-style details">{t`materials-content.details`}</p>
    </div>
  )
}

export default MaterialTile
