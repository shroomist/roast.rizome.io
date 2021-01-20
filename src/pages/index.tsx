/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { Grid, jsx, useColorMode, Box, Card, Container, Divider, Flex, Heading, Link } from 'theme-ui'
import HTML from 'gatsby-theme-blorg/src/components/html'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import { getPoolData, PoolSummary } from '../services/adapool'

const poolId = '0d7af673b35b05c292168bab17b1069493d2d10fe095071f355fd724'

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "images/rost.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}
      >
        <Flex>
          <section sx={{
            mx: ['2em', '2em', '5em'],
            my: ['1.5em', '3em', '5em']
          }}>
            <Heading as='h1'>roast pool</Heading>
            <Heading as='h3'>cardano stake pool</Heading>
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
      <section>
        {/* <Card style={{position: 'relative'}} sx={{mx: 'auto'}}> */}
        <BackgroundSection />
      </section>
      <Grid columns={ [1, 3] } sx={{ mx: ['2em', '4em', '8em'] }}>
        <Card sx={cardsx}>
          <Box sx={{ textAlign: 'center' }}>
            <Heading as='h3'>
              independent operation
            </Heading>
            <Box>
              we are a small team with years of experience in crypto industry
            </Box>
          </Box>
        </Card>
        <Card sx={cardsx}>
          <Box sx={{ textAlign: 'center' }}>
            <Heading as='h3'>
              cloud provisioned
            </Heading>
            <Container>
              leverage flexibility of cloud infrastructure to ensure scalability
            </Container>
          </Box>
        </Card>
        <Card sx={cardsx}>
          <Box sx={{ textAlign: 'center' }}>
            <Heading as='h3'>
              secure
            </Heading>
            <div>
              security is the cornerstone for our service and we follow the best practices to protect delegators
            </div>
          </Box>
        </Card>
      </Grid>
    </main>
  )
}

