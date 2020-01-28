import * as React from 'react'
import { addPropertyControls, ControlType, Frame } from 'framer'
import { IntlProvider } from 'react-intl'

import { HomepageFeatures } from './components/HomepageFeatures'

import * as i18n from './i18n/'

export function _HomepageFeatures (props) {
  const { locale } = props
  const localeConfig = i18n.config[locale]

  return (
    <IntlProvider
      defaultLocale={i18n.defaultLocale}
      {...localeConfig}
    >
      <HomepageFeatures />
    </IntlProvider>
  )
}

_HomepageFeatures.defaultProps = {
  locale: i18n.defaultLocale
}

addPropertyControls(_HomepageFeatures, {
  locale: {
    title: 'Locale',
    type: ControlType.Enum,
    defaultValue: i18n.defaultLocale,
    options: i18n.localeCodes,
    optionTitles: i18n.localeNames
  }
})
