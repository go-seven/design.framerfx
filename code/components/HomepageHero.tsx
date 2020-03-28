import { Frame, Stack } from 'framer'
import * as React from 'react'
import { useIntl } from 'react-intl'

import i18nId from '../i18n/messageIds'

import { mobile } from './breakpoints'

import { FirstPage } from './FirstPage'
import { Logo } from './Logo'

export function HomePageHero ({
  borderRadius,
  color,
  contentOffsetY,
  clientHeight,
  clientWidth,
  logoImage,
  onClickEnter,
  onClickRegister,
}) {
  const intl = useIntl()

  const isMobile = clientWidth <= mobile

  return (
    <FirstPage>
      <Frame
        animate={(Math.abs(contentOffsetY) > (clientHeight / 6)) ? { opacity: 0 } : { opacity: 1 }}
        color={color}
        background="transparent"
        style={{
          flex: isMobile ? 2 : 1,
          width: '100%',
          textTransform: 'uppercase'
        }}
      >
        <Stack
          direction={isMobile ? 'vertical' : 'horizontal'}
          style={{
            width: '100%',
            height: '100%'
          }}
        >
          <Frame
            background="transparent"
            style={{
              flex: 1,
              width: '100%'
            }}
          >
            <Logo image={logoImage} />
          </Frame>

          <Frame
            background="transparent"
            style={{
              flex: 2,
              width: '100%'
            }}
          >
            <Stack
              direction={isMobile ? 'vertical' : 'horizontal'}
              style={{
                width: '100%',
                height: '100%'
              }}
            >
              <Frame
                background="transparent"
                style={{
                  flex: 1,
                  width: '100%'
                }}
              >
                {intl.formatMessage({ id: i18nId.homePage.features.title })}
              </Frame>

              <Frame
                background="transparent"
                style={{
                  flex: 1,
                  width: '100%'
                }}
              >
                {intl.formatMessage({ id: i18nId.homePage.pricing.title })}
              </Frame>

              <Frame
                background="transparent"
                style={{
                  flex: 2,
                  width: '100%'
                }}
              >
                <Stack
                  direction="horizontal"
                  style={{
                    width: '100%',
                    height: '100%',
                    padding: '2rem'
                  }}
                >
                  <Frame
                    backgroundColor="#a9ccec"
                    borderRadius={borderRadius}
                    color="#1a55a6"
                    onClick={onClickEnter}
                    style={{
                      flex: 1,
                      height: '4rem'
                    }}
                  >
                    {intl.formatMessage({ id: i18nId.authentication.action.enter })}
                  </Frame>

                  <Frame
                    backgroundColor="#164179"
                    borderRadius={borderRadius}
                    color="#c7dcf3"
                    onClick={onClickRegister}
                    style={{
                      flex: 1,
                      height: '4rem'
                    }}
                  >
                    {intl.formatMessage({ id: i18nId.authentication.action.register })}
                  </Frame>
                </Stack>
              </Frame>
            </Stack>
          </Frame>
        </Stack>
      </Frame>

      <Frame
        background="transparent"
        color={color}
        style={{
          flex: 1,
          width: '100%'
        }}
      >
        <Stack
          style={{
            width: '100%',
            height: '100%',
            padding: isMobile ? '0 2rem 0 2rem' : '0 4rem 0 4rem',
            fontSize: isMobile ? 18 : 32,
            fontWeight: 600
          }}
        >
          <Frame
            background="transparent"
            style={{
              flex: 1,
              width: '100%'
            }}
          />

          <Frame
            background="transparent"
            style={{
              flex: 1,
              width: '100%'
            }}
          >
            <span>
              {intl.formatMessage({ id: i18nId.homePage.hero.tagline1 })}
            </span>
          </Frame>

          <Frame
            background="transparent"
            style={{
              flex: 1,
              width: '100%'
            }}
          >
            <span>
              {intl.formatMessage({ id: i18nId.homePage.hero.tagline2 })}
            </span>
          </Frame>

          <Frame
            background="transparent"
            style={{
              flex: 1,
              width: '100%'
            }}
          />
        </Stack>
      </Frame>

      <Frame
        background="transparent"
        color={color}
        style={{
          flex: 1,
          width: '100%',
          fontSize: isMobile ? 18 : 32
        }}
      >
        <Stack
          style={{
            width: '100%',
            height: '100%',
            padding: isMobile ? '0 2rem 0 2rem' : '0 4rem 0 4rem'
          }}
        >
          <Frame
            background="transparent"
            style={{
              flex: 1,
              width: '100%'
            }}
          >
            <span>
              {intl.formatMessage({ id: i18nId.homePage.hero.welcome })}
            </span>
          </Frame>
        </Stack>
      </Frame>
    </FirstPage>
  )
}
