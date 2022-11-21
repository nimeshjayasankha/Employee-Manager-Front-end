import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
const Empty = () => {
  return (
    <Grid item md={12} xs={12}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 1228,
          },
        }}
      >
        <Paper>
          <h2 className='text-center'>Sorry o Results found!</h2>
        </Paper>
      </Box>
    </Grid>
  );
};

export default Empty;
