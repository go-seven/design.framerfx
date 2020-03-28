import {
  addPropertyControls,
  ControlType,
} from 'framer'
import * as React from 'react'
import { IntlProvider } from 'react-intl'

import { EnterAccountForm } from './components/EnterAccountForm'
import { FirstPage } from './components/FirstPage'

import * as i18n from './i18n/'

import * as propertyControl from './propertyControls'

export function _EnterPage ({
  clientWidth,
  locale,
  ...props
}) {
  const localeConfig = i18n.config[locale]

  return (
    <IntlProvider
      defaultLocale={i18n.defaultLocale}
      {...localeConfig}
    >
      <FirstPage>
        <EnterAccountForm
          clientWidth={clientWidth}
          enterAccount={Function.prototype}
          enterAccountRequestIsWaiting={false}
        />
      </FirstPage>
    </IntlProvider>
  )
}

_EnterPage.defaultProps = {
  clientHeight: 400,
  clientWidth: 400,
  locale: i18n.defaultLocale,
}

addPropertyControls(_EnterPage, {
  clientHeight: propertyControl.clientHeight(_EnterPage.defaultProps.clientHeight),
  clientWidth: propertyControl.clientWidth(_EnterPage.defaultProps.clientWidth),
  locale: propertyControl.locale(),
})
