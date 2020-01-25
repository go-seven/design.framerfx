import { addPropertyControls, ControlType, Frame } from "framer"
import * as React from "react"
import { IntlProvider } from "react-intl"

import { HomepageRegister } from "./components/HomepageRegister"

import * as i18n from "./i18n/"

export function _HomepageRegister({
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
  locale: i18n.defaultLocale,
}

addPropertyControls(_HomepageRegister, {
  locale: {
    title: "Locale",
    type: ControlType.Enum,
    defaultValue: i18n.defaultLocale,
    options: i18n.localeCodes,
    optionTitles: i18n.localeNames,
  },
})
