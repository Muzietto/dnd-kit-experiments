import React, { useState } from 'react';
import {DndContext} from '@dnd-kit/core';

import Draggable from './Draggable';
import Droppable from './Droppable';

export default function App() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable itemIndex={0}>Drag me - </Draggable>;

  return <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <Droppable>
        {isDropped ? draggableMarkup : 'Drop here - '}
      </Droppable>
    </DndContext>;

function handleDragEnd(event) {
  if (event.over && event.over.id === 'droppable') {
    setIsDropped(true);
  }
}
  }
