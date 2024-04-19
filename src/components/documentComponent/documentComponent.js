import React from "react"
import DocumentContent from "./components/documentContent"
import DocumentDocuments from "./components/documentDocuments"

const DocumentComponent = ({
  documentDate,
  documentTitle,
  documentDescription,
  textLastUpdate,
  texttitle,
  textCertificate1,
  textCertificate2,
  textCertificate3,
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
      <DocumentDocuments
        texttitle={texttitle}
        textCertificate1={textCertificate1}
        textCertificate2={textCertificate2}
        textCertificate3={textCertificate3}
        textSee={textSee}
      />
    </>
  )
}

export default DocumentComponent
