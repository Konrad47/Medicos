import React from "react"
import "../styles/documentContent.css"
import { articleTextRenderOptions } from "../../../utils/articleRenderOption"
import moment from "moment"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const DocumentContent = ({
  documentDate,
  documentTitle,
  documentDescription,
  t,
}) => {
  return (
    <>
      <div className="document-c-container">
        <div className="container">
          <div className="title-con">
            <p className="p-style">
              {t`document-content.last-update`}{" "}
              {moment(documentDate).format("DD/MM/YYYY HH:MM")}
            </p>
            <h2 className="h2-style">{documentTitle}</h2>
          </div>
          <div className="description-con">
            {renderRichText(documentDescription, articleTextRenderOptions)}
          </div>
        </div>
      </div>
    </>
  )
}

export default DocumentContent
