import * as React from 'react'
import { Frame } from 'framer'
import { url } from 'framer/resource'

const width = 241
const height = 60

export function Logo ({ image }) {
  return (
    <Frame
      background='transparent'
      center
      style={{
        width,
        height,
        // eslint-disable-next-line
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        imageRendering: 'pixelated'
      }}
    />
  )
}
