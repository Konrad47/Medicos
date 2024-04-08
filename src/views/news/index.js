import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import NewsHeader from "./components/newsHeader"

const News = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo title={t`seo.news.title`} description={t`seo.news.description`} />
      <NewsHeader />
    </Layout>
  )
}
export default News
