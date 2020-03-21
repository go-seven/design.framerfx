import {
  ControlDescription,
  ControlType,
} from 'framer'

import * as i18n from './i18n/'

export const locale = (): ControlDescription => ({
  title: 'Locale',
  type: ControlType.Enum,
  defaultValue: i18n.defaultLocale,
  options: i18n.localeCodes,
  optionTitles: i18n.localeNames
})
