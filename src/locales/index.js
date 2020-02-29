
import { Platform, NativeModules } from 'react-native'
import I18n from 'i18n-js'

import en from './en-US'
import pt from './pt-BR'
import es from './es-ES'

const normalizeTranslate = {
    'en_US': 'en_US',
    'pt_BR': 'pt_BR',
    'en': 'en_US',
    'pt_US': 'pt_BR',
    'es_US': 'es_ES',
    'es_ES': 'es_ES'
}

const getLanguageByDevice = () => {
    return Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale
        : NativeModules.I18nManager.localeIdentifier
}

I18n.translations = {
    'en_US': en,
    'pt_BR': pt,
    'es_ES': es
}

const setLanguageToI18n = () => {
    const language = getLanguageByDevice()
    const translateNormalize = normalizeTranslate[language]
    const iHaveThisLanguage = I18n.translations.hasOwnProperty(translateNormalize)

    I18n.fallbacks = true

    iHaveThisLanguage
        ? I18n.locale = translateNormalize
        : I18n.defaultLocale = 'en_US'
}

setLanguageToI18n()

export const translate = key => I18n.t(key)
