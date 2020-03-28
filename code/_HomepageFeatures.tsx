import * as React from 'react'
import { addPropertyControls, Frame } from 'framer'
import { IntlProvider } from 'react-intl'

import { HomePageFeatures } from './components/HomePageFeatures'

import * as i18n from './i18n/'
import * as propertyControl from './propertyControls'

export function _HomePageFeatures (props) {
  const { locale } = props
  const localeConfig = i18n.config[locale]

  return (
    <IntlProvider
      defaultLocale={i18n.defaultLocale}
      {...localeConfig}
    >
      <HomePageFeatures />
    </IntlProvider>
  )
}

_HomePageFeatures.defaultProps = {
  locale: i18n.defaultLocale
}

addPropertyControls(_HomePageFeatures, {
  locale: propertyControl.locale(),
})
