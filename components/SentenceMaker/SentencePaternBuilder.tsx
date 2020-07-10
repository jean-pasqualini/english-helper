import React, {useContext, useState} from 'react';
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
    const [formData, updateFormData] = useState(state.sentencePattern);

    const patterns = [
        'S-BE-NOUN',
        'S-BE-ADJECTIVE',
        'THERE-BE-S',
        'S-V-ADVERB',
        'S-LV-ADJECTIVE',
        'S-V',
        'S-V-DO',
        'S-V-IO-DO',
        'S-V-DO-ADJECTIVE',
        'S-V-DO-NOUN',
    ];

    const buildPattern = function() {
        dispatch({
            type: 'REPLACE_PARTS',
            payload: {
                parts: [
                    {
                        description: 'Subject',
                        content: 'I',
                    },
                    {
                        description: 'Intransitive verb',
                        content: 'eat',
                    },
                    {
                        description: 'Punctuation',
                        content: '.',
                    }
                ],
            }
        })
    };

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
    };

    const submit = function(evt) {
        evt.preventDefault();
        dispatch({
            type: 'PATTERN',
            payload: {
                sentencePattern: formData,
            }
        })
        buildPattern();
    }

        return (
            <Grid item xs={3}>
                <form onSubmit={submit}>
                    <ul style={{padding: '10px', listStyle: 'none'}}>
                        <li>
                            <strong>Which tense ?</strong>
                                    <FormControl variant="outlined" className={classes.margin}>
                                        <Select name="tense" value={formData.tense} onChange={handleChange}>
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
                                <Select name="tense_form" value={formData.tense_form} onChange={handleChange}>
                                    <MenuItem value={"simple"}>
                                        Simple
                                    </MenuItem>
                                    <MenuItem value={"continuous"}>
                                        Continuous
                                    </MenuItem>
                                    <MenuItem value={"perfect_simple"}>
                                        Perfect simple
                                    </MenuItem>
                                    <MenuItem value={"perfect_continuous"}>
                                        Perfect continuous
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </li>
                        <li>
                            <strong>Which form ?</strong>
                            <FormControl variant="outlined" className={classes.margin}>
                                <Select name="form" value={formData.form} onChange={handleChange}>
                                    <MenuItem value={"declarative"}>
                                        Declarative
                                    </MenuItem>
                                    <MenuItem value={"interrogative"}>
                                        Interrogative
                                    </MenuItem>
                                    <MenuItem value={"imperative"}>
                                        Imperative
                                    </MenuItem>
                                    <MenuItem value={"exclamatory"}>
                                        Exclamatory
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </li>
                        {/** Negative or not, conditionel or not */}
                        <li>
                            <strong>Active ou passive ?</strong>
                            <FormControl variant="outlined" className={classes.margin}>
                                <Select name="active_passive" value={formData.active_passive} onChange={handleChange}>
                                    <MenuItem value={"active"}>
                                        Active
                                    </MenuItem>
                                    <MenuItem value={"passive"}>
                                        Passive
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </li>
                        <li>
                            <strong>Which type ?</strong>
                            <FormControl variant="outlined" className={classes.margin}>
                                <Select name="type" value={formData.type} onChange={handleChange}>
                                    <MenuItem value={"simple"}>
                                        Simple sentence
                                    </MenuItem>
                                    <MenuItem value={"complex"}>
                                        Complex sentence
                                    </MenuItem>
                                    <MenuItem value={"compound"}>
                                        Compound sentence
                                    </MenuItem>
                                    <MenuItem value={"compound-complex"}>
                                        Compound-Complex sentence
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </li>
                        <li>
                            <strong>Which sentence pattern ?</strong>
                            <FormControl variant="outlined" className={classes.margin}>
                                <Select name="pattern" value={formData.pattern} onChange={handleChange}>
                                    {
                                        patterns.map(item => {
                                            return (
                                                <MenuItem value={item}>
                                                    {item}
                                                </MenuItem>
                                            );
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </li>
                    </ul>

                    <div style={{"text-align": "center"}}>
                        <Button size={"large"} variant={"contained"} color={"primary"} type={"submit"}>Build the pattern</Button>
                    </div>
                </form>
            </Grid>
        )
}

export default SentencePaternBuilder;