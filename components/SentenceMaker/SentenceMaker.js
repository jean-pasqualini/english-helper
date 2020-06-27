import React, { useState } from 'react';
import {
    Container,
    Grid,
} from '@material-ui/core';
import SentenceComponentBrowser from "../SentenceComponentBrowser/SentenceComponentBrowser";
import SentenceRender from "./SentenceRender";
import { makeStyles } from '@material-ui/core/styles';

import {Paper} from "@material-ui/core";
import SentencePaternBuilder from "./SentencePaternBuilder";
import SentenceContextProvider from "../../pages/context/sentence-context";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    sentenceRenderContainer: {
        position: 'relative'
    },
}));

const SentenceMaker = function() {
    const classes = useStyles();

    return (
            <React.Fragment>
                  <Container className={classes.cardGrid}>
                            <Paper>
                                    <SentenceContextProvider>
                                        <Grid container spacing={1}>
                                            <SentencePaternBuilder />
                                            <Grid item xs={9} className={classes.sentenceRenderContainer}>
                                                <SentenceRender />
                                            </Grid>
                                        </Grid>
                                    </SentenceContextProvider>
                            </Paper>
                            <Grid item xs={12}>
                                <SentenceComponentBrowser/>
                            </Grid>
                    </Container>
            </React.Fragment>
    )
}

export default SentenceMaker;