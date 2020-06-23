import React, { useState } from 'react';
import Header from './Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import SentenceMaker from "./SentenceMaker/SentenceMaker";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const Layout = function() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Header/>
            <main>
                <SentenceMaker/>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
            </footer>
        </React.Fragment>
    )
}

export default Layout;