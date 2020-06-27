import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import DropTarget from "../DragDrop/DropTarget";
import Place from "./Place";
import {SentenceContext} from "../../pages/context/sentence-context";
import PlaceSeparator from "./PlaceSeparator";
import SentenceReviewer from "./SentenceReviewer";

const PartSpeechWrapper = styled.div`
   padding: 10px;
   background: #eceef8;
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
        dispatch({
            type: 'REMOVE_PART',
            payload: {
                key: event.currentTarget.dataset.key
            }
        })
    }

    const partsWithSeparator = [];
    state.parts.forEach((item, key) => {
        partsWithSeparator.push(<PlaceSeparator index={key}/>);
       partsWithSeparator.push(<Place onClose={handleRemovePart} index={key} description={item.description} content={item.content}/> );
    });

    return (
        <React.Fragment>
            <div>
                <SentenceReviewer/>
            </div>
            <div>
                <DropTarget onItemDropped={onDrop}>
                    <PartSpeechWrapper>
                        {partsWithSeparator}
                        <div className={classes.clear}/>
                    </PartSpeechWrapper>
                </DropTarget>
            </div>
        </React.Fragment>
    )
}

export default SentenceRender;