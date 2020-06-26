import React, {useContext, useState} from 'react';
import _ from 'lodash';
import {
    Button
} from '@material-ui/core';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import DropTarget from "../DragDrop/DropTarget";
import Place from "./Place";
import {SentenceContext} from "../../pages/context/sentence-context";

const PartSpeechWrapper = styled.div`
   padding: 10px;
   background: red;
   min-height: 50px;
   position: absolute;
   bottom: 5px;
   width: 100%
`;
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    clear: {
        clear: 'both'
    }
}));

const SentenceRender = function() {
    const classes = useStyles();
    const [state, dispatch] = useContext(SentenceContext);

    const onDrop = function(value) {
        console.log("add : " + value);

        addSentenceComponent(value);
    }

    const addSentenceComponent = function(value) {
        dispatch({
            type: 'ADD_PART',
            payload: {
                description: 'added',
                content: value
            }
        });
    };

    const handleRemovePart = function(event) {
        event.preventDefault();
        this.setState({
            parts: _.without(this.state.parts, this.state.parts[event.currentTarget.dataset.key])
        });
    }

    return (
        <React.Fragment>
            <div style={{"text-align": 'center'}}>
                <Button type="submit" variant={"contained"} color="primary" size={"large"}>Make the sentence</Button>
            </div>
            <div>
                <DropTarget onItemDropped={onDrop}>
                    <PartSpeechWrapper>
                        {state.parts}
                        <div className={classes.clear}/>
                    </PartSpeechWrapper>
                </DropTarget>
            </div>
        </React.Fragment>
    )
}

export default SentenceRender;