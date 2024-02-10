import React, { useReducer } from 'react';
import {DndContext} from '@dnd-kit/core';

import {Droppable} from './Droppable';
import {Draggable} from './Draggable';

export default function App() {
  const draggableIds = ['A', 'B', 'C'];
  const [state, dispatch] = useReducer((state, { type, payload }) => {
    if (type === 'SET_PARENT') {
      return {
        ...state,
        [payload.child]: payload.parent,
      }
    }
    return state;
  }, {
    A: null,
    B: null,
    C: null,
  });
  const draggableMarkup = id => <Draggable key={id} id={id}>
    {`Drag me - ${id}`}
  </Draggable>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {draggableIds.map(id => (state[id]) 
        ? null 
        : draggableMarkup(id))}

        <Droppable id='DROP_ZONE' key='DROP_ZONE'>
        {draggableIds.map(id => (state[id]) 
          ? draggableMarkup(id)
          : null)}
        </Droppable>
    </DndContext>
  );

  function handleDragEnd(event) {
    const { active, over } = event;
    console.log('@@@', over);
    console.log('@@@', active);

    dispatch({
      type: 'SET_PARENT',
      payload: {
        child: active.id,
        parent: (over) ? over.id : null,
      },
    });
  }
};