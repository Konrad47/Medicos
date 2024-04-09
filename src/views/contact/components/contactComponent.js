import React, { useEffect, useState, useContext } from "react"
import {
  useTranslation,
  Link,
  I18nextContext,
} from "gatsby-plugin-react-i18next"
import "../styles/contactComponent.css"
import { graphql, useStaticQuery } from "gatsby"
import getCurrentTranslations from "../../../components/contentful-translator"

const ContactComponent = () => {
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    query {
      allContentfulContact {
        edges {
          node {
            email
            krs
            name
            nip
            node_locale
            purchaseNumber
            registration
            regon
            salesNumber
            street
            zipCode
          }
        }
      }
    }
  `)

  const [contact, setContact] = useState()

  useEffect(() => {
    const getData = () => {
      const getContact = getCurrentTranslations(
        data.allContentfulContact.edges,
        language
      )

      console.log(getContact[0])
      setContact(getContact[0].node)
    }
    getData()
  }, [data.allContentfulContact, language])

  return (
    <>
      <div className="contact-c-container">
        <div className="container">
          <div className="contact-con">
            <div className="left-con">
              <div className="title-con">
                <h1 className="h1-style">{t`contact-component.contact-title`}</h1>
                <p className="p-style">{t`contact-component.contact-description`}</p>
              </div>
              {contact && (
                <div className="contact-info-con">
                  <div className="info">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_668_1783)">
                        <path
                          d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z"
                          stroke="#4D8CE5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3 7L12 13L21 7"
                          stroke="#4D8CE5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_668_1783">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="info-text">
                      <p className="p-style title">{t`contact-component.contact-email`}</p>
                      <p className="p-style info">{contact.email}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="right-con">
              <div className="title-con">
                <h2 className="h2-style">{t`contact-component.message-title`}</h2>
                <p className="p-style">{t`contact-component.message-description`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactComponent
