import React, { useState, useEffect, useContext } from "react"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import "../styles/speakers.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-bootstrap/Carousel"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import getCurrentTranslations from "../../../components/contentful-translator"
import Modal from "react-bootstrap/Modal"

const Speakers = () => {
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    query {
      allContentfulSpeaker(sort: { createdAt: ASC }) {
        edges {
          node {
            description {
              description
            }
            name
            role
            instagram
            facebook
            linkedIn
            twitter
            image {
              file {
                url
              }
              gatsbyImageData(
                cornerRadius: 16
                height: 267
                width: 267
                quality: 100
              )
              title
            }
            node_locale
          }
        }
      }
    }
  `)

  const [speakers, setSpeakers] = useState()
  const [modalShow, setModalShow] = useState(false)
  const [currentSpeaker, setCurrentSpeaker] = useState()

  useEffect(() => {
    const getSpeakers = () => {
      const getSpeakers = getCurrentTranslations(
        data.allContentfulSpeaker.edges,
        language
      )
      setSpeakers(getSpeakers)
    }
    getSpeakers()
    console.log(window.innerWidth)

    console.log(speakers)
  }, [data.allContentfulSpeaker, language])

  const renderSpeakerGroups = () => {
    const speakerGroups = []

    for (let i = 0; i < speakers.length; i += 10) {
      const group = speakers.slice(i, i + 10)

      if (group.length < 10 && window.innerWidth > 850) {
        group.push(...Array.from({ length: 10 - group.length }))
      }

      speakerGroups.push(group)
    }

    const openModal = speaker => {
      setCurrentSpeaker(speaker)
      setModalShow(true)
      console.log(speaker)
    }

    return speakerGroups?.map((group, index) => (
      <Carousel.Item key={index}>
        <div className="speakers-container">
          {group.map((speaker, idx) => (
            <div
              style={{
                cursor: speaker?.node.description !== null && "pointer",
              }}
              onClick={() =>
                speaker?.node.description !== null && openModal(speaker)
              }
              className="speaker"
              key={idx}
            >
              {speaker && (
                <div className="speaker-content">
                  <div>
                    <h4 className="h4-style">{speaker.node.name}</h4>
                    <p className="p-role">{speaker.node.role}</p>
                  </div>
                  <p>{t`speakers.read-more`}</p>
                </div>
              )}
              <div className="speaker-image-wrapper">
                <GatsbyImage
                  alt={speaker?.node.name}
                  placeholder={speaker?.node.name}
                  className="speaker-image"
                  image={
                    speaker
                      ? getImage(speaker.node.image.gatsbyImageData)
                      : null
                  }
                />
                <div className="color-overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </Carousel.Item>
    ))
  }

  const SpeakerModal = props => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-xl"
        scrollable
      >
        <Modal.Header>
          <svg
            onClick={() => setModalShow(false)}
            className="close-modal-button"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <g clip-path="url(#clip0_24_504)">
              <path
                d="M36 12L12 36"
                stroke="black"
                stroke-width="2.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 12L36 36"
                stroke="black"
                stroke-width="2.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_24_504">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <GatsbyImage
            alt={currentSpeaker.node.name}
            placeholder={currentSpeaker.node.name}
            className="current-speaker-image image-header"
            image={getImage(currentSpeaker.node.image.gatsbyImageData)}
          />
        </Modal.Header>
        <Modal.Body>
          <div className="current-speaker-image">
            <GatsbyImage
              alt={currentSpeaker.node.name}
              placeholder={currentSpeaker.node.name}
              className="current-speaker-image image-body"
              image={getImage(currentSpeaker.node.image.gatsbyImageData)}
            />
          </div>
          <div className="modal-body-content">
            <h2 className="h2-style">{currentSpeaker.node.name}</h2>
            <p>{currentSpeaker.node.role}</p>
            <span className="p-style">
              {currentSpeaker.node.description.description}
            </span>
            <div className="social-icons">
              {currentSpeaker.node.linkedIn && (
                <a target="_blank" href={currentSpeaker.node.linkedIn}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M28.7284 28.7396H23.7984V21.0034C23.7984 19.1586 23.7598 16.7879 21.2203 16.7879C18.6496 16.7879 18.2579 18.7889 18.2579 20.8669V28.7386H13.3216V12.8318H18.0631V15.0015H18.1267C18.7892 13.7484 20.4006 12.4307 22.8047 12.4307C27.8056 12.4307 28.7336 15.7233 28.7336 20.0045V28.7386L28.7284 28.7396ZM7.74472 10.6579C6.15415 10.6579 4.87919 9.37145 4.87919 7.78712C4.87919 6.20801 6.15936 4.92367 7.74472 4.92367C9.33009 4.92367 10.6144 6.20801 10.6144 7.78712C10.6144 9.37145 9.33009 10.6579 7.74472 10.6579ZM10.2176 28.7396H5.27084V12.8328H10.2176V28.7396ZM31.2034 0.333191H2.79175C1.4345 0.333191 0.333496 1.40712 0.333496 2.73624V31.2635C0.333496 32.5926 1.4345 33.6665 2.79175 33.6665H31.1982C32.5533 33.6665 33.6658 32.5926 33.6658 31.2635V2.73624C33.6658 1.40712 32.5533 0.333191 31.1982 0.333191L31.2034 0.333191Z"
                      fill="#961D8A"
                    />
                  </svg>
                </a>
              )}
              {currentSpeaker.node.facebook && (
                <a target="_blank" href={currentSpeaker.node.facebook}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M28.6811 7.18102C28.6811 6.96677 28.596 6.7613 28.4445 6.6098C28.293 6.45831 28.0875 6.3732 27.8733 6.3732H23.8342C21.8003 6.27189 19.809 6.97969 18.2954 8.34198C16.7817 9.70426 15.8688 11.6103 15.7561 13.6435V18.0057H11.717C11.5027 18.0057 11.2973 18.0909 11.1458 18.2423C10.9943 18.3938 10.9092 18.5993 10.9092 18.8136V23.0142C10.9092 23.2284 10.9943 23.4339 11.1458 23.5854C11.2973 23.7369 11.5027 23.822 11.717 23.822H15.7561V34.6467C15.7561 34.861 15.8412 35.0665 15.9927 35.218C16.1442 35.3694 16.3496 35.4546 16.5639 35.4546H21.4108C21.625 35.4546 21.8305 35.3694 21.982 35.218C22.1335 35.0665 22.2186 34.861 22.2186 34.6467V23.822H26.4515C26.6312 23.8246 26.8066 23.7672 26.9499 23.659C27.0933 23.5507 27.1965 23.3977 27.2432 23.2242L28.4065 19.0236C28.4386 18.9042 28.4429 18.7791 28.4191 18.6578C28.3953 18.5365 28.3439 18.4223 28.269 18.324C28.1941 18.2257 28.0976 18.1458 27.987 18.0907C27.8764 18.0355 27.7546 18.0064 27.631 18.0057H22.2186V13.6435C22.2588 13.2436 22.4466 12.8731 22.7453 12.6042C23.0441 12.3353 23.4323 12.1875 23.8342 12.1895H27.8733C28.0875 12.1895 28.293 12.1044 28.4445 11.9529C28.596 11.8014 28.6811 11.5959 28.6811 11.3817V7.18102Z"
                      fill="#961D8A"
                    />
                  </svg>
                </a>
              )}
              {currentSpeaker.node.instagram && (
                <a target="_blank" href={currentSpeaker.node.instagram}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M33.5595 10.1717C33.5391 8.77278 33.28 7.38497 32.7839 6.07662C31.9158 3.84245 30.148 2.07581 27.9101 1.21097C26.6163 0.724957 25.2484 0.464396 23.8638 0.434828C22.0831 0.355366 21.5185 0.333191 16.9983 0.333191C12.4781 0.333191 11.8987 0.333191 10.131 0.434828C8.74828 0.464396 7.38037 0.724957 6.0865 1.21097C3.8486 2.07581 2.07902 3.84245 1.21273 6.07662C0.725914 7.36834 0.463068 8.73398 0.437154 10.1144C0.357559 11.894 0.333496 12.4576 0.333496 16.9703C0.333496 21.483 0.333496 22.0595 0.437154 23.8262C0.464919 25.2085 0.725914 26.5722 1.21273 27.8677C2.08087 30.1 3.8486 31.8666 6.08835 32.7315C7.37666 33.2341 8.74457 33.5187 10.1328 33.563C11.9154 33.6425 12.48 33.6665 17.0002 33.6665C21.5204 33.6665 22.0998 33.6665 23.8675 33.563C25.2502 33.5353 26.6181 33.2748 27.9138 32.7887C30.1517 31.9221 31.9195 30.1554 32.7876 27.9231C33.2744 26.6295 33.5354 25.2657 33.5632 23.8816C33.6428 22.1039 33.6668 21.5403 33.6668 17.0257C33.6631 12.513 33.6631 11.9402 33.5595 10.1717ZM16.9872 25.5041C12.2597 25.5041 8.4299 21.6807 8.4299 16.9611C8.4299 12.2414 12.2597 8.41798 16.9872 8.41798C21.711 8.41798 25.5445 12.2414 25.5445 16.9611C25.5445 21.6807 21.711 25.5041 16.9872 25.5041ZM25.8851 10.0941C24.78 10.0941 23.8897 9.20335 23.8897 8.10198C23.8897 7.0006 24.78 6.10988 25.8851 6.10988C26.9865 6.10988 27.8787 7.0006 27.8787 8.10198C27.8787 9.20335 26.9865 10.0941 25.8851 10.0941Z"
                      fill="#961D8A"
                    />
                    <path
                      d="M16.9874 22.5105C20.0573 22.5105 22.546 20.026 22.546 16.9611C22.546 13.8963 20.0573 11.4117 16.9874 11.4117C13.9174 11.4117 11.4287 13.8963 11.4287 16.9611C11.4287 20.026 13.9174 22.5105 16.9874 22.5105Z"
                      fill="#961D8A"
                    />
                  </svg>
                </a>
              )}
              {currentSpeaker.node.twitter && (
                <a target="_blank" href={currentSpeaker.node.twitter}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M36.6668 19.9999C36.6668 29.2046 29.2049 36.6665 20.0002 36.6665C10.7954 36.6665 3.3335 29.2046 3.3335 19.9999C3.3335 10.7951 10.7954 3.33319 20.0002 3.33319C29.2049 3.33319 36.6668 10.7951 36.6668 19.9999ZM17.6999 20.9952L9.73348 10.3434H15.8734L21.0961 17.3265L27.5598 10.3434H29.3642L21.9022 18.4048L30.3171 29.6555H24.1771L18.5064 22.0731L11.4876 29.6555H9.68327L17.6999 20.9952ZM15.2075 11.6724H12.3869L24.8427 28.3266H27.6633L15.2075 11.6724Z"
                      fill="#961D8A"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
  return (
    <>
      <div className="s-container">
        <div className="container">
          <h2 className="h2-style">{t`speakers.title`}</h2>
          <Carousel interval={60000} pause={"hover"}>
            {speakers && renderSpeakerGroups()}
          </Carousel>
          {currentSpeaker && (
            <SpeakerModal show={modalShow} onHide={() => setModalShow(false)} />
          )}
        </div>
      </div>
    </>
  )
}

export default Speakers
