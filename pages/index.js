import {
  Container,
  Box,
  Heading,
  Button,
  Link,
  SimpleGrid,
  List,
  ListItem,
  chakra
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { GridItem } from '../components/grid-item'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoGithub, IoLogoYoutube } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.jpeg'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="gray" p={3} mb={6} align="center">
        Hello I&apos;m a full-stack developer based in Viet Nam!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nguyen Pham Quang Dinh
          </Heading>
          <p>Digital Craftman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 2 }}
          align="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/me.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        I am a freelance and a full-stack developer based in Ho Chi Minh, Viet Nam with a passion for building digital services/stuffs.
        </Paragraph>
        <Box align="center" mt={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
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
          Art, Drawing,{' '}
          <Link
            href="https://open.spotify.com/user/22uqfqyasviijy57kq2fnxv3a?si=591a37358eb34a77"
            target="_blank"
          >
            Music (here my spotify)
          </Link>
          , Playing Guitar,{' '}
          <Link href="https://www.eyeem.com/u/destnguyxn" target="_blank">
            Photography
          </Link>
          , Machine Learning
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/erudilumos" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @dest.nguyxn
              </Button>
            </Link>
          </ListItem>
        </List>

        <IoLogoYoutube/>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UCa7k2ySSe-9fkNV3WcoGDgA"
            title="hoping to make some video here soon..."
            thumbnail={thumbYouTube}
          >
            
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

export default Home

export { getServerSideProps } from '../components/chakra'
