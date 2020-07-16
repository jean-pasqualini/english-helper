import {makeStyles} from "@material-ui/styles";
import DropTarget from "../DragDrop/DropTarget";
import React, {useContext, useState} from "react";
import {SentenceContext} from "../../pages/context/sentence-context";

const useStyles = makeStyles({
    root: {
        "min-width": 5,
        "min-height": 60,
        float: 'left',
        "margin-right": 0,
        color: "white",
        "font-weight": "bold",
    },
    hover: {
        background: "blue",
        "min-width": 60,
        "min-height": 60,
        float: 'left',
        "margin-right": 0,
        color: "white",
        "font-weight": "bold",
    }
})



export default function({index})
{
    const classes = useStyles();
    const {state, dispatch} = useContext(SentenceContext);
    const [hover, setHover] = useState(false);

    const onItemDropped = function (text) {
        setHover(false);
        dispatch({
            type: 'PLACE_PART',
            payload: {
                key: index,
                description: 'place',
                accept: '',
                content: text
            },
        })
    }

    const onDragEnter = function () {
        setHover(true);
    }

    const onDragLeave = function () {
        setHover(false);
    }

    return (
        <DropTarget onItemDropped={onItemDropped} onDragEnter={onDragEnter} onDragLeave={onDragLeave}>
            <div className={hover ? classes.hover : classes.root}>
            </div>
        </DropTarget>
    );
};