import { graphql, useStaticQuery } from "gatsby";
/* import { Image } from "theme-ui"; */
import Img from "gatsby-image"
import { Card, Container, Grid, Heading } from "theme-ui";
export const Feats = () => {

  const {featImgs } = useStaticQuery(
    graphql`
      query {
        featImgs: allFile(
          filter: {relativePath: {glob: "images/*icon*"}},
          sort: {fields: name, order: ASC}) {
          edges {
            node {
              id
              childImageSharp {
                fluid(quality: 90, maxHeight: 250) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  );


  const img = featImgs.edges.map(a => a.node.childImageSharp)
  const content = [
    {
      header: 'independent operation',
      body: 'we are a small team with years of experience in crypto industry'
    },
    {
      header: 'cloud provisioned',
      body: 'leverage flexibility of cloud infrastructure to ensure scalability'
    },
    {
      header: 'secure',
      body: 'security is the cornerstone for our service and we follow the best practices to protect delegators'
    }
  ];

  const cardsx = { p: ['1em', '2em'], pt: [0, 0], textAlign: 'center' }
  return (
      <Grid columns={ [1, 3] } gap={ ['1em', '2em'] } sx={{ mx: ['2em', '4em', '8em'] }}>
        {content.map((c, i) =>
          <Card sx={cardsx} key={i}>
            <Container sx={{px:['8em', 0, '1em'], mt: [-20, 0, 0, -20]}}>
            <Img fluid={img[i].fluid} sx={ {mx: 'auto'} } />
            </Container>
            <Heading as='h3' sx={{mt: [ -20, 0, 0, -40 ]}}>
              {c.header}
            </Heading>
            <Container>
              {c.body}
            </Container>

          </Card>
        )}

      </Grid>

  )
};
