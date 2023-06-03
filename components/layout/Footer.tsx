import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ mt: 2, py: 2, backgroundColor: '#f5f5f5' }}>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} My Admin Panel. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
