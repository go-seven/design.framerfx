import { Frame } from 'framer'
import pdsp from 'pdsp'
import * as React from 'react'
import { useIntl } from 'react-intl'
import {
  A,
  Box,
  Button,
  Control,
  Field,
  P
} from 'trunx'

import i18nId from '../i18n/messageIds'

import { mobile } from './breakpoints'

import { EmailField } from './EmailField'
import { Hero } from './Hero'
import { PasswordField } from './PasswordField'

const { useState } = React

export function EnterAccountForm ({
  clientWidth,
  enterAccount,
  enterAccountRequestIsWaiting,
}) {
  const intl = useIntl()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isMobile = clientWidth <= mobile
  const width = isMobile ? '95%' : 500

  return (
    <Hero>
      <Frame
        height={261}
        width={width}
      >
        <Box>
          <form
            onSubmit={(event) => {
              pdsp(event)

              enterAccount({ email, password })
            }}
          >
            <EmailField
              email={email}
              label={intl.formatMessage({ id: i18nId.authentication.input.email.label })}
              setEmail={setEmail}
            />

            <PasswordField
              autoComplete="current-password"
              forgotPasswordMessage={intl.formatMessage({ id: i18nId.enterPage.forgotPassword })}
              label={intl.formatMessage({ id: i18nId.authentication.input.password.label })}
              setPassword={setPassword}
            />

            <Control>
              <Button
                isLoading={enterAccountRequestIsWaiting}
                isSuccess
                type="submit"
                value={intl.formatMessage({ id: i18nId.authentication.action.enter })}
              />
            </Control>

          </form>
        </Box>
      </Frame>

      <Frame
        width={width}
        height={60}
      >
        <Box>
          <P>
            {intl.formatMessage({ id: i18nId.enterPage.newUser })}

            <A isPulledRight href=''>
              {intl.formatMessage({ id: i18nId.authentication.action.register })}
            </A>
          </P>
        </Box>
      </Frame>
    </Hero>
  )
}
