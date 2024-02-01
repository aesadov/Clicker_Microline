import { ClickButton } from '@/components/Clicker/ClickButton'
import { ClickCountDisplay } from '@/components/Clicker/ClickCountDisplay'
import Box from '@mui/material/Box'

export const Clicker = () => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '100px',
      }}
    >
      <ClickButton />
      <ClickCountDisplay />
    </Box>
  )
}
