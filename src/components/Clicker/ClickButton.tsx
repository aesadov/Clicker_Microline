import Button from '@mui/material/Button'

export const ClickButton = () => {
  return (
    <Button
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
