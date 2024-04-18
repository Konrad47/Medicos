import React from "react"
import DocumentContent from "./components/documentContent"
import DocumentDocuments from "./components/documentDocuments"

const DocumentComponent = ({
  documentDate,
  documentTitle,
  documentDescription,
  t,
}) => {
  return (
    <>
      <DocumentContent
        documentDate={documentDate}
        documentTitle={documentTitle}
        documentDescription={documentDescription}
        t={t}
      />
      <DocumentDocuments t={t} />
    </>
  )
}

export default DocumentComponent
