import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import DropTarget from "../DragDrop/DropTarget";
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles({
    root: {
       background: "#6a7ac8",
       minWidth: 50,
       minHeight: 30,
       float: 'left',
       marginRight: 0,
       color: "white",
    },
    close: {
        background: 'red',
        padding: 2,
        display: 'block',
        cursor: 'pointer',
        textAlign: 'center',
        fontSize: '12px',
    },
    value: {
        padding: 10,
        textAlign: 'center'
    },
    description: {
        padding: 10,
        background: '#5769c1'
    }
})

const Place = function({description, content, onClose, index})
{
    const classes = useStyles();
    const [value, setValue] = useState((typeof content == 'undefined') ? '' : content);

    useEffect(function() {
        setValue(content);
    }, [content]);

    const onItemDropped = function (text) {
        console.log('place ' + text);
        setValue(text);
    }

    const close = function(evt) {
        if (typeof onClose !== 'undefined') {
            onClose(evt);
        }
    }

    return (
        <DropTarget onItemDropped={onItemDropped}>
            <div className={classes.root}>
                <div className={classes.value}>
                    {value}
                </div>
                <div className={classes.description}>
                   {description}
                </div>
                <a className={classes.close} onClick={close} data-key={index}>
                    Delete
                </a>
                <input type="hidden" name="part[]" value={value} />
            </div>
        </DropTarget>
    )
};

export default Place;