import React, {Component, useContext, useEffect, useState} from 'react';
import {Grid, Card, CardHeader, CardContent, Button} from '@material-ui/core';
import {SentenceContext} from "../../context/sentence-context";
const SentencePaternBuilder = function() {

    const [state, dispatch] = useContext(SentenceContext);

    const buildPattern = function() {
        dispatch({ type: 'EMPTY_PARTS' });
        dispatch({
            type: 'ADD_PART',
            payload: {
                description: 'Subject',
                content: '',
            }
        })
        dispatch({
            type: 'ADD_PART',
            payload: {
                description: 'Intransitive verb',
                content: '',
            }
        })
    };

        return (
            <Grid item xs={3}>

                <div style={{"text-align": "center"}}>
                    <Button size={"large"} variant={"contained"} color={"primary"} onClick={buildPattern}>Build the pattern</Button>
                </div>
                <ul>
                    <li>
                        <strong>Which time ?</strong>
                        <ul>
                            <li>present</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Which tense form ?</strong>
                        <ul>
                            <li>simple</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Which form ?</strong>
                        <ul>
                            <li>Declarative</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Active ou passive ?</strong>
                        <ul>
                            <li>active</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Which type ?</strong>
                        <ul>
                            <li>Simple sentence</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Which sentence pattern ?</strong>
                        <ul>
                            <li>S-V</li>
                        </ul>
                    </li>
                </ul>
            </Grid>
        )
}

export default SentencePaternBuilder;