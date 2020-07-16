import React, {Component} from 'react';
import {
    AppBar,
    Toolbar,
    Typography } from '@material-ui/core';

class Header extends Component {
    render() {
        return (
          <React.Fragment>
              <AppBar position="relative">
                <Toolbar>
                  <Typography variant="h6" color="inherit" noWrap>
                    Sentence Maker
                  </Typography>
                </Toolbar>
              </AppBar>
          </React.Fragment>
        )
    }
}

export default Header;