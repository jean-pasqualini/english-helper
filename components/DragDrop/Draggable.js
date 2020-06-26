import React from "react";

function Draggable(props) {
    function startDrag(ev) {
        console.log('drag');
        ev.dataTransfer.setData("drag-item", props.dataItem);
    }

    return(
        <div draggable onDragStart={startDrag}>
            {props.children}
        </div>);
};

export default Draggable;