

import { AnimatePresence, motion } from 'framer-motion'
import { Box, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { IoLogoSoundcloud } from 'react-icons/io5'
import { useState } from 'react'

const SCToggleButton = () => {
  const [showSC,toggleSC] = useState(false)

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
      
        style={{ display: 'inline-block', overflow:'hidden' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
        ml={2}
          aria-label="Show/Hide Soundcloud Player"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<IoLogoSoundcloud />, <IoLogoSoundcloud />)}
          onClick={()=>toggleSC(!showSC)}
        ></IconButton>
      <Box display={showSC?"relative":"none"} position={"fixed"} right={0} bottom={0} ml={2}>
      <iframe width="100%" height="80" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1000012141&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      </Box>
      </motion.div>
    </AnimatePresence>
  )
}

export default SCToggleButton
