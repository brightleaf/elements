/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { Box, Button, Buttons, FullColumn } from '../../src'

console.info('Button', Button)
const Callout = ({ children }) => {
  return <div className="callout is-primary">{children}</div>
}
export default () => {
  return (
    <>
      <Box>
        <Buttons>
          <Button isPrimary>Primary Button</Button>
          <Button isInfo>Info Button</Button>
          <Button isDanger>Danger Button</Button>
          <Button isLink>Link Button</Button>
          <Button isWarning>Warning Button</Button>
          <Button isSuccess>Success Button</Button>
        </Buttons>
      </Box>
      <Box>
        <Buttons>
          <Button isPrimary isSubmit>
            Primary Submit Button
          </Button>
          <Button isInfo isAnchor href="#">
            Info Anchor Button
          </Button>
          <Button isDanger isReset>
            Danger Reset Button
          </Button>
          <Button isLink isAnchor href="#">
            Anchor Link Button
          </Button>
        </Buttons>
      </Box>
      <Box>
        <Buttons>
          <Button isSmall>Small</Button>
          <Button>Default</Button>
          <Button isNormal>Normal</Button>
          <Button isMedium>Medium</Button>
          <Button isLarge>Large</Button>
        </Buttons>
      </Box>
      <Box>
        <Buttons areMedium>
          <Button>All</Button>
          <Button>Medium</Button>
          <Button>Size</Button>
        </Buttons>
      </Box>
      <Box>
        <Buttons areSmall>
          <Button>Small</Button>
          <Button>Small</Button>
          <Button>Small</Button>
          <Button isNormal>Normal</Button>
          <Button>Small</Button>
        </Buttons>
      </Box>
      <Box>
        <Buttons>
          <Button isFullWidth isSmall>
            Small
          </Button>
          <Button isFullWidth>Normal</Button>
          <Button isFullWidth isMedium>
            Medium
          </Button>
          <Button isFullWidth isLarge>
            Large FW
          </Button>
        </Buttons>
      </Box>
      <Box>
        <Buttons>
          <Button isPrimary isOutlined>
            Primary Button
          </Button>
          <Button isInfo isOutlined>
            Info Button
          </Button>
          <Button isDanger isOutlined>
            Danger Button
          </Button>
          <Button isLink isOutlined>
            Link Button
          </Button>
          <Button isWarning isOutlined>
            Warning Button
          </Button>
          <Button isSuccess isOutlined>
            Success Button
          </Button>
        </Buttons>
      </Box>
      <Box>
        <Buttons>
          <Button isPrimary isInverted>
            Primary Button
          </Button>
          <Button isInfo isInverted>
            Info Button
          </Button>
          <Button isDanger isInverted>
            Danger Button
          </Button>
          <Button isLink isInverted>
            Link Button
          </Button>
          <Button isWarning isInverted>
            Warning Button
          </Button>
          <Button isSuccess isInverted>
            Success Button
          </Button>
        </Buttons>
      </Box>
      <FullColumn>
        <Callout>
          <Buttons>
            <Button isPrimary isInverted isOutlined>
              Primary Button
            </Button>
            <Button isInfo isInverted isOutlined>
              Info Button
            </Button>
            <Button isDanger isInverted isOutlined>
              Danger Button
            </Button>
            <Button isLink isInverted isOutlined>
              Link Button
            </Button>
            <Button isWarning isInverted isOutlined>
              Warning Button
            </Button>
            <Button isSuccess isInverted isOutlined>
              Success Button
            </Button>
          </Buttons>
        </Callout>
      </FullColumn>
      <Box>
        <Buttons>
          <Button isPrimary isFocused>
            Primary Button
          </Button>
          <Button isInfo isFocused>
            Info Button
          </Button>
          <Button isDanger isFocused>
            Danger Button
          </Button>
          <Button isLink isFocused>
            Link Button
          </Button>
          <Button isWarning isFocused>
            Warning Button
          </Button>
          <Button isSuccess isFocused>
            Success Button
          </Button>
        </Buttons>
      </Box>
      <Box>
        <Buttons>
          <Button isPrimary isHovered>
            Primary Button
          </Button>
          <Button isInfo isHovered>
            Info Button
          </Button>
          <Button isDanger isHovered>
            Danger Button
          </Button>
          <Button isLink isHovered>
            Link Button
          </Button>
          <Button isWarning isHovered>
            Warning Button
          </Button>
          <Button isSuccess isHovered>
            Success Button
          </Button>
        </Buttons>
      </Box>
    </>
  )
}
