import CssBaseline from '@mui/material/CssBaseline';
import MuiContainer from '@mui/material/Container';
import { Box } from '@mui/material';

export function Container({ children }) {
  return (
    <>
      <CssBaseline />
      <MuiContainer sx={{ // maxWidth='xl'
        flexGrow: 1,
        py: 2, display: 'flex',
        flexDirection: 'column'
      }}>
        <Box sx={{ width: '100%' }}>
          {children}
        </Box>
      </MuiContainer>
    </>
  );
}
