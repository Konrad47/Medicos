import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"

const News = () => {
  const { t } = useTranslation()

  return (
    <>
      <Seo title={t`seo.news.title`} description={t`seo.news.description`} />
      <h1>News Page</h1>
    </>
  )
}
export default News
