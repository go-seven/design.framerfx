import * as React from 'react'
import { addPropertyControls, Frame } from 'framer'
import { IntlProvider } from 'react-intl'

import { Footer } from './components/Footer'

import * as i18n from './i18n/'
import * as propertyControl from './propertyControls'

export function _Footer ({
  locale,
  ...props
}) {
  const localeConfig = i18n.config[locale]

  return (
    <IntlProvider
      defaultLocale={i18n.defaultLocale}
      {...localeConfig}
    >
      <Footer />
    </IntlProvider>
  )
}

_Footer.defaultProps = {
  locale: i18n.defaultLocale
}

addPropertyControls(_Footer, {
  locale: propertyControl.locale(),
})
