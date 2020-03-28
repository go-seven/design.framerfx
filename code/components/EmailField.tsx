import * as envelope from 'fa-svg-icon/solid/envelope'
import * as React from 'react'
import {
  Control,
  Field,
  Help,
  Icon,
  Input,
  Label,
  Span
} from 'trunx'

export function EmailField ({
  errorMessage = '',
  label,
  email,
  setEmail,
}) {
  return (
    <Field>
      <Label>{label}</Label>

      <Control hasIconsLeft>
        <Input
          isDanger={Boolean(errorMessage)}
          onChange={(event) => setEmail(event.target.value)}
          required
          type="email"
          value={email}
        />

        <Icon hasTextGrey isLeft>
          <Icon.Svg icon={envelope} />
        </Icon>

        {errorMessage && (
          <Help>
            <Span hasTextDanger>{errorMessage}</Span>
          </Help>
        )}
      </Control>
    </Field>
  )
}
