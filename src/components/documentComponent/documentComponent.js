import React from "react"
import DocumentContent from "./components/documentContent"
import DocumentDocuments from "./components/documentDocuments"

const DocumentComponent = ({
  documentDate,
  documentTitle,
  documentDescription,
  textLastUpdate,
  texttitle,
  textSee,
}) => {
  return (
    <>
      <DocumentContent
        documentDate={documentDate}
        documentTitle={documentTitle}
        documentDescription={documentDescription}
        textLastUpdate={textLastUpdate}
      />
      <DocumentDocuments texttitle={texttitle} textSee={textSee} />
    </>
  )
}

export default DocumentComponent
