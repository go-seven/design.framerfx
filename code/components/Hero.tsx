import * as React from 'react'
import { Stack } from 'framer'

export function Hero ({ children }) {
  return (
    <Stack
      distribution="center"
      style={{
        background: 'linear-gradient(270deg, #1854a5 0%, #0c3d8d 100%)',
        width: '100%',
        height: '100%'
      }}
    >
      {children}
    </Stack>
  )
}
