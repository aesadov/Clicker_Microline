import React from 'react'

import Button from '@mui/material/Button'

interface ClickButtonProps {
  incrementCount: () => void
  isSending: boolean
}

export const ClickButton: React.FC<ClickButtonProps> = ({ incrementCount, isSending }) => {
  return (
    <Button
      disabled={isSending}
      onClick={() => incrementCount()}
      sx={{
        '&:hover': {
          backgroundColor: 'goldenrod',
        },
        backgroundColor: 'gold',
        color: 'black',
        fontWeight: 600,
        padding: '10px 20px',
        width: 300,
      }}
      variant={'contained'}
    >
      {isSending ? 'Отправка' : 'Кликнуть'}
    </Button>
  )
}
