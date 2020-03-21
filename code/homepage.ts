import {
  Data,
  Override,
  motionValue,
  useTransform,
} from 'framer'

const data = Data({ contentOffsetY: 0 })

const contentOffsetY = motionValue(0)
contentOffsetY.onChange(value => { data.contentOffsetY = value })

export function scroll (): Override {
  return { contentOffsetY }
}

export function stackItem (): Override {
  return {
    contentOffsetY: data.contentOffsetY
  }
}
