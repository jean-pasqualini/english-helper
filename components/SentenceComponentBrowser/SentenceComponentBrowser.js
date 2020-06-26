import React, {Component, useEffect, useState} from 'react';
import {Grid, Paper} from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grammar from "./Grammar/Grammar";
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-prevent-tabpanel-${index}`}
            aria-labelledby={`scrollable-prevent-tab-${index}`}
            {...other}
        >
            {children}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const SentenceComponentBrowser = function () {
    const classes = useStyles();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Box pt={2}>
                <Typography variant="h3" component="h3" gutterBottom align={"center"}>
                    Sentence component browser
                </Typography>
            </Box>
            <Tabs value={value} onChange={handleChange}>
                <Tab label={"Grammar"} {...a11yProps(0)}/>
                <Tab label="Usage" {...a11yProps(1)}/>
            </Tabs>
            <TabPanel value={value} index={0}>
                <Grammar/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Usage
            </TabPanel>
        </Paper>
    )
}

export default SentenceComponentBrowser;