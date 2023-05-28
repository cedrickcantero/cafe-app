import React from 'react';
import { AppBar, Toolbar, Typography, Container, Paper, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Cafe Management</Typography>
          <Link component={RouterLink} to="/cafes" color="inherit" style={{ marginLeft: '1rem' }}>
            Cafe
          </Link>
          <Link component={RouterLink} to="/employees" color="inherit" style={{ marginLeft: '1rem' }}>
            Employee
          </Link>
        </Toolbar>
      </AppBar>
      <Container style={{ flex: '1' }}>
        <Paper style={{ padding: '2rem', marginTop: '2rem' }}>
          {children}
        </Paper>
      </Container>
      <footer style={{ backgroundColor: '#f5f5f5', padding: '1rem', marginTop: 'auto' }}>
        <Typography variant="body2" align="center">
          © 2023 Cafe Management, Inc. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default Layout;
