import { Container, Box, Heading, Image, Button, Link, SimpleGrid, List, ListItem } from'@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { GridItem } from '../components/grid-item'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoGithub } from "react-icons/io5";
import thumbYouTube from '../public/images/links/youtube.png'

const Page = () => {
  return (
    <Container>
      <Box borderRadius='lg' bg='gray' p = {3} mb = {6} align ='center'>
        Hello I&apos;m a full-stack developer based in Viet Nam!
      </Box>
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant ="page-title">
            Nguyen Pham Quang Dinh
          </Heading>
          <p>Digital Craftman ( Artist / Developer / Designer )</p>
        </Box>
      <Box
        flexShrink={0}
        mt={{base:4, md:0}}
        ml={{md:6}}
        align="center"
      >
        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/me.jpg" alt="Profile Image"/>
      </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Work
        </Heading>  
        <Paragraph>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
        <Box align='center' mt={4}>
        <NextLink  href='/'>
        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">My Portfolio</Button>
        </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Lam Dong, Viet Nam.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Information Science of Ho Chi Minh University of Science
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          
          
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default Page