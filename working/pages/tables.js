/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */

import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  Content,
  Column,
  Columns,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRow,
  Section,
  Hero,
  HeroBody,
  Title,
  SubTitle,
} from '../../src'
import { CodeCollapse } from '../components/collapse'
import { ElementsTabs } from '../components/tabs'
import Highlight from '../components/highlighter'

const Example = ({ children, isPrimary }) => {
  return <div className="example">{children}</div>
}
export default () => {
  const rows = Array(5)
    .fill(1)
    .map((v, i) => v + i)
    .map((v, index) => {
      const items = Array(100)
        .fill(1)
        .map((v, i) => v + i)
        .map(cv => cv * v)
      const cells = items.map(num => (
        <TableCell key={`${index - num}`}>{num}</TableCell>
      ))
      return <TableRow key={`row-${index}`}>{cells}</TableRow>
    })

  return (
    <Section>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/components">Components</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/tags">Tables</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Table</Title>
          <SubTitle as="p" is="4">
            The inevitable HTML <strong>table</strong>, with special case cells
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <ElementsTabs />
      </div>

      <Content>
        <Example>
          <Columns isMultiline>
            <Column isFull>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>
                      <abbr title="Position">Pos</abbr>
                    </TableHeaderCell>
                    <TableHeaderCell>Team</TableHeaderCell>
                    <TableHeaderCell>
                      <abbr title="Played">Pld</abbr>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <abbr title="Won">W</abbr>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <abbr title="Drawn">D</abbr>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <abbr title="Lost">L</abbr>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <abbr title="Goals for">GF</abbr>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <abbr title="Goals against">GA</abbr>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <abbr title="Goal difference">GD</abbr>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <abbr title="Points">Pts</abbr>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      Qualification or relegation
                    </TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableFoot>
                  <TableRow>
                    <TableHeaderCell>
                      <abbr title="Position">Pos</abbr>
                    </TableHeaderCell>
                    <TableHeaderCell>Team</TableHeaderCell>
                    <TableHeaderCell>
                      <abbr title="Played">Pld</abbr>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <abbr title="Won">W</abbr>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <abbr title="Drawn">D</abbr>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <abbr title="Lost">L</abbr>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <abbr title="Goals for">GF</abbr>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <abbr title="Goals against">GA</abbr>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <abbr title="Goal difference">GD</abbr>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <abbr title="Points">Pts</abbr>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      Qualification or relegation
                    </TableHeaderCell>
                  </TableRow>
                </TableFoot>
                <TableBody>
                  <TableRow>
                    <TableHeaderCell>1</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                        title="Leicester City F.C."
                      >
                        Leicester City
                      </a>{' '}
                      <strong>(C)</strong>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>23</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>68</TableCell>
                    <TableCell>36</TableCell>
                    <TableCell>+32</TableCell>
                    <TableCell>81</TableCell>
                    <TableCell>
                      Qualification for the{' '}
                      <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                        title="2016–17 UEFA Champions League"
                      >
                        Champions League group stage
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell>2</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/Arsenal_F.C."
                        title="Arsenal F.C."
                      >
                        Arsenal
                      </a>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>20</TableCell>
                    <TableCell>11</TableCell>
                    <TableCell>7</TableCell>
                    <TableCell>65</TableCell>
                    <TableCell>36</TableCell>
                    <TableCell>+29</TableCell>
                    <TableCell>71</TableCell>
                    <TableCell>
                      Qualification for the{' '}
                      <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                        title="2016–17 UEFA Champions League"
                      >
                        Champions League group stage
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell>3</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C."
                        title="Tottenham Hotspur F.C."
                      >
                        Tottenham Hotspur
                      </a>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>19</TableCell>
                    <TableCell>13</TableCell>
                    <TableCell>6</TableCell>
                    <TableCell>69</TableCell>
                    <TableCell>35</TableCell>
                    <TableCell>+34</TableCell>
                    <TableCell>70</TableCell>
                    <TableCell>
                      Qualification for the
                      <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                        title="2016–17 UEFA Champions League"
                      >
                        Champions League group stage
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow className="is-selected">
                    <TableHeaderCell>4</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/Manchester_City_F.C."
                        title="Manchester City F.C."
                      >
                        Manchester City
                      </a>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>19</TableCell>
                    <TableCell>9</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>71</TableCell>
                    <TableCell>41</TableCell>
                    <TableCell>+30</TableCell>
                    <TableCell>66</TableCell>
                    <TableCell>
                      Qualification for the{' '}
                      <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round"
                        title="2016–17 UEFA Champions League"
                      >
                        Champions League play-off round
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell>5</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/Manchester_United_F.C."
                        title="Manchester United F.C."
                      >
                        Manchester United
                      </a>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>19</TableCell>
                    <TableCell>9</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>49</TableCell>
                    <TableCell>35</TableCell>
                    <TableCell>+14</TableCell>
                    <TableCell>66</TableCell>
                    <TableCell>
                      Qualification for the{' '}
                      <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage"
                        title="2016–17 UEFA Europa League"
                      >
                        Europa League group stage
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell>6</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/Southampton_F.C."
                        title="SouthHampton F.C."
                      >
                        Southampton
                      </a>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>18</TableCell>
                    <TableCell>9</TableCell>
                    <TableCell>11</TableCell>
                    <TableCell>59</TableCell>
                    <TableCell>41</TableCell>
                    <TableCell>+18</TableCell>
                    <TableCell>63</TableCell>
                    <TableCell>
                      Qualification for the{' '}
                      <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage"
                        title="2016–17 UEFA Europa League"
                      >
                        Europa League group stage
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell>7</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/West_Ham_United_F.C."
                        title="West Ham United F.C."
                      >
                        West Ham United
                      </a>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>16</TableCell>
                    <TableCell>14</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>65</TableCell>
                    <TableCell>51</TableCell>
                    <TableCell>+14</TableCell>
                    <TableCell>62</TableCell>
                    <TableCell>
                      Qualification for the{' '}
                      <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#TableHeaderCellird_qualifying_round"
                        title="2016–17 UEFA Europa League"
                      >
                        Europa League third qualifying round
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell>8</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/Liverpool_F.C."
                        title="Liverpool F.C."
                      >
                        Liverpool
                      </a>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>16</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>63</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>+13</TableCell>
                    <TableCell>60</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell>9</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/Stoke_City_F.C."
                        title="Stoke City F.C."
                      >
                        Stoke City
                      </a>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>14</TableCell>
                    <TableCell>9</TableCell>
                    <TableCell>15</TableCell>
                    <TableCell>41</TableCell>
                    <TableCell>55</TableCell>
                    <TableCell>−14</TableCell>
                    <TableCell>51</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell>10</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/Chelsea_F.C."
                        title="Chelsea F.C."
                      >
                        Chelsea
                      </a>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell>14</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell>59</TableCell>
                    <TableCell>53</TableCell>
                    <TableCell>+6</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell>11</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/Everton_F.C."
                        title="Everton F.C."
                      >
                        Everton
                      </a>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>11</TableCell>
                    <TableCell>14</TableCell>
                    <TableCell>13</TableCell>
                    <TableCell>59</TableCell>
                    <TableCell>55</TableCell>
                    <TableCell>+4</TableCell>
                    <TableCell>47</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell>12</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C."
                        title="Swansea City A.F.C."
                      >
                        Swansea City
                      </a>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell>11</TableCell>
                    <TableCell>15</TableCell>
                    <TableCell>42</TableCell>
                    <TableCell>52</TableCell>
                    <TableCell>−10</TableCell>
                    <TableCell>47</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell>13</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/Watford_F.C."
                        title="Watford F.C."
                      >
                        Watford
                      </a>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell>9</TableCell>
                    <TableCell>17</TableCell>
                    <TableCell>40</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>−10</TableCell>
                    <TableCell>45</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell>14</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C."
                        title="West Bromwich Albion F.C."
                      >
                        West Bromwich Albion
                      </a>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>13</TableCell>
                    <TableCell>15</TableCell>
                    <TableCell>34</TableCell>
                    <TableCell>48</TableCell>
                    <TableCell>−14</TableCell>
                    <TableCell>43</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell>15</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C."
                        title="Crystal Palace F.C."
                      >
                        Crystal Palace
                      </a>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>11</TableCell>
                    <TableCell>9</TableCell>
                    <TableCell>18</TableCell>
                    <TableCell>39</TableCell>
                    <TableCell>51</TableCell>
                    <TableCell>−12</TableCell>
                    <TableCell>42</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell>16</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth"
                        title="A.F.C. Bournemouth"
                      >
                        AFC Bournemouth
                      </a>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>11</TableCell>
                    <TableCell>9</TableCell>
                    <TableCell>18</TableCell>
                    <TableCell>45</TableCell>
                    <TableCell>67</TableCell>
                    <TableCell>−22</TableCell>
                    <TableCell>42</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell>17</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/Sunderland_A.F.C."
                        title="Sunderland A.F.C."
                      >
                        Sunderland
                      </a>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>9</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell>17</TableCell>
                    <TableCell>48</TableCell>
                    <TableCell>62</TableCell>
                    <TableCell>−14</TableCell>
                    <TableCell>39</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell>18</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/Newcastle_United_F.C."
                        title="Newcastle United F.C."
                      >
                        Newcastle United
                      </a>{' '}
                      <strong>(R)</strong>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>9</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>19</TableCell>
                    <TableCell>44</TableCell>
                    <TableCell>65</TableCell>
                    <TableCell>−21</TableCell>
                    <TableCell>37</TableCell>
                    <TableCell>
                      Relegation to the{' '}
                      <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
                        title="2016–17 Football League Championship"
                      >
                        Football League Championship
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell>19</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/Norwich_City_F.C."
                        title="Norwich City F.C."
                      >
                        Norwich City
                      </a>{' '}
                      <strong>(R)</strong>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>9</TableCell>
                    <TableCell>7</TableCell>
                    <TableCell>22</TableCell>
                    <TableCell>39</TableCell>
                    <TableCell>67</TableCell>
                    <TableCell>−28</TableCell>
                    <TableCell>34</TableCell>
                    <TableCell>
                      Relegation to the{' '}
                      <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
                        title="2016–17 Football League Championship"
                      >
                        Football League Championship
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell>20</TableHeaderCell>
                    <TableCell>
                      <a
                        href="https://en.wikipedia.org/wiki/Aston_Villa_F.C."
                        title="Aston Villa F.C."
                      >
                        Aston Villa
                      </a>{' '}
                      <strong>(R)</strong>
                    </TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>27</TableCell>
                    <TableCell>27</TableCell>
                    <TableCell>76</TableCell>
                    <TableCell>−49</TableCell>
                    <TableCell>17</TableCell>
                    <TableCell>
                      Relegation to the{' '}
                      <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
                        title="2016–17 Football League Championship"
                      >
                        Football League Championship
                      </a>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Column>
            <Column isFull>
              <CodeCollapse>
                <Highlight className="javascript" languages={['javascript']}>
                  {`
import React from 'react'
import { Table, TableHead, TableRow, TableHeaderCell, TableFoot, TableBody, TableCell } from '@brightleaf/elements'

export default () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>
            <abbr title="Position">Pos</abbr>
          </TableHeaderCell>
          <TableHeaderCell>Team</TableHeaderCell>
          <TableHeaderCell>
            <abbr title="Played">Pld</abbr>
          </TableHeaderCell>
          <TableHeaderCell>
            <abbr title="Won">W</abbr>
          </TableHeaderCell>
          <TableHeaderCell>
            <abbr title="Drawn">D</abbr>
          </TableHeaderCell>
          <TableHeaderCell>
            <abbr title="Lost">L</abbr>
          </TableHeaderCell>
          <TableHeaderCell>
            <abbr title="Goals for">GF</abbr>
          </TableHeaderCell>
          <TableHeaderCell>
            <abbr title="Goals against">GA</abbr>
          </TableHeaderCell>
          <TableHeaderCell>
            <abbr title="Goal difference">GD</abbr>
          </TableHeaderCell>
          <TableHeaderCell>
            <abbr title="Points">Pts</abbr>
          </TableHeaderCell>
          <TableHeaderCell>
            Qualification or relegation
          </TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableFoot>
        <TableRow>
          <TableHeaderCell>
            <abbr title="Position">Pos</abbr>
          </TableHeaderCell>
          <TableHeaderCell>Team</TableHeaderCell>
          <TableHeaderCell>
            <abbr title="Played">Pld</abbr>
          </TableHeaderCell>
          <TableHeaderCell>
            <abbr title="Won">W</abbr>
          </TableHeaderCell>
          <TableHeaderCell>
            <abbr title="Drawn">D</abbr>
          </TableHeaderCell>
          <TableHeaderCell>
            <abbr title="Lost">L</abbr>
          </TableHeaderCell>
          <TableHeaderCell>
            <abbr title="Goals for">GF</abbr>
          </TableHeaderCell>
          <TableHeaderCell>
            <abbr title="Goals against">GA</abbr>
          </TableHeaderCell>
          <TableHeaderCell>
            <abbr title="Goal difference">GD</abbr>
          </TableHeaderCell>
          <TableHeaderCell>
            <abbr title="Points">Pts</abbr>
          </TableHeaderCell>
          <TableHeaderCell>
            Qualification or relegation
          </TableHeaderCell>
        </TableRow>
      </TableFoot>
      <TableBody>
        <TableRow>
          <TableHeaderCell>1</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
              title="Leicester City F.C."
            >
              Leicester City
            </a>{' '}
            <strong>(C)</strong>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>23</TableCell>
          <TableCell>12</TableCell>
          <TableCell>3</TableCell>
          <TableCell>68</TableCell>
          <TableCell>36</TableCell>
          <TableCell>+32</TableCell>
          <TableCell>81</TableCell>
          <TableCell>
            Qualification for the{' '}
            <a
              href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
              title="2016–17 UEFA Champions League"
            >
              Champions League group stage
            </a>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>2</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/Arsenal_F.C."
              title="Arsenal F.C."
            >
              Arsenal
            </a>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>20</TableCell>
          <TableCell>11</TableCell>
          <TableCell>7</TableCell>
          <TableCell>65</TableCell>
          <TableCell>36</TableCell>
          <TableCell>+29</TableCell>
          <TableCell>71</TableCell>
          <TableCell>
            Qualification for the{' '}
            <a
              href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
              title="2016–17 UEFA Champions League"
            >
              Champions League group stage
            </a>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>3</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C."
              title="Tottenham Hotspur F.C."
            >
              Tottenham Hotspur
            </a>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>19</TableCell>
          <TableCell>13</TableCell>
          <TableCell>6</TableCell>
          <TableCell>69</TableCell>
          <TableCell>35</TableCell>
          <TableCell>+34</TableCell>
          <TableCell>70</TableCell>
          <TableCell>
            Qualification for the
            <a
              href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
              title="2016–17 UEFA Champions League"
            >
              Champions League group stage
            </a>
          </TableCell>
        </TableRow>
        <TableRow className="is-selected">
          <TableHeaderCell>4</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/Manchester_City_F.C."
              title="Manchester City F.C."
            >
              Manchester City
            </a>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>19</TableCell>
          <TableCell>9</TableCell>
          <TableCell>10</TableCell>
          <TableCell>71</TableCell>
          <TableCell>41</TableCell>
          <TableCell>+30</TableCell>
          <TableCell>66</TableCell>
          <TableCell>
            Qualification for the{' '}
            <a
              href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round"
              title="2016–17 UEFA Champions League"
            >
              Champions League play-off round
            </a>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>5</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/Manchester_United_F.C."
              title="Manchester United F.C."
            >
              Manchester United
            </a>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>19</TableCell>
          <TableCell>9</TableCell>
          <TableCell>10</TableCell>
          <TableCell>49</TableCell>
          <TableCell>35</TableCell>
          <TableCell>+14</TableCell>
          <TableCell>66</TableCell>
          <TableCell>
            Qualification for the{' '}
            <a
              href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage"
              title="2016–17 UEFA Europa League"
            >
              Europa League group stage
            </a>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>6</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/Southampton_F.C."
              title="SouthHampton F.C."
            >
              Southampton
            </a>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>18</TableCell>
          <TableCell>9</TableCell>
          <TableCell>11</TableCell>
          <TableCell>59</TableCell>
          <TableCell>41</TableCell>
          <TableCell>+18</TableCell>
          <TableCell>63</TableCell>
          <TableCell>
            Qualification for the{' '}
            <a
              href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage"
              title="2016–17 UEFA Europa League"
            >
              Europa League group stage
            </a>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>7</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/West_Ham_United_F.C."
              title="West Ham United F.C."
            >
              West Ham United
            </a>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>16</TableCell>
          <TableCell>14</TableCell>
          <TableCell>8</TableCell>
          <TableCell>65</TableCell>
          <TableCell>51</TableCell>
          <TableCell>+14</TableCell>
          <TableCell>62</TableCell>
          <TableCell>
            Qualification for the{' '}
            <a
              href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#TableHeaderCellird_qualifying_round"
              title="2016–17 UEFA Europa League"
            >
              Europa League third qualifying round
            </a>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>8</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/Liverpool_F.C."
              title="Liverpool F.C."
            >
              Liverpool
            </a>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>16</TableCell>
          <TableCell>12</TableCell>
          <TableCell>10</TableCell>
          <TableCell>63</TableCell>
          <TableCell>50</TableCell>
          <TableCell>+13</TableCell>
          <TableCell>60</TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>9</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/Stoke_City_F.C."
              title="Stoke City F.C."
            >
              Stoke City
            </a>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>14</TableCell>
          <TableCell>9</TableCell>
          <TableCell>15</TableCell>
          <TableCell>41</TableCell>
          <TableCell>55</TableCell>
          <TableCell>−14</TableCell>
          <TableCell>51</TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>10</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/Chelsea_F.C."
              title="Chelsea F.C."
            >
              Chelsea
            </a>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>12</TableCell>
          <TableCell>14</TableCell>
          <TableCell>12</TableCell>
          <TableCell>59</TableCell>
          <TableCell>53</TableCell>
          <TableCell>+6</TableCell>
          <TableCell>50</TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>11</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/Everton_F.C."
              title="Everton F.C."
            >
              Everton
            </a>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>11</TableCell>
          <TableCell>14</TableCell>
          <TableCell>13</TableCell>
          <TableCell>59</TableCell>
          <TableCell>55</TableCell>
          <TableCell>+4</TableCell>
          <TableCell>47</TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>12</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C."
              title="Swansea City A.F.C."
            >
              Swansea City
            </a>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>12</TableCell>
          <TableCell>11</TableCell>
          <TableCell>15</TableCell>
          <TableCell>42</TableCell>
          <TableCell>52</TableCell>
          <TableCell>−10</TableCell>
          <TableCell>47</TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>13</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/Watford_F.C."
              title="Watford F.C."
            >
              Watford
            </a>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>12</TableCell>
          <TableCell>9</TableCell>
          <TableCell>17</TableCell>
          <TableCell>40</TableCell>
          <TableCell>50</TableCell>
          <TableCell>−10</TableCell>
          <TableCell>45</TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>14</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C."
              title="West Bromwich Albion F.C."
            >
              West Bromwich Albion
            </a>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>10</TableCell>
          <TableCell>13</TableCell>
          <TableCell>15</TableCell>
          <TableCell>34</TableCell>
          <TableCell>48</TableCell>
          <TableCell>−14</TableCell>
          <TableCell>43</TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>15</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C."
              title="Crystal Palace F.C."
            >
              Crystal Palace
            </a>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>11</TableCell>
          <TableCell>9</TableCell>
          <TableCell>18</TableCell>
          <TableCell>39</TableCell>
          <TableCell>51</TableCell>
          <TableCell>−12</TableCell>
          <TableCell>42</TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>16</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth"
              title="A.F.C. Bournemouth"
            >
              AFC Bournemouth
            </a>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>11</TableCell>
          <TableCell>9</TableCell>
          <TableCell>18</TableCell>
          <TableCell>45</TableCell>
          <TableCell>67</TableCell>
          <TableCell>−22</TableCell>
          <TableCell>42</TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>17</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/Sunderland_A.F.C."
              title="Sunderland A.F.C."
            >
              Sunderland
            </a>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>9</TableCell>
          <TableCell>12</TableCell>
          <TableCell>17</TableCell>
          <TableCell>48</TableCell>
          <TableCell>62</TableCell>
          <TableCell>−14</TableCell>
          <TableCell>39</TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>18</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/Newcastle_United_F.C."
              title="Newcastle United F.C."
            >
              Newcastle United
            </a>{' '}
            <strong>(R)</strong>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>9</TableCell>
          <TableCell>10</TableCell>
          <TableCell>19</TableCell>
          <TableCell>44</TableCell>
          <TableCell>65</TableCell>
          <TableCell>−21</TableCell>
          <TableCell>37</TableCell>
          <TableCell>
            Relegation to the{' '}
            <a
              href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
              title="2016–17 Football League Championship"
            >
              Football League Championship
            </a>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>19</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/Norwich_City_F.C."
              title="Norwich City F.C."
            >
              Norwich City
            </a>{' '}
            <strong>(R)</strong>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>9</TableCell>
          <TableCell>7</TableCell>
          <TableCell>22</TableCell>
          <TableCell>39</TableCell>
          <TableCell>67</TableCell>
          <TableCell>−28</TableCell>
          <TableCell>34</TableCell>
          <TableCell>
            Relegation to the{' '}
            <a
              href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
              title="2016–17 Football League Championship"
            >
              Football League Championship
            </a>
          </TableCell>{' '}
        </TableRow>
        <TableRow>
          <TableHeaderCell>20</TableHeaderCell>
          <TableCell>
            <a
              href="https://en.wikipedia.org/wiki/Aston_Villa_F.C."
              title="Aston Villa F.C."
            >
              Aston Villa
            </a>{' '}
            <strong>(R)</strong>
          </TableCell>
          <TableCell>38</TableCell>
          <TableCell>3</TableCell>
          <TableCell>8</TableCell>
          <TableCell>27</TableCell>
          <TableCell>27</TableCell>
          <TableCell>76</TableCell>
          <TableCell>−49</TableCell>
          <TableCell>17</TableCell>
          <TableCell>
            Relegation to the{' '}
            <a
              href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
              title="2016–17 Football League Championship"
            >
              Football League Championship
            </a>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
`}
                </Highlight>
              </CodeCollapse>
            </Column>
          </Columns>
        </Example>
        <Example>
          <Columns>
            <Column isHalf>
              Add <strong>borders</strong> with the <em>isBordered</em> property
              <Table isBordered>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>One</TableHeaderCell>
                    <TableHeaderCell>Two</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Three</TableCell>
                    <TableCell>Four</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from '@brightleaf/elements'

export default () => {
  return (
    <Table isBordered>
      <TableHead>
        <TableRow>
          <TableHeaderCell>One</TableHeaderCell>
          <TableHeaderCell>Two</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Three</TableCell>
          <TableCell>Four</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>
        <Example>
          <Columns>
            <Column isHalf>
              Add <strong>stripes</strong> with the <em>isStriped</em> property
              <Table isStriped>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>One</TableHeaderCell>
                    <TableHeaderCell>Two</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Three</TableCell>
                    <TableCell>Four</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Five</TableCell>
                    <TableCell>Six</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Seven</TableCell>
                    <TableCell>Eight</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Nine</TableCell>
                    <TableCell>Ten</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Eleven</TableCell>
                    <TableCell>Twelve</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { Table, TableHead, TableRow, TableHeaderCell, TableFoot, TableBody, TableCell } from '@brightleaf/elements'

export default () => {
  return (
    <Table isStriped>
      <TableHead>
        <TableRow>
          <TableHeaderCell>One</TableHeaderCell>
          <TableHeaderCell>Two</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Three</TableCell>
          <TableCell>Four</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Five</TableCell>
          <TableCell>Six</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Seven</TableCell>
          <TableCell>Eight</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Nine</TableCell>
          <TableCell>Ten</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Eleven</TableCell>
          <TableCell>Twelve</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>
        <Example>
          <Columns>
            <Column isHalf>
              Make the cells <strong>narrower</strong> with the{' '}
              <em>isNarrow</em> property.
              <Table isNarrow>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>One</TableHeaderCell>
                    <TableHeaderCell>Two</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Three</TableCell>
                    <TableCell>Four</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Five</TableCell>
                    <TableCell>Six</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Seven</TableCell>
                    <TableCell>Eight</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Nine</TableCell>
                    <TableCell>Ten</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Eleven</TableCell>
                    <TableCell>Twelve</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { Table, TableHead, TableRow, TableHeaderCell, TableFoot, TableBody, TableCell } from '@brightleaf/elements'

export default () => {
  return (
    <Table isNarrow>
      <TableHead>
        <TableRow>
          <TableHeaderCell>One</TableHeaderCell>
          <TableHeaderCell>Two</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Three</TableCell>
          <TableCell>Four</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Five</TableCell>
          <TableCell>Six</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Seven</TableCell>
          <TableCell>Eight</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Nine</TableCell>
          <TableCell>Ten</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Eleven</TableCell>
          <TableCell>Twelve</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>
        <Example>
          <Columns>
            <Column isHalf>
              You can add a <strong>hover effect</strong> on each row with the{' '}
              <em>isHoverable</em> property.
              <Table isHoverable>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>One</TableHeaderCell>
                    <TableHeaderCell>Two</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Three</TableCell>
                    <TableCell>Four</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Five</TableCell>
                    <TableCell>Six</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Seven</TableCell>
                    <TableCell>Eight</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Nine</TableCell>
                    <TableCell>Ten</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Eleven</TableCell>
                    <TableCell>Twelve</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { Table, TableHead, TableRow, TableHeaderCell, TableFoot, TableBody, TableCell } from '@brightleaf/elements'

export default () => {
  return (
    <Table isHoverable>
      <TableHead>
        <TableRow>
          <TableHeaderCell>One</TableHeaderCell>
          <TableHeaderCell>Two</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Three</TableCell>
          <TableCell>Four</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Five</TableCell>
          <TableCell>Six</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Seven</TableCell>
          <TableCell>Eight</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Nine</TableCell>
          <TableCell>Ten</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Eleven</TableCell>
          <TableCell>Twelve</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>
        <Example>
          <Columns>
            <Column isHalf>
              You can have a <strong>fullwidth</strong> table with the{' '}
              <em>isFullWidth</em> property.
              <Table isFullWidth>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>One</TableHeaderCell>
                    <TableHeaderCell>Two</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Three</TableCell>
                    <TableCell>Four</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Five</TableCell>
                    <TableCell>Six</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Seven</TableCell>
                    <TableCell>Eight</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Nine</TableCell>
                    <TableCell>Ten</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Eleven</TableCell>
                    <TableCell>Twelve</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { Table, TableHead, TableRow, TableHeaderCell, TableFoot, TableBody, TableCell } from '@brightleaf/elements'

export default () => {
  return (
    <Table isFullWidth>
      <TableHead>
        <TableRow>
          <TableHeaderCell>One</TableHeaderCell>
          <TableHeaderCell>Two</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Three</TableCell>
          <TableCell>Four</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Five</TableCell>
          <TableCell>Six</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Seven</TableCell>
          <TableCell>Eight</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Nine</TableCell>
          <TableCell>Ten</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Eleven</TableCell>
          <TableCell>Twelve</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>
        <Example>
          <Columns>
            <Column isHalf>
              You can combine all five properties
              <Table isBordered isStriped isNarrow isHoverable isFullWidth>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>One</TableHeaderCell>
                    <TableHeaderCell>Two</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Three</TableCell>
                    <TableCell>Four</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Five</TableCell>
                    <TableCell>Six</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Seven</TableCell>
                    <TableCell>Eight</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Nine</TableCell>
                    <TableCell>Ten</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Eleven</TableCell>
                    <TableCell>Twelve</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { Table, TableHead, TableRow, TableHeaderCell, TableFoot, TableBody, TableCell } from '@brightleaf/elements'

export default () => {
  return (
    <Table isBordered isStriped isNarrow isHoverable isFullWidth>>
      <TableHead>
        <TableRow>
          <TableHeaderCell>One</TableHeaderCell>
          <TableHeaderCell>Two</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Three</TableCell>
          <TableCell>Four</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Five</TableCell>
          <TableCell>Six</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Seven</TableCell>
          <TableCell>Eight</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Nine</TableCell>
          <TableCell>Ten</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Eleven</TableCell>
          <TableCell>Twelve</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>
        <Example>
          <Columns>
            <Column isHalf>
              <TableContainer>
                <Table isStriped isBordered isHoverable>
                  <TableBody>{rows}</TableBody>
                </Table>
              </TableContainer>
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { Table, TableHead, TableRow, TableHeaderCell, TableFoot, TableBody, TableCell, TableContainer } from '@brightleaf/elements'

export default () => {
  return (
    <TableContainer isStriped isBordered isHoverable>
      <Table>
      {/* content */}
      </Table>
    <TableContainer>
  )
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>
      </Content>
    </Section>
  )
}
