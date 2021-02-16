/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { Grid, jsx, useColorMode, Box, Card, Container, Divider, Flex, Heading, Link } from 'theme-ui'
import HTML from 'gatsby-theme-blorg/src/components/html'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import { getPoolData, PoolSummary } from '../services/adapool'

import { Feats } from '../comp/feats'

import { Helmet } from 'react-helmet'
const poolId = '0d7af673b35b05c292168bab17b1069493d2d10fe095071f355fd724'

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "images/rost.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        logo: file(relativePath: { eq: "images/logo.png" }) {
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }

        }
      }
    `
  )
  // Set ImageData.
  const imageData = data.background.childImageSharp.fluid
  const logoData = data.logo.childImageSharp.fixed

  return (
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}
      >
        <Flex>
          <section sx={{
            mx: ['2em', '4em', '8em'],
            my: ['1.5em', '3em', '5em']
          }}>
            <Img fixed={logoData} alt="cardano roast pool" />
            <Heading as='h3' sx={{mb: '1em'}}>delegate cardano for high returns</Heading>
            <section sx={{ pt: '3em'}}>
              <Heading as='h2'>stakes are better <br/> when roasted wild</Heading>

              <Flex>
                <PoolData />
              </Flex>
            </section>
          </section>
        </Flex>
    </BackgroundImage>
  )
}

const cardsx = { p: ['1em', '2em'] }

const PoolData = () => {
  const [info, setInfo] = useState<PoolSummary>(null)
  useEffect(() => {
    getPoolData(poolId).then(setInfo)
  },[poolId])

  if (!info) return null

  return (
    <Card sx={{ ...cardsx, my: ['1em','2em']}}>
      - Ticker: {info.ticker} 🍖<br/>
      - Fee: {info.fee * 100}% <br/>
      - Fixed: {info.fixed / 1000000} Ada <br/>
      - Pledge: {info.pledge / 1000000000}k <br/>
      see on
      <Link href={`http://adapools.org/pool/${poolId}`}> adapools</Link>
      {/* - Rank: {info.rank} */}
      {/* - PoolId: <Link href="google.com">adapools</Link> */}

    </Card>
  )
}

export default ({data}) => {
  const [,setColorMode] = useColorMode()
  useEffect(() => setColorMode('dark'), [])


  return (
    <main sx={{ pb: 4, mx: 'auto' }}>
      <Helmet>
        <title>Cardano roast stake pool</title>
        <meta name="description" content="Delegate Cardano to low saturation pool" />
        <meta name="keywords" content="cardano, stake, stakepool, pool, delegate, delegation, margin, mining, staking" />
        <meta name="icon" content="/fav.png" />
      </Helmet>
      <section>
        <BackgroundSection />
      </section>
      <Feats />
    </main>
  )
}

