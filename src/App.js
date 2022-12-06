import logo from './logo.svg';
import './App.css';
import Draggable from 'react-draggable';

function App() {
  

  return (    
    <div className="App">
      <div className="App-div">
        <Draggable bounds='parent' >
          <div className="box">
            <div>I want to break free !</div>
          </div>
        </Draggable>
      </div>
    </div>
  );
}

export default App;
