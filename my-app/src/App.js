import './App.css';
import './style.css';
import React,{Component} from 'react';
import Header from './Components/Header';
import Books from './Components/Books';
import Search from './Components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
       
          <Header />
          <Books/>
      </div>
    );
  }
}

export default App;
