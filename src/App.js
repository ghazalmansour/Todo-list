import React from 'react';
import Todos from './Todos';

class App extends React.Component { 
  state = {
    todos: [
      {id:1, content: 'Wash the car'},
      {id:2, content: 'Take the cat for a walk'},
      {id:3, content: 'Take out the trash'},
    ]
  }
render (){
  return (
    <div className="App">
      <h1 className= "center blue-text">
       </h1>
<Todos todos={this.state.todos}/>
    </div>
  );
}
}

export default App;
