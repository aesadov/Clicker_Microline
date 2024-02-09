import React from 'react'

import Button from '@mui/material/Button'

interface ClickButtonProps {
  incrementCount: () => void
}

export const ClickButton: React.FC<ClickButtonProps> = ({ incrementCount }) => {
  return (
    <Button
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
      Кликнуть
    </Button>
  )
}
