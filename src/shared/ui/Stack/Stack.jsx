import Box from '@mui/material/Box';
import MuiStack from '@mui/material/Stack';

export function Stack({ children }) {
  return (
    <Box sx={{ width: '100%' }} >
      <MuiStack spacing={2}>
        {children}
      </MuiStack>
    </Box>
  );
}
