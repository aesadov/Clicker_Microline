import React from 'react'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'

interface ClickCountDisplayProps {
  count: number
  error: null | string
  serverCount: number | undefined
}

export const ClickCountDisplay: React.FC<ClickCountDisplayProps> = ({
  count,
  error,
  serverCount,
}) => {
  return (
    <Box sx={{ width: 300 }}>
      <Alert severity={'info'} sx={{ mt: '20px' }}>
        Кликнули {count} раз
      </Alert>
      <Alert severity={'warning'} sx={{ mt: '20px' }}>
        По версии сервера {serverCount} раз
      </Alert>
      {error && (
        <Alert severity={'error'} sx={{ mt: '20px' }}>
          {error}
        </Alert>
      )}
    </Box>
  )
}
