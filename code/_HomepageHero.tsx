import { url } from 'framer/resource'
import {
  addPropertyControls,
  ControlType,
  Frame,
} from 'framer'
import * as React from 'react'
import { IntlProvider } from 'react-intl'

import * as asset from './assets'

import { HomePageHero } from './components/HomePageHero'

import * as i18n from './i18n/'

import * as propertyControl from './propertyControls'

// TODO resize handler, see for example:
// https://gist.github.com/steveruizok/b9ff0a24a735f37c16794bc27da36164
// resize must be implemented in the actual container, document an example.
export function _HomePageHero ({
  borderRadius,
  clientHeight,
  clientWidth,
  color,
  contentOffsetY,
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
        <HomePageHero
          borderRadius={borderRadius}
          clientHeight={clientHeight}
          clientWidth={clientWidth}
          color={color}
          contentOffsetY={contentOffsetY}
          logoImage={asset.logoImage}
          onClickEnter={Function.prototype}
          onClickRegister={Function.prototype}
        />
      </Frame>
    </IntlProvider>
  )
}

_HomePageHero.defaultProps = {
  borderRadius: 10,
  clientHeight: 400,
  clientWidth: 400,
  color: '#fff',
  locale: i18n.defaultLocale
}

addPropertyControls(_HomePageHero, {
  borderRadius: {
    title: 'Border Radius',
    type: ControlType.Number,
    defaultValue: _HomePageHero.defaultProps.borderRadius
  },
  clientHeight: propertyControl.clientHeight(_HomePageHero.defaultProps.clientHeight),
  clientWidth: propertyControl.clientWidth(_HomePageHero.defaultProps.clientWidth),
  color: {
    title: 'Text Color',
    type: ControlType.String,
    defaultValue: _HomePageHero.defaultProps.color
  },
  locale: propertyControl.locale(),
})
