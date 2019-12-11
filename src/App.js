import React from 'react';
import './App.css';
import { Questions } from './Questions/Questions';
import { DragDropContext } from "react-beautiful-dnd";
import { Answers } from './Answers/Answers';
import { reorder, move } from './DragAndDropUtils';
import classNames from 'classnames';

class App extends React.Component {

  state = {
    selectedExerciseId: null,
  }

  async selectExercise(selectedExerciseId) {
    const exercise = data.find(o => o.exerciseId === selectedExerciseId);
    const answers = exercise.answers;

    for (let index = 0; index < answers.length; index++) {
      const answer = await import(`./assets/${selectedExerciseId}/Answer${answers[index].id}.png`);
      answers[index].imageUrl = answer.default;
    }

    this.setState({
      selectedExerciseId: selectedExerciseId,
      answers: this.shuffleArray(answers),
      questions: exercise.questions
    });
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  getList = id => {
    if (id === 'answers') {
      return this.state.answers;
    }

    return this.state.questions.find(q => `question${q.id}` === id).selectedAnswers;
  };

  update = (droppableId, items) => {
    if (droppableId === 'answers') {
      return { answers: items };
    }

    const questionsClone = Array.from(this.state.questions);
    questionsClone.find(q => `question${q.id}` === droppableId).selectedAnswers = items;

    return { questions: questionsClone };
  };

  onDragEnd = result => {
    const { source, destination } = result;
    this.cleanAnswers();

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );
      const state = this.update(source.droppableId, items);
      this.setState(state);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      const state = { ...this.update(source.droppableId, result[source.droppableId]), ...this.update(destination.droppableId, result[destination.droppableId]) }

      this.setState(state);
    }
  };

  checkAnswers() {
    const questions = this.state.questions;

    for (let index = 0; index < questions.length; index++) {
      questions[index].isAnswerCorrect =
        questions[index].selectedAnswers.length === 1 &&
        questions[index].selectedAnswers.every(s => s.id === questions[index].answerId);
    }

    this.setState({ questions: questions });
  }

  cleanAnswers() {
    const questions = this.state.questions;

    for (let index = 0; index < questions.length; index++) {
      questions[index].isAnswerCorrect = null;
    }

    this.setState({ questions: questions });
  }

  backToSelectExercise() {
    window.location = window.location;
  }

  renderExercise() {
    return (
      <div className="App">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="QuestionsSide">
            <button className={classNames('Button', 'Button--Back')} onClick={() => { this.backToSelectExercise(); }}>Wróć</button>
            <Questions selectedExerciseId={this.state.selectedExerciseId} questions={this.state.questions} />
            <button className={classNames('Button', 'Button--Check')} onClick={() => { this.checkAnswers(); }}>Sprawdź</button>
          </div>
          <div className="AnswersSide">
            <Answers answers={this.state.answers} />
          </div>
        </DragDropContext>
      </div>
    );
  }

  renderSelectExercise() {
    return (
      <div className="App">
        <div className="SelectExercise">
          {data.map(o => (
            <button
              key={o.exerciseId}
              className={classNames('Button', 'Button--Select')}
              onClick={() => this.selectExercise(o.exerciseId)}
            >
              {o.exerciseName}
            </button>
          ))
          }
        </div>
      </div>
    );
  }

  render() {
    const selectedExerciseId = this.state.selectedExerciseId;

    return !selectedExerciseId ? this.renderSelectExercise() : this.renderExercise();
  }
}

export default App;

const data = [
  {
    exerciseId: 1,
    exerciseName: 'Cykl Kerbsa',
    questions: [
      {
        id: 1,
        answerId: 1,
        x: '76.7%',
        y: '58%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 2,
        answerId: 2,
        x: '78.0%',
        y: '71.6%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 3,
        answerId: 3,
        x: '57.6%',
        y: '88.5%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 4,
        answerId: 4,
        x: '37.9%',
        y: '87.6%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 5,
        answerId: 5,
        x: '0%',
        y: '73.5%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 6,
        answerId: 6,
        x: '1.6%',
        y: '58.8%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 7,
        answerId: 7,
        x: '0%',
        y: '34.9%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 8,
        answerId: 8,
        x: '9.4%',
        y: '15.8%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 9,
        answerId: 9,
        x: '15.2%',
        y: '5.3%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 10,
        answerId: 10,
        x: '59.6%',
        y: '13%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 11,
        answerId: 11,
        x: '71.6%',
        y: '31.9%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 12,
        answerId: 12,
        x: '68.7%',
        y: '46.2%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
    ],
    answers: [
      {
        id: 1,
        imageUrl: '',
      },
      {
        id: 2,
        imageUrl: '',
      },
      {
        id: 3,
        imageUrl: '',
      },
      {
        id: 4,
        imageUrl: '',
      },
      {
        id: 5,
        imageUrl: '',
      },
      {
        id: 6,
        imageUrl: '',
      },
      {
        id: 7,
        imageUrl: '',
      },
      {
        id: 8,
        imageUrl: '',
      },
      {
        id: 9,
        imageUrl: '',
      },
      {
        id: 10,
        imageUrl: '',
      },
      {
        id: 11,
        imageUrl: '',
      },
      {
        id: 12,
        imageUrl: '',
      },
    ]
  },
  {
    exerciseId: 2,
    exerciseName: 'Cykl Mocznikowy',
    questions: [
      {
        id: 1,
        answerId: 1,
        x: '55%',
        y: '66%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 2,
        answerId: 2,
        x: '40.1%',
        y: '73.8%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 3,
        answerId: 3,
        x: '6.25%',
        y: '63.4%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 4,
        answerId: 4,
        x: '4.6%',
        y: '41.5%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 5,
        answerId: 5,
        x: '20.6%',
        y: '0.2%',
        selectedAnswers: [],
        isAnswerCorrect: null
      }
    ],
    answers: [
      {
        id: 1,
        imageUrl: '',
      },
      {
        id: 2,
        imageUrl: '',
      },
      {
        id: 3,
        imageUrl: '',
      },
      {
        id: 4,
        imageUrl: '',
      },
      {
        id: 5,
        imageUrl: '',
      },
    ]
  },
  {
    exerciseId: 3,
    exerciseName: 'B-oksydacja kwasow tłuszczowych',
    questions: [
      {
        id: 1,
        answerId: 1,
        x: '61.25%',
        y: '62.2%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 2,
        answerId: 2,
        x: '9.5%',
        y: '67.2%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 3,
        answerId: 3,
        x: '0.1%',
        y: '28.8%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 4,
        answerId: 4,
        x: '71.1%',
        y: '12.6%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 5,
        answerId: 5,
        x: '68.8%',
        y: '27.1%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 6,
        answerId: 6,
        x: '71.1%',
        y: '40.1%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
      {
        id: 7,
        answerId: 7,
        x: '0.3%',
        y: '41.4%',
        selectedAnswers: [],
        isAnswerCorrect: null
      },
    ],
    answers: [
      {
        id: 1,
        imageUrl: '',
      },
      {
        id: 2,
        imageUrl: '',
      },
      {
        id: 3,
        imageUrl: '',
      },
      {
        id: 4,
        imageUrl: '',
      },
      {
        id: 5,
        imageUrl: '',
      },
      {
        id: 6,
        imageUrl: '',
      },
      {
        id: 7,
        imageUrl: '',
      },
    ]
  }
]
  ;
