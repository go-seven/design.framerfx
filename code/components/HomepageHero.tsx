import * as React from "react"
import { Frame, Stack } from "framer"

import { Logo } from "./Logo"

export function HomepageHero({
  borderRadius,
  isMobile,
  color,
  logoImage,
}) {
  return (
    <Stack
      style={{
        background: "linear-gradient(270deg, #1854a5 0%, #0c3d8d 100%)",
        width: "100%",
        height: "100%",
      }}
    >
      <Frame
        color={color}
        background="transparent"
        style={{
          flex: isMobile ? 2 : 1,
          width: "100%",
          textTransform: "uppercase",
        }}
      >
        <Stack
          direction={isMobile ? "vertical" : "horizontal"}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Frame
            background="transparent"
            style={{
              flex: 1,
              width: "100%"
            }}
          >
            <Logo image={logoImage} />
          </Frame>

          <Frame
            background="transparent"
            style={{
              flex: 2,
              width: "100%"
            }}
          >
            <Stack
              direction={isMobile ? "vertical" : "horizontal"}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Frame
                background="transparent"
                style={{
                  flex: 1,
                  width: "100%"
                }}
              >
                Caratteristiche
              </Frame>

              <Frame
                background="transparent"
                style={{
                  flex: 1,
                  width: "100%"
                }}
              >
                Tariffe
              </Frame>

              <Frame
                background="transparent"
                style={{
                  flex: 2,
                  width: "100%"
                }}
              >
                <Stack
                  direction="horizontal"
                  style={{
                    width: "100%",
                    height: "100%",
                    padding: "2rem",
                  }}
                >
                  <Frame
                    backgroundColor="#a9ccec"
                    borderRadius={borderRadius}
                    color="#1a55a6"
                    style={{
                      flex: 1,
                      height: "4rem",
                    }}
                  >
                    Accedi
                  </Frame>

                  <Frame
                    backgroundColor="#164179"
                    borderRadius={borderRadius}
                    color="#c7dcf3"
                    style={{
                      flex: 1,
                      height: "4rem",
                    }}
                  >
                    Registrati
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
          width: "100%"
        }}
      >
        <Stack
          style={{
            width: "100%",
            height: "100%",
            padding: isMobile ? "0 2rem 0 2rem" : "0 4rem 0 4rem",
            fontSize: isMobile ? 18 : 32,
            fontWeight: 600,
          }}
        >
          <Frame
            background="transparent"
						style={{
							flex: 1,
							width: "100%",
						}}
          />

          <Frame
            background="transparent"
						style={{
							flex: 1,
							width: "100%",
						}}
          >
            <span>
              Abbrevia gratuitamente le tue URL.
            </span>
          </Frame>

          <Frame
            background="transparent"
						style={{
							flex: 1,
							width: "100%",
						}}
          >
            <span>
              Sfrutta un ottimo strumento di analisi
            </span>
          </Frame>

          <Frame
            background="transparent"
						style={{
							flex: 1,
							width: "100%",
						}}
          />
        </Stack>
      </Frame>

      <Frame
        background="transparent"
        color={color}
        style={{
          flex: 1,
          width: "100%",
          fontSize: isMobile ? 18 : 32,
        }}
      >
        <Stack
          style={{
            width: "100%",
            height: "100%",
            padding: isMobile ? "0 2rem 0 2rem" : "0 4rem 0 4rem",
          }}
        >
          <Frame
            background="transparent"
						style={{
							flex: 1,
							width: "100%",
						}}
          >
            <span>
              Benvenuto in Go Seven. Puoi creare le tue URL accorciate, gestire comodamente le tue campagne di marketing, monitorando le statistiche sui click e condividendo i risultati con i tuoi collaboratori.
            </span>
          </Frame>
        </Stack>
      </Frame>
    </Stack>
  )
}
