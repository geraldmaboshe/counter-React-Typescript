import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface IProps {

}
interface IState {
  count: any
}

class App extends Component<IProps, IState> {
  constructor(props: IProps){
    super(props);
    this.state = {
      count: 0
    }
  }
  
  render() {
    const handleButtonClick = () => {
      this.setState({ count: this.state.count + 1})
    }
    return (
      <div>
        <h1>{ this.state.count}</h1>
        <button onClick = { handleButtonClick}>Add</button>
      </div>
    );
  }
}
export default App;
