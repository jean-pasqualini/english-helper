import React, {useContext} from 'react';
import {Grid, Button, Select, MenuItem, FormControl} from '@material-ui/core';
import {SentenceContext} from "../../pages/context/sentence-context";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    margin: {
        width: '100%',
        margin: theme.spacing(1)
    },
}));

const SentencePaternBuilder = function() {
    const classes = useStyles();
    const [state, dispatch] = useContext(SentenceContext);

    const buildPattern = function() {
        dispatch({ type: 'EMPTY_PARTS' });
        dispatch({
            type: 'ADD_PART',
            payload: {
                description: 'Subject',
                content: 'I',
            }
        })
        dispatch({
            type: 'ADD_PART',
            payload: {
                description: 'Intransitive verb',
                content: 'eat',
            }
        })
        dispatch({
            type: 'ADD_PART',
            payload: {
                description: 'Punctuation',
                content: '.',
            }
        })
    };

        return (
            <Grid item xs={3}>
                <ul style={{padding: '10px', listStyle: 'none'}}>
                    <li>
                        <strong>Which time ?</strong>
                                <FormControl variant="outlined" className={classes.margin}>
                                    <Select value={"present"}>
                                        <MenuItem value={"preterit"}>
                                            Preterit
                                        </MenuItem>
                                        <MenuItem value={"present"}>
                                            Present
                                        </MenuItem>
                                        <MenuItem value={"futur"}>
                                            Futur
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                    </li>
                    <li>
                        <strong>Which tense form ?</strong>
                        <FormControl variant="outlined" className={classes.margin}>
                            <Select value={"simple"}>
                                <MenuItem value={"simple"}>
                                    Simple
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </li>
                    <li>
                        <strong>Which form ?</strong>
                        <FormControl variant="outlined" className={classes.margin}>
                            <Select value={"declarative"}>
                                <MenuItem value={"declarative"}>
                                    Declarative
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </li>
                    <li>
                        <strong>Active ou passive ?</strong>
                        <FormControl variant="outlined" className={classes.margin}>
                            <Select value={"active"}>
                                <MenuItem value={"active"}>
                                    Active
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </li>
                    <li>
                        <strong>Which type ?</strong>
                        <FormControl variant="outlined" className={classes.margin}>
                            <Select value={"simple"}>
                                <MenuItem value={"simple"}>
                                    Simple sentence
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </li>
                    <li>
                        <strong>Which sentence pattern ?</strong>
                        <FormControl variant="outlined" className={classes.margin}>
                            <Select value={"sv"}>
                                <MenuItem value={"sv"}>
                                    S-V
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </li>
                </ul>

                <div style={{"text-align": "center"}}>
                    <Button size={"large"} variant={"contained"} color={"primary"} onClick={buildPattern}>Build the pattern</Button>
                </div>
            </Grid>
        )
}

export default SentencePaternBuilder;