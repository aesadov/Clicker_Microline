import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'

export const ClickCountDisplay = () => {
  return (
    <Box sx={{ width: 300 }}>
      <Alert severity={'info'} sx={{ mt: '20px' }}>
        Кликнули X раз
      </Alert>
      <Alert severity={'warning'} sx={{ mt: '20px' }}>
        По версии сервера Y раз
      </Alert>
    </Box>
  )
}
