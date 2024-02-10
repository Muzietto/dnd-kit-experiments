import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'red' : undefined,
    width: 300,
    height: 30,
    border: '1px solid black',
    padding: 3,
    margin: 3
  };


  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}