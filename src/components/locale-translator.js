const LANGUAGE_PL = "pl"
const LANGUAGE_EN = "en"

function getLocaleTranslations(edges, language) {
  let currentLanguage
  if (language === "pl" || language === "pl-PL") {
    currentLanguage = LANGUAGE_PL
  } else if (language === "en") {
    currentLanguage = LANGUAGE_EN
  }

  return edges.filter(edge => edge.node.language === currentLanguage)
}

export default getLocaleTranslations
