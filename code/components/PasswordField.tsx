import * as lock from 'fa-svg-icon/solid/lock'
import * as React from 'react'
import {
  A,
  Control,
  Field,
  Help,
  Icon,
  Input,
  Label,
  Span
} from 'trunx'

export function PasswordField ({
  autoComplete,
  errorMessage = '',
  forgotPasswordMessage = '',
  label,
  setPassword,
}) {
  return (
    <Field>
      <Label>
        {label}

        {forgotPasswordMessage && (
          <A
            href=''
            isPulledRight
            tabIndex={-1}
          >
            {forgotPasswordMessage}
          </A>
        )}
      </Label>

      <Control hasIconsLeft>
        <Input
          autoComplete={autoComplete}
          isDanger={Boolean(errorMessage)}
          onChange={(event) => setPassword(event.target.value)}
          required
          type="password"
        />

        <Icon hasTextGrey isLeft>
          <Icon.Svg icon={lock} />
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
