import React from 'react';
import Todos from './Todos';
import axios from 'axios';

class App extends React.Component { 
  state = {
    todos: [
      {id:1, content: 'Wash the car'},
      {id:2, content: 'Take the cat for a walk'},
      {id:3, content: 'Take out the trash'},
    ]
  }

  componentDidMount() {
  axios.get('http://localhost:4000/todos')
  .then(response => {
    console.log(response)
    this.setState({ideas: response.data})
  })
  .catch(error => console.log(error))
}

render (){
  return (
    <div className="App">
<Todos todos={this.state.todos}/>
    </div>
  );
}
}

export default App;
