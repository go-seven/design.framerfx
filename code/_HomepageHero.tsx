import { url } from 'framer/resource'
import * as React from 'react'
import {
  addPropertyControls,
  ControlType,
  Frame,
} from 'framer'
import { IntlProvider } from 'react-intl'

import { mobile } from './breakpoints'

import { HomepageHero } from './components/HomepageHero'

import * as i18n from './i18n/'
import * as propertyControl from './propertyControls'

// TODO resize handler, see for example:
// https://gist.github.com/steveruizok/b9ff0a24a735f37c16794bc27da36164
// resize must be implemented in the actual container, document an example.
export function _HomepageHero ({
  borderRadius,
  clientWidth,
  color,
  locale,
  ...props
}) {
  const localeConfig = i18n.config[locale]

  return (
    <IntlProvider
      defaultLocale={i18n.defaultLocale}
      {...localeConfig}
    >
      <Frame {...props}>
        <HomepageHero
          borderRadius={borderRadius}
          color={color}
          isMobile={clientWidth <= mobile}
          logoImage={url('./node_modules/go-seven-assets/images/logotype.png')}
          onClickEnter={Function.prototype}
          onClickRegister={Function.prototype}
        />
      </Frame>
    </IntlProvider>
  )
}

_HomepageHero.defaultProps = {
  borderRadius: 10,
  clientWidth: 400,
  color: '#fff',
  locale: i18n.defaultLocale
}

addPropertyControls(_HomepageHero, {
  borderRadius: {
    title: 'Border Radius',
    type: ControlType.Number,
    defaultValue: _HomepageHero.defaultProps.borderRadius
  },
  clientWidth: {
    title: 'Client Width',
    type: ControlType.Number,
    defaultValue: _HomepageHero.defaultProps.clientWidth
  },
  color: {
    title: 'Text Color',
    type: ControlType.String,
    defaultValue: _HomepageHero.defaultProps.color
  },
  locale: propertyControl.locale(),
})
