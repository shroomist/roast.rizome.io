/** @jsx jsx */
import { Grid, jsx, useColorMode } from 'theme-ui'
import React from 'react'
import { Box, Card, Container, Divider, Flex, Heading, Link } from 'theme-ui'
import HTML from 'gatsby-theme-blorg/src/components/html'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

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
                <Card sx={{my: ['1em','2em']}}>
                  - Ticker: ROAST <br/>
                  - Fee: 1 - 4.5% <br/>
                  - Fixed: 340 Ada <br/>
                  - Pledge: 25k <br/>
                  {/* - PoolId: <Link href="google.com">adapools</Link> */}

                </Card>
              </Flex>
                <Card><Heading as="h4">soon to be launched!</Heading></Card>
            </section>
          </section>
        </Flex>
    </BackgroundImage>
  )
}
export default ({data}) => {
  const [,setColorMode] = useColorMode()
  setColorMode('dark')

  return (
    <main sx={{ pb: 4, mx: 'auto' }}>
      <section>
        {/* <Card style={{position: 'relative'}} sx={{mx: 'auto'}}> */}
        <BackgroundSection />
      </section>
        <Grid columns={ [1, 3] } sx={{ mx: ['2em', '4em', '8em'] }}>
          <Card>
            <Box>
              <Heading as='h3'>
                independent operation
              </Heading>
              <Box>
                we are a small team that has experience in crypto industry since 2017
              </Box>
            </Box>
          </Card>
          <Card>
            <Heading as='h3'>
              cloud provisioned
            </Heading>
            <Container>
              leverage flexibility of cloud infrastructure to ensure scalability
            </Container>
          </Card>
          <Card>
            <Heading as='h3'>
              air-gapped key management
            </Heading>
            <div>
              security is the cornerstone for our service and we follow the best practices to excel
            </div>
          </Card>
        </Grid>
    </main>
  )
}


