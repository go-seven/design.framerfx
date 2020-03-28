import { addPropertyControls, ControlType, Frame } from 'framer'
import * as React from 'react'
import { IntlProvider } from 'react-intl'

import { HomePageRegister } from './components/HomePageRegister'

import * as i18n from './i18n/'
import * as propertyControl from './propertyControls'

export function _HomePageRegister ({
  locale,
  ...props
}) {
  const localeConfig = i18n.config[locale]

  return (
    <IntlProvider
      defaultLocale={i18n.defaultLocale}
      {...localeConfig}
    >
      <HomePageRegister />
    </IntlProvider>
  )
}

_HomePageRegister.defaultProps = {
  locale: i18n.defaultLocale
}

addPropertyControls(_HomePageRegister, {
  locale: propertyControl.locale(),
})
