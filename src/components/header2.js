import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function ElevateAppBar() {
  return (
    <React.Fragment>
        <CssBaseline />
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">Scroll to Elevate App Bar</Typography>
                </Toolbar>
            </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}