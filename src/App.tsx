import React from 'react';
import './App.scss';
import counter from 'store/counter'
import { observer } from 'mobx-react-lite';
import { ToDo } from 'components/Todo/Todo';

export const App: React.FC = observer(() => {

  return (
    <div className="App">
      <div>
        number = {counter.count}
        <button onClick={() => counter.increment()}>+1</button>
        <button onClick={() => counter.decrement()}>-1</button>
      </div>
      <ToDo />
    </div>
  );
})