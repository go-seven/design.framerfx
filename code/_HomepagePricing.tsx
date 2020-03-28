import * as React from 'react'
import { addPropertyControls, ControlType, Frame } from 'framer'
import { IntlProvider } from 'react-intl'

import { HomePagePricing } from './components/HomePagePricing'

import * as i18n from './i18n/'

import * as propertyControl from './propertyControls'

export function _HomePagePricing ({
  locale,
  ...props
}) {
  const localeConfig = i18n.config[locale]

  return (
    <IntlProvider
      defaultLocale={i18n.defaultLocale}
      {...localeConfig}
    >
      <HomePagePricing />
    </IntlProvider>
  )
}

_HomePagePricing.defaultProps = {
  locale: i18n.defaultLocale
}

addPropertyControls(_HomePagePricing, {
  locale: propertyControl.locale(),
})
