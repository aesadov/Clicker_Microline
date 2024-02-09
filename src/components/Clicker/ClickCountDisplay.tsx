import React from 'react'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'

interface ClickCountDisplayProps {
  count: number
  serverCount: number
}

export const ClickCountDisplay: React.FC<ClickCountDisplayProps> = ({ count, serverCount }) => {
  return (
    <Box sx={{ width: 300 }}>
      <Alert severity={'info'} sx={{ mt: '20px' }}>
        Кликнули {count} раз
      </Alert>
      <Alert severity={'warning'} sx={{ mt: '20px' }}>
        По версии сервера {serverCount} раз
      </Alert>
    </Box>
  )
}
