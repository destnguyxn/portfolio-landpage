import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import RobotModelLoader from '../robot-model-loader'

const LazyRobotModel = dynamic(() => import('../robot-model'), {
  ssr: false,
  loading: () => <RobotModelLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Dest's homepage" />
        <meta name="author" content="Nguyen Pham Quang Dinh" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/card.png" />
        <meta
          property="og:site_name"
          content="Nguyen Pham Quang Dinh's Homepage"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Nguyen Pham Quang Dinh - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyRobotModel />
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
