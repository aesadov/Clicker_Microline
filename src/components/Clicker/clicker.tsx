import React from 'react'

import { ClickButton } from '@/components/Clicker/ClickButton'
import { ClickCountDisplay } from '@/components/Clicker/ClickCountDisplay'
import { useClickSender } from '@/customHooks/useClickSender'
import Box from '@mui/material/Box'

export const Clicker: React.FC = () => {
  const { count, incrementCount, serverCount } = useClickSender()

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '100px',
      }}
    >
      <ClickButton incrementCount={incrementCount} />
      <ClickCountDisplay count={count} serverCount={serverCount} />
    </Box>
  )
}
