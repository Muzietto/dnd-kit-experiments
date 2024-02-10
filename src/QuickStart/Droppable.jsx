import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export default function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'red' : undefined,
    width: 300,
    height: 300,
    border: '1px solid black',
  };


  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
      DROPPABLE
      <p>{`isOver: ${isOver}`}</p>
    </div>
  );
}