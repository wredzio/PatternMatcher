
import React from 'react';
import './Answers.css';
import { Droppable, Draggable } from "react-beautiful-dnd";
import classNames from 'classnames';

export const Answers = ({ answers }) => {

  return (
    <div className="Answers__container">

      <Droppable droppableId="answers">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={classNames('Answers__list', snapshot.isDraggingOver ? 'Answers__list--draggingOver' : '')}
          >
            {answers.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id + ''} index={index}>
                {(provided, snapshot) => (
                  <div
                    className="Answers__item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}

                  >
                    <div>
                      {item.imageUrl && <img src={item.imageUrl} />}
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}