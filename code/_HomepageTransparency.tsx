import { addPropertyControls, ControlType, Frame } from 'framer'
import * as React from 'react'
import { IntlProvider } from 'react-intl'

import { HomepageTransparency } from './components/HomepageTransparency'

import * as i18n from './i18n/'
import * as propertyControl from './propertyControls'

export function _HomepageTransparency ({
  locale,
  ...props
}) {
  const localeConfig = i18n.config[locale]

  return (
    <IntlProvider
      defaultLocale={i18n.defaultLocale}
      {...localeConfig}
    >
      <HomepageTransparency />
    </IntlProvider>
  )
}

_HomepageTransparency.defaultProps = {
  locale: i18n.defaultLocale
}

addPropertyControls(_HomepageTransparency, {
  locale: propertyControl.locale(),
})
