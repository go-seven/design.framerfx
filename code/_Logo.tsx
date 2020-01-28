import * as React from 'react'
import { Frame } from 'framer'
import { url } from 'framer/resource'

import { Logo } from './components/Logo'

export function _Logo () {
  return (
    <Logo
      image={url('./node_modules/go-seven-assets/images/logotype.png')}
    />
  )
}
