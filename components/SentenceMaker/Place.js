import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import DropTarget from "../DragDrop/DropTarget";

const useStyles = makeStyles({
    root: {
       background: "green",
       "min-width": 50,
       "min-height": 30,
       padding: 10,
       float: 'left',
       "margin-right": 10,
       color: "white",
       "font-weight": "bold",
    }
})

const Place = function({description, content})
{
    const classes = useStyles();
    const [value, setValue] = useState((typeof content == 'undefined') ? '' : content);

    const onItemDropped = function (text) {
        console.log('place ' + text);
        setValue(text);
    }

    return (
        <DropTarget onItemDropped={onItemDropped}>
            <div className={classes.root}>
                {value}
                <br/>
                {description}
                <input type="hidden" name="part[]" value={value} />
            </div>
        </DropTarget>
    )
};

export default Place;