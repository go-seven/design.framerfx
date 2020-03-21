import * as React from 'react'
import { addPropertyControls, Frame } from 'framer'
import { IntlProvider } from 'react-intl'

import { HomepageFeatures } from './components/HomepageFeatures'

import * as i18n from './i18n/'
import * as propertyControl from './propertyControls'

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
  locale: propertyControl.locale(),
})
