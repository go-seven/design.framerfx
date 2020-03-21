import { addPropertyControls, ControlType, Frame } from 'framer'
import * as React from 'react'
import { IntlProvider } from 'react-intl'

import { HomepageRegister } from './components/HomepageRegister'

import * as i18n from './i18n/'
import * as propertyControl from './propertyControls'

export function _HomepageRegister ({
  locale,
  ...props
}) {
  const localeConfig = i18n.config[locale]

  return (
    <IntlProvider
      defaultLocale={i18n.defaultLocale}
      {...localeConfig}
    >
      <HomepageRegister />
    </IntlProvider>
  )
}

_HomepageRegister.defaultProps = {
  locale: i18n.defaultLocale
}

addPropertyControls(_HomepageRegister, {
  locale: propertyControl.locale(),
})
