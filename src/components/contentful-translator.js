const CONTENTFUL_LANGUAGE_PL = "pl-PL"
const CONTENTFUL_LANGUAGE_EN = "en"
const LANGUAGE_PL = "pl"
// const LANGUAGE_EN = 'en'

function getCurrentTranslations(edges, language) {
  let currentLanguage =
    language === LANGUAGE_PL ? CONTENTFUL_LANGUAGE_PL : CONTENTFUL_LANGUAGE_EN
  return edges.filter(edge => edge.node.node_locale === currentLanguage)
}

export default getCurrentTranslations
