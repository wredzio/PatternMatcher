
import React from 'react';
import './Questions.css';
import { Droppable, Draggable } from "react-beautiful-dnd";
import classNames from 'classnames';



export const Questions = ({ questions, selectedExerciseId }) => {
  const [questionImageUrl, setQuestionImageUrl] = React.useState(null);

  React.useEffect(() => {
    import(`../assets/${selectedExerciseId}/Question.png`).then(image => {
      setQuestionImageUrl(image.default);
    });
  }, []);

  return (
    questionImageUrl &&
    (
      <div className="Questions__container">
        <div className="Questions__body">
          <img src={questionImageUrl} className="QuestionsImage" />
          {questions.map(q => (
            <Droppable key={q.id} droppableId={`question${q.id}`}>
              {(provided, snapshot) => (
                <div
                  className={
                    classNames(
                      'Questions__answers' + selectedExerciseId,
                      snapshot.isDraggingOver ? 'Questions__answers--draggingOver' : '',
                      q.isAnswerCorrect === null ? '' : (q.isAnswerCorrect ? 'Questions__answers--correct' : 'Questions__answers--wrong')
                    )}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{ top: q.y, left: q.x }}
                // style={getListStyle(snapshot.isDraggingOver)}
                >
                  {q.selectedAnswers.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id + ''} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}

                        >
                          {item.imageUrl && <img className={'Questions__answer'} src={item.imageUrl} />}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </div>
    )
  );
}