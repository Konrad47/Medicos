import React from "react"
import DocumentContent from "./components/documentContent"

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
    </>
  )
}

export default DocumentComponent
