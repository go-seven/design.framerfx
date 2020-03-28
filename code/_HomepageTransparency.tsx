import { addPropertyControls, ControlType, Frame } from 'framer'
import * as React from 'react'
import { IntlProvider } from 'react-intl'

import { HomePageTransparency } from './components/HomePageTransparency'

import * as i18n from './i18n/'
import * as propertyControl from './propertyControls'

export function _HomePageTransparency ({
  locale,
  ...props
}) {
  const localeConfig = i18n.config[locale]

  return (
    <IntlProvider
      defaultLocale={i18n.defaultLocale}
      {...localeConfig}
    >
      <HomePageTransparency />
    </IntlProvider>
  )
}

_HomePageTransparency.defaultProps = {
  locale: i18n.defaultLocale
}

addPropertyControls(_HomePageTransparency, {
  locale: propertyControl.locale(),
})
