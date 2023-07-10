import { Box, Container } from '@mui/material';

import { Navbar } from './components/Navbar';


function App() {

  return (
    <Box
      sx={{
        display: 'block',
        margin: `0 auto`,
        borderRadius: 2,
        width: 600,
        height: 700,
        backgroundColor: `rgb(255, 255, 255)`,
      }}>
      <Container
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          height: `90vh`,
        }}
      >
        <Navbar />

      </Container>
    </Box >
  )
}

export default App
