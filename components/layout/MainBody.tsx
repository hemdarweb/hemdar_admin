import React from 'react';
import { Container, Typography } from '@mui/material';

const MainBody: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" align="center">
        Welcome to the Admin Panel!
      </Typography>
    </Container>
  );
};

export default MainBody;
