import * as React from 'react'
import { addPropertyControls, ControlType, Frame } from 'framer'
import { IntlProvider } from 'react-intl'

import { HomepagePricing } from './components/HomepagePricing'

import * as i18n from './i18n/'

export function _HomepagePricing ({
  locale,
  ...props
}) {
  const localeConfig = i18n.config[locale]

  return (
    <IntlProvider
      defaultLocale={i18n.defaultLocale}
      {...localeConfig}
    >
      <HomepagePricing />
    </IntlProvider>
  )
}

_HomepagePricing.defaultProps = {
  locale: i18n.defaultLocale
}

addPropertyControls(_HomepagePricing, {
  locale: {
    title: 'Locale',
    type: ControlType.Enum,
    defaultValue: i18n.defaultLocale,
    options: i18n.localeCodes,
    optionTitles: i18n.localeNames
  }
})
