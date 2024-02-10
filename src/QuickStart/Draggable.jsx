import React from 'react';
import {useDraggable} from '@dnd-kit/core';

export default function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: `draggable_${props.itemIndex}`,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;


  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
      DRAGGABLE
      <p>
      {`itemIndex: ${JSON.stringify(props.itemIndex, null, 2)}`}
        </p>
    <p>
    {`transform: x:${transform && transform.x.toFixed(2)}-y:${transform && transform.y.toFixed(2)}`}
      </p>
</button>
  );
}