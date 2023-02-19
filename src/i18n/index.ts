import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import CNTrans from './locales/zh-CN.json'
import ENTrans from './locales/en-US.json'
import { getDefalutLang } from '@/utils'

console.log('ENTrans', ENTrans)

const resources = {
  en_US: {
    translation: ENTrans,
  },
  zh_CN: {
    translation: CNTrans,
  },
}

const defaultLang = getDefalutLang()

console.log('defaultLang', defaultLang)

i18n.use(initReactI18next).init({
  lng: defaultLang,
  resources,
  fallbackLng: defaultLang,
  interpolation: {
    escapeValue: false,
  },
})

export const changelanguage = (lang: 'en_US' | 'zh_CN') => {
  i18n.changeLanguage(lang)
}

export default i18n
