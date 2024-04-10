import React, { useEffect, useState, useContext } from "react"
import {
  useTranslation,
  Link,
  I18nextContext,
} from "gatsby-plugin-react-i18next"
import "../styles/contactComponent.css"
import { graphql, useStaticQuery } from "gatsby"
import getCurrentTranslations from "../../../components/contentful-translator"
import "bootstrap/dist/css/bootstrap.min.css"
import Dropdown from "react-bootstrap/Dropdown"

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

  const [message, setMessage] = useState({
    subject: "",
    name: "",
    surname: "",
    email: "",
    firmName: "",
    phoneNumber: "",
    message: "",
    personalData: false,
  })

  const handleSubjectChange = value => {
    setMessage(prevMessage => ({
      ...prevMessage,
      subject: value,
    }))
  }

  const handleNameChange = event => {
    const value = event.target.value

    setMessage(prevMessage => ({
      ...prevMessage,
      name: value,
    }))
  }

  const handleSurnameChange = event => {
    const value = event.target.value

    setMessage(prevMessage => ({
      ...prevMessage,
      surname: value,
    }))
  }

  const handleEmailChange = event => {
    const value = event.target.value

    setMessage(prevMessage => ({
      ...prevMessage,
      email: value,
    }))
  }

  const handleFirmNameChange = event => {
    const value = event.target.value

    setMessage(prevMessage => ({
      ...prevMessage,
      firmName: value,
    }))
  }

  const handlePhoneNumberChange = event => {
    const value = event.target.value

    setMessage(prevMessage => ({
      ...prevMessage,
      phoneNumber: value,
    }))
  }

  const handleMessageChange = event => {
    const value = event.target.value

    setMessage(prevMessage => ({
      ...prevMessage,
      message: value,
    }))
  }

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
                  <div className="info">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_668_2192)">
                        <path
                          d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z"
                          stroke="#4D8CE5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_668_2192">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="info-text">
                      <p className="p-style title">{t`contact-component.sales-number`}</p>
                      <p className="p-style info">{contact.salesNumber}</p>
                    </div>
                  </div>
                  <div className="info">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_668_2192)">
                        <path
                          d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z"
                          stroke="#4D8CE5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_668_2192">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="info-text">
                      <p className="p-style title">{t`contact-component.purchase-number`}</p>
                      <p className="p-style info">{contact.purchaseNumber}</p>
                    </div>
                  </div>
                  <div className="info">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_668_1521)">
                        <path
                          d="M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11Z"
                          stroke="#4D8CE5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.657 16.657L13.414 20.9C13.039 21.2746 12.5306 21.485 12.0005 21.485C11.4704 21.485 10.962 21.2746 10.587 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3.00024 12 3.00024C13.5822 3.00024 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657Z"
                          stroke="#4D8CE5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_668_1521">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="info-text">
                      <p className="p-style title">{t`contact-component.firm-address`}</p>
                      <p className="p-style info">{contact.name}</p>
                      <p className="p-style info">{contact.street}</p>
                      <p className="p-style info">{contact.zipCode}</p>
                    </div>
                  </div>
                  <div className="info">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_668_3677)">
                        <path
                          d="M3 21H21"
                          stroke="#4D8CE5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 8H10"
                          stroke="#4D8CE5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 12H10"
                          stroke="#4D8CE5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 16H10"
                          stroke="#4D8CE5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14 8H15"
                          stroke="#4D8CE5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14 12H15"
                          stroke="#4D8CE5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14 16H15"
                          stroke="#4D8CE5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21"
                          stroke="#4D8CE5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_668_3677">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="info-text">
                      <p className="p-style title">{t`contact-component.firm-data`}</p>
                      <p className="p-style info">NIP: {contact.nip}</p>
                      <p className="p-style info">REGON: {contact.regon}</p>
                      <p className="p-style info">{contact.registration}</p>
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
              <div className="form-con">
                <div className="subject-div">
                  <label htmlFor="subject">{t`contact-component.subject`}</label>
                  <Dropdown id="subject">
                    <Dropdown.Toggle
                      id="down-centered"
                      style={{
                        color: message.subject === "" ? "#B0C7E8" : "inherit",
                      }}
                    >
                      {message.subject === "" &&
                        `${t`contact-component.subject-placeholder`}`}
                      {message.subject === "Chcę kupić surowiec" &&
                        `${t`contact-component.subject-buy-material`}`}
                      {message.subject ===
                        "Chcę zapytać o dostępność surowca" &&
                        `${t`contact-component.subject-avaliable-material`}`}
                      {message.subject ===
                        "Chcę zamówić doradztwo techniczne" &&
                        `${t`contact-component.subject-technic`}`}
                      {message.subject ===
                        "Chcę zamówić analizę rynku dostawców" &&
                        `${t`contact-component.subject-analysis`}`}
                      {message.subject ===
                        "Chcę zamówić wyszukiwanie substancji" &&
                        `${t`contact-component.subject-search-material`}`}
                      {message.subject === "Inny temat" &&
                        `${t`contact-component.subject-other`}`}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <p
                          onClick={() =>
                            handleSubjectChange("Chcę kupić surowiec")
                          }
                        >{t`contact-component.subject-buy-material`}</p>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <p
                          onClick={() =>
                            handleSubjectChange(
                              "Chcę zapytać o dostępność surowca"
                            )
                          }
                        >{t`contact-component.subject-avaliable-material`}</p>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <p
                          onClick={() =>
                            handleSubjectChange(
                              "Chcę zamówić doradztwo techniczne"
                            )
                          }
                        >{t`contact-component.subject-technic`}</p>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <p
                          onClick={() =>
                            handleSubjectChange(
                              "Chcę zamówić analizę rynku dostawców"
                            )
                          }
                        >{t`contact-component.subject-analysis`}</p>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <p
                          onClick={() =>
                            handleSubjectChange(
                              "Chcę zamówić wyszukiwanie substancji"
                            )
                          }
                        >{t`contact-component.subject-search-material`}</p>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <p
                          onClick={() => handleSubjectChange("Inny temat")}
                        >{t`contact-component.subject-other`}</p>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="name-div">
                  <div className="subject-div">
                    <label htmlFor="name">{t`contact-component.name`}</label>
                    <input
                      className="message-input"
                      id="name"
                      placeholder={`${t`contact-component.name-placeholder`}`}
                      value={message.name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div className="subject-div">
                    <label htmlFor="surname">{t`contact-component.surname`}</label>
                    <input
                      className="message-input"
                      id="surname"
                      placeholder={`${t`contact-component.surname-placeholder`}`}
                      value={message.surname}
                      onChange={handleSurnameChange}
                    />
                  </div>
                </div>
                <div className="subject-div">
                  <label htmlFor="email">{t`contact-component.email`}</label>
                  <input
                    className="message-input"
                    id="email"
                    placeholder={`${t`contact-component.email-placeholder`}`}
                    value={message.email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="subject-div">
                  <label htmlFor="firmName">
                    {t`contact-component.firmName`}{" "}
                    {t`contact-component.optional`}
                  </label>
                  <input
                    className="message-input"
                    id="firmName"
                    placeholder={`${t`contact-component.firmName-placeholder`}`}
                    value={message.firmName}
                    onChange={handleFirmNameChange}
                  />
                </div>
                <div className="subject-div">
                  <label htmlFor="phoneNumber">
                    {t`contact-component.phoneNumber`}{" "}
                    {t`contact-component.optional`}
                  </label>
                  <input
                    className="message-input"
                    id="phoneNumber"
                    placeholder={`${t`contact-component.phoneNumber-placeholder`}`}
                    value={message.phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                </div>
                <div className="subject-div">
                  <label htmlFor="message">{t`contact-component.message`}</label>
                  <textarea
                    className="message-input message-textarea"
                    id="message"
                    placeholder={`${t`contact-component.message-placeholder`}`}
                    value={message.message}
                    onChange={handleMessageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactComponent
