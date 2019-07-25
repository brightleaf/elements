/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import {
  Box,
  Button,
  Buttons,
  NavBar,
  NavBarBrand,
  NavBarDivider,
  NavBarDropDown,
  NavBarEnd,
  NavBarItem,
  NavBarStart,
  NavBarMenu,
  Section,
  Hero,
  HeroBody,
  Title,
  SubTitle,
} from '../../src'

import { Collapse } from '../components/collapse'
import Highlight from '../components/highlighter'
import { ComponentsTabs } from '../components/tabs'

const Example = ({ children, isPrimary }) => {
  return <div className="example">{children}</div>
}
export default () => {
  return (
    <Section>
      <Hero isLight isBold>
        <HeroBody>
          <Title>Modal</Title>
          <SubTitle as="p" is="4">
            A classic <strong>modal</strong> overlay, in which you can include
            any content you want
          </SubTitle>
        </HeroBody>
      </Hero>
      <ComponentsTabs />
      <Example>
        <NavBar>
          <NavBarBrand
            src="brightleafjs-logo.png"
            href="https://brightleaf.dev"
            target="navbarBasicExample"
            width="112"
            height="28"
          />

          <NavBarMenu id="navbarBasicExample">
            <NavBarStart>
              <NavBarItem>
                <a>Home</a>
              </NavBarItem>
              <NavBarItem>
                <a>Documentation</a>
              </NavBarItem>
              <NavBarDropDown title="Examples">
                <NavBarItem>
                  <a to="/containers">Container</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/columns">Columns</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/notifications">Notifications</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/autocomplete">AutoComplete</a>
                </NavBarItem>
                <NavBarDivider />
                <NavBarItem>
                  <a>Report an issue</a>
                </NavBarItem>
              </NavBarDropDown>
            </NavBarStart>

            <NavBarEnd>
              <NavBarItem>
                <div>
                  <Buttons>
                    <Button isPrimary isAnchor>
                      <strong>Sign up</strong>
                    </Button>
                    <Button isLight isAnchor>
                      Log in
                    </Button>
                  </Buttons>
                </div>
              </NavBarItem>
            </NavBarEnd>
          </NavBarMenu>
        </NavBar>
        <Collapse>
          <Highlight
            className="javascript"
            languages={['javascript']}
          >{`import React from 'react'
import { NavBar,NavBarBrand,NavBarDivider,NavBarDropDown,NavBarEnd,NavBarItem,NavBarStart,NavBarMenu, } from '@brightleaf/elements'
export default () => {
  return (
    <NavBar>
      <NavBarBrand
        src="brightleafjs-logo.png"
        href="https://brightleaf.dev"
        target="navbarBasicExample"
        width="112"
        height="28"
      />
      <NavBarMenu id="navbarBasicExample">
        <NavBarStart>
          <NavBarItem><a>Home</a></NavBarItem>
          <NavBarItem><a>Documentation</a></NavBarItem>
          <NavBarDropDown title="Examples">
            <NavBarItem><a to="/containers">Container</a></NavBarItem>
            <NavBarItem>
              <a to="/columns">Columns</a>
            </NavBarItem>
            <NavBarItem>
              <a to="/notifications">Notifications</a>
            </NavBarItem>
            <NavBarItem>
              <a to="/autocomplete">AutoComplete</a>
            </NavBarItem>
            <NavBarDivider />
            <NavBarItem>
              <a>Report an issue</a>
            </NavBarItem>
          </NavBarDropDown>
        </NavBarStart>

        <NavBarEnd>
          <NavBarItem>
            <div>
              <Buttons>
                <Button isPrimary isAnchor>
                  <strong>Sign up</strong>
                </Button>
                <Button isLight isAnchor>
                  Log in
                </Button>
              </Buttons>
            </div>
          </NavBarItem>
        </NavBarEnd>
      </NavBarMenu>
    </NavBar>
  )
}
        `}</Highlight>
        </Collapse>
      </Example>
      <Example>
        <NavBar isPrimary>
          <NavBarBrand
            src="brightleafjs-logo.png"
            href="https://brightleaf.dev"
            target="navbarBasicExample"
            width="112"
            height="28"
          />

          <NavBarMenu id="navbarBasicExample">
            <NavBarStart>
              <NavBarItem>
                <a>Home</a>
              </NavBarItem>
              <NavBarItem>
                <a>Documentation</a>
              </NavBarItem>
              <NavBarDropDown title="Examples">
                <NavBarItem>
                  <a to="/containers">Container</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/columns">Columns</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/notifications">Notifications</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/autocomplete">AutoComplete</a>
                </NavBarItem>
                <NavBarDivider />
                <NavBarItem>
                  <a>Report an issue</a>
                </NavBarItem>
              </NavBarDropDown>
            </NavBarStart>

            <NavBarEnd>
              <NavBarItem>
                <div>
                  <Buttons>
                    <Button isPrimary isAnchor>
                      <strong>Sign up</strong>
                    </Button>
                    <Button isLight isAnchor>
                      Log in
                    </Button>
                  </Buttons>
                </div>
              </NavBarItem>
            </NavBarEnd>
          </NavBarMenu>
        </NavBar>
        <Collapse>
          <Highlight
            className="javascript"
            languages={['javascript']}
          >{`import React from 'react'
import { NavBar,NavBarBrand,NavBarDivider,NavBarDropDown,NavBarEnd,NavBarItem,NavBarStart,NavBarMenu, } from '@brightleaf/elements'
export default () => {
  return (
    <NavBar isPrimary>
      <NavBarBrand
        src="brightleafjs-logo.png"
        href="https://brightleaf.dev"
        target="navbarBasicExample"
        width="112"
        height="28"
      />
      <NavBarMenu id="navbarBasicExample">
        <NavBarStart>
          <NavBarItem><a>Home</a></NavBarItem>
          <NavBarItem><a>Documentation</a></NavBarItem>
          <NavBarDropDown title="Examples">
            <NavBarItem><a to="/containers">Container</a></NavBarItem>
            <NavBarItem>
              <a to="/columns">Columns</a>
            </NavBarItem>
            <NavBarItem>
              <a to="/notifications">Notifications</a>
            </NavBarItem>
            <NavBarItem>
              <a to="/autocomplete">AutoComplete</a>
            </NavBarItem>
            <NavBarDivider />
            <NavBarItem>
              <a>Report an issue</a>
            </NavBarItem>
          </NavBarDropDown>
        </NavBarStart>

        <NavBarEnd>
          <NavBarItem>
            <div>
              <Buttons>
                <Button isPrimary isAnchor>
                  <strong>Sign up</strong>
                </Button>
                <Button isLight isAnchor>
                  Log in
                </Button>
              </Buttons>
            </div>
          </NavBarItem>
        </NavBarEnd>
      </NavBarMenu>
    </NavBar>
  )
}`}</Highlight>
        </Collapse>
      </Example>

      <Example>
        <NavBar isLight>
          <NavBarBrand
            src="brightleafjs-logo.png"
            href="https://brightleaf.dev"
            target="navbarBasicExample"
            width="112"
            height="28"
          />

          <NavBarMenu id="navbarBasicExample">
            <NavBarStart>
              <NavBarItem>
                <a>Home</a>
              </NavBarItem>
              <NavBarItem>
                <a>Documentation</a>
              </NavBarItem>
              <NavBarDropDown title="Examples">
                <NavBarItem>
                  <a to="/containers">Container</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/columns">Columns</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/notifications">Notifications</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/autocomplete">AutoComplete</a>
                </NavBarItem>
                <NavBarDivider />
                <NavBarItem>
                  <a>Report an issue</a>
                </NavBarItem>
              </NavBarDropDown>
            </NavBarStart>

            <NavBarEnd>
              <NavBarItem>
                <div>
                  <Buttons>
                    <Button isPrimary isAnchor>
                      <strong>Sign up</strong>
                    </Button>
                    <Button isLight isAnchor>
                      Log in
                    </Button>
                  </Buttons>
                </div>
              </NavBarItem>
            </NavBarEnd>
          </NavBarMenu>
        </NavBar>
        <Collapse>
          <Highlight
            className="javascript"
            languages={['javascript']}
          >{`import React from 'react'
import { NavBar,NavBarBrand,NavBarDivider,NavBarDropDown,NavBarEnd,NavBarItem,NavBarStart,NavBarMenu, } from '@brightleaf/elements'
export default () => {
  return (
    <NavBar isLight>
      <NavBarBrand
        src="brightleafjs-logo.png"
        href="https://brightleaf.dev"
        target="navbarBasicExample"
        width="112"
        height="28"
      />
      <NavBarMenu id="navbarBasicExample">
        <NavBarStart>
          <NavBarItem><a>Home</a></NavBarItem>
          <NavBarItem><a>Documentation</a></NavBarItem>
          <NavBarDropDown title="Examples">
            <NavBarItem><a to="/containers">Container</a></NavBarItem>
            <NavBarItem>
              <a to="/columns">Columns</a>
            </NavBarItem>
            <NavBarItem>
              <a to="/notifications">Notifications</a>
            </NavBarItem>
            <NavBarItem>
              <a to="/autocomplete">AutoComplete</a>
            </NavBarItem>
            <NavBarDivider />
            <NavBarItem>
              <a>Report an issue</a>
            </NavBarItem>
          </NavBarDropDown>
        </NavBarStart>

        <NavBarEnd>
          <NavBarItem>
            <div>
              <Buttons>
                <Button isPrimary isAnchor>
                  <strong>Sign up</strong>
                </Button>
                <Button isLight isAnchor>
                  Log in
                </Button>
              </Buttons>
            </div>
          </NavBarItem>
        </NavBarEnd>
      </NavBarMenu>
    </NavBar>
  )
}`}</Highlight>
        </Collapse>
      </Example>
      <Example>
        <NavBar isInfo>
          <NavBarBrand
            src="brightleafjs-logo.png"
            href="https://brightleaf.dev"
            target="navbarBasicExample"
            width="112"
            height="28"
          />

          <NavBarMenu id="navbarBasicExample">
            <NavBarStart>
              <NavBarItem>
                <a>Home</a>
              </NavBarItem>
              <NavBarItem>
                <a>Documentation</a>
              </NavBarItem>
              <NavBarDropDown title="Examples">
                <NavBarItem>
                  <a to="/containers">Container</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/columns">Columns</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/notifications">Notifications</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/autocomplete">AutoComplete</a>
                </NavBarItem>
                <NavBarDivider />
                <NavBarItem>
                  <a>Report an issue</a>
                </NavBarItem>
              </NavBarDropDown>
            </NavBarStart>

            <NavBarEnd>
              <NavBarItem>
                <div>
                  <Buttons>
                    <Button isPrimary isAnchor>
                      <strong>Sign up</strong>
                    </Button>
                    <Button isLight isAnchor>
                      Log in
                    </Button>
                  </Buttons>
                </div>
              </NavBarItem>
            </NavBarEnd>
          </NavBarMenu>
        </NavBar>
        <Collapse>
          <Highlight
            className="javascript"
            languages={['javascript']}
          >{`import React from 'react'
import { NavBar,NavBarBrand,NavBarDivider,NavBarDropDown,NavBarEnd,NavBarItem,NavBarStart,NavBarMenu, } from '@brightleaf/elements'
export default () => {
  return (
    <NavBar isInfo>
      <NavBarBrand
        src="brightleafjs-logo.png"
        href="https://brightleaf.dev"
        target="navbarBasicExample"
        width="112"
        height="28"
      />
      <NavBarMenu id="navbarBasicExample">
        <NavBarStart>
          <NavBarItem><a>Home</a></NavBarItem>
          <NavBarItem><a>Documentation</a></NavBarItem>
          <NavBarDropDown title="Examples">
            <NavBarItem><a to="/containers">Container</a></NavBarItem>
            <NavBarItem>
              <a to="/columns">Columns</a>
            </NavBarItem>
            <NavBarItem>
              <a to="/notifications">Notifications</a>
            </NavBarItem>
            <NavBarItem>
              <a to="/autocomplete">AutoComplete</a>
            </NavBarItem>
            <NavBarDivider />
            <NavBarItem>
              <a>Report an issue</a>
            </NavBarItem>
          </NavBarDropDown>
        </NavBarStart>

        <NavBarEnd>
          <NavBarItem>
            <div>
              <Buttons>
                <Button isPrimary isAnchor>
                  <strong>Sign up</strong>
                </Button>
                <Button isLight isAnchor>
                  Log in
                </Button>
              </Buttons>
            </div>
          </NavBarItem>
        </NavBarEnd>
      </NavBarMenu>
    </NavBar>
  )
}`}</Highlight>
        </Collapse>
      </Example>
      <Example>
        <NavBar isTransparent>
          <NavBarBrand
            src="brightleafjs-logo.png"
            href="https://brightleaf.dev"
            target="navbarBasicExample"
            width="112"
            height="28"
          />

          <NavBarMenu id="navbarBasicExample">
            <NavBarStart>
              <NavBarItem>
                <a>Home</a>
              </NavBarItem>
              <NavBarItem>
                <a>Documentation</a>
              </NavBarItem>
              <NavBarDropDown title="Examples" isBoxed>
                <NavBarItem>
                  <a to="/containers">Container</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/columns">Columns</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/notifications">Notifications</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/autocomplete">AutoComplete</a>
                </NavBarItem>
                <NavBarDivider />
                <NavBarItem>
                  <a>Report an issue</a>
                </NavBarItem>
              </NavBarDropDown>
              <NavBarDropDown title="Other" isBoxed>
                <NavBarItem>
                  <a to="/containers">Container</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/columns">Columns</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/notifications">Notifications</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/autocomplete">AutoComplete</a>
                </NavBarItem>
                <NavBarDivider />
                <NavBarItem>
                  <a>Report an issue</a>
                </NavBarItem>
              </NavBarDropDown>
            </NavBarStart>

            <NavBarEnd>
              <NavBarDropDown title="Examples" isRight isBoxed>
                <NavBarItem>
                  <a to="/containers">Container</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/columns">Columns</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/notifications">Notifications</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/autocomplete">AutoComplete</a>
                </NavBarItem>
                <NavBarDivider />
                <NavBarItem>
                  <a>Report an issue</a>
                </NavBarItem>
              </NavBarDropDown>
              <NavBarItem>
                <div>
                  <Buttons>
                    <Button isPrimary isAnchor>
                      <strong>Sign up</strong>
                    </Button>
                    <Button isLight isAnchor>
                      Log in
                    </Button>
                  </Buttons>
                </div>
              </NavBarItem>
            </NavBarEnd>
          </NavBarMenu>
        </NavBar>
        <Collapse>
          <Highlight
            className="javascript"
            languages={['javascript']}
          >{`import React from 'react'
import { NavBar,NavBarBrand,NavBarDivider,NavBarDropDown,NavBarEnd,NavBarItem,NavBarStart,NavBarMenu, } from '@brightleaf/elements'
export default () => {
  return (
    <NavBar isTransparent>
      <NavBarBrand
        src="brightleafjs-logo.png"
        href="https://brightleaf.dev"
        target="navbarBasicExample"
        width="112"
        height="28"
      />
      <NavBarMenu id="navbarBasicExample">
        <NavBarStart>
          <NavBarItem><a>Home</a></NavBarItem>
          <NavBarItem><a>Documentation</a></NavBarItem>
          <NavBarDropDown title="Examples">
            <NavBarItem><a to="/containers">Container</a></NavBarItem>
            <NavBarItem>
              <a to="/columns">Columns</a>
            </NavBarItem>
            <NavBarItem>
              <a to="/notifications">Notifications</a>
            </NavBarItem>
            <NavBarItem>
              <a to="/autocomplete">AutoComplete</a>
            </NavBarItem>
            <NavBarDivider />
            <NavBarItem>
              <a>Report an issue</a>
            </NavBarItem>
          </NavBarDropDown>
        </NavBarStart>

        <NavBarEnd>
          <NavBarItem>
            <div>
              <Buttons>
                <Button isPrimary isAnchor>
                  <strong>Sign up</strong>
                </Button>
                <Button isLight isAnchor>
                  Log in
                </Button>
              </Buttons>
            </div>
          </NavBarItem>
        </NavBarEnd>
      </NavBarMenu>
    </NavBar>
  )
}`}</Highlight>
        </Collapse>
      </Example>
    </Section>
  )
}
