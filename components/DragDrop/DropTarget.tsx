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

    function dragEnter(ev)
    {
        if (typeof props.onDragEnter != 'undefined') {
            props.onDragEnter(ev);
        }
    }

    function dragLeave(ev)
    {
        if (typeof props.onDragLeave != 'undefined') {
            props.onDragLeave(ev);
        }
    }

    return (
        <div onDragOver={dragOver} onDrop={drop} onDragEnter={dragEnter} onDragLeave={dragLeave} data-key={"target"}>
            {props.children}
        </div>);
};

export default DropTarget;