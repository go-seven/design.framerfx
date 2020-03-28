import {
  ControlDescription,
  ControlType,
} from 'framer'

import * as i18n from './i18n/'

export const clientHeight = (defaultValue): ControlDescription => ({
  defaultValue,
  title: 'Client Height',
  type: ControlType.Number,
})

export const clientWidth = (defaultValue): ControlDescription => ({
  defaultValue,
  title: 'Client Width',
  type: ControlType.Number,
})

export const locale = (): ControlDescription => ({
  defaultValue: i18n.defaultLocale,
  optionTitles: i18n.localeNames,
  options: i18n.localeCodes,
  title: 'Locale',
  type: ControlType.Enum,
})
