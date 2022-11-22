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
            width: 2028,
          },
        }}
      >
        <Paper>
          <h2 className='text-center'>Sorry No Results found!</h2>
        </Paper>
      </Box>
    </Grid>
  );
};

export default Empty;
