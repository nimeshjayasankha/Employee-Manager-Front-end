import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

const Loader = () => {
  return (
    <Grid container spacing={2} className="layout-content">
      <Grid item xs={12}>
        <Box role="loading" >
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Loader;
