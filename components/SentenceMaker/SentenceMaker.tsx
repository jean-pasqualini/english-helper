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
import {SentenceProvider} from "../../pages/context/sentence-context";

const useStyles = makeStyles((theme) => ({
    sentenceRenderContainer: {
        position: 'relative'
    },
}));

const SentenceMaker = function() {
    const classes = useStyles();

    return (
            <React.Fragment>
                <Paper>
                        <SentenceProvider>
                            <Grid container spacing={1}>
                                <SentencePaternBuilder />
                                <Grid item xs={9} className={classes.sentenceRenderContainer}>
                                    <SentenceRender />
                                </Grid>
                            </Grid>
                        </SentenceProvider>
                </Paper>
                <Grid item xs={12}>
                    <SentenceComponentBrowser/>
                </Grid>
            </React.Fragment>
    )
}

export default SentenceMaker;