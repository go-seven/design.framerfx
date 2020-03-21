import * as React from 'react'
import { Frame, Stack } from 'framer'
import { useIntl } from 'react-intl'

import { mobile } from './breakpoints'

import { Logo } from './Logo'

export function HomepageHero ({
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
    <Stack
      style={{
        background: 'linear-gradient(270deg, #1854a5 0%, #0c3d8d 100%)',
        width: '100%',
        height: '100%'
      }}
    >
      <Frame
        animate={(Math.abs(contentOffsetY) > (clientHeight / 6)) ? { opacity: 0 } : { opacity: 1 } }
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
                {intl.formatMessage({ id: 'Homepage.Features' })}
              </Frame>

              <Frame
                background="transparent"
                style={{
                  flex: 1,
                  width: '100%'
                }}
              >
                {intl.formatMessage({ id: 'Homepage.Pricing' })}
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
                    {intl.formatMessage({ id: 'Authentication.Button.Enter' })}
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
                    {intl.formatMessage({ id: 'Authentication.Button.Register' })}
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
              {intl.formatMessage({ id: 'Homepage.Hero.Tagline1' })}
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
              {intl.formatMessage({ id: 'Homepage.Hero.Tagline2' })}
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
              {intl.formatMessage({ id: 'Homepage.Hero.Welcome' })}
            </span>
          </Frame>
        </Stack>
      </Frame>
    </Stack>
  )
}
