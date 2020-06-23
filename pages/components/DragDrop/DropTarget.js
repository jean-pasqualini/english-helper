import React from 'react';

const DropTarget = function(props)
{
    function dragOver(ev) {
        ev.preventDefault();
    }

    function drop(ev) {
        ev.stopPropagation();
        const droppedItem = ev.dataTransfer.getData("drag-item");
        if (droppedItem) {
            props.onItemDropped(droppedItem);
        }
    }

    return (
        <div onDragOver={dragOver} onDrop={drop} data-key={"target"}>
            {props.children}
        </div>);
};

export default DropTarget;