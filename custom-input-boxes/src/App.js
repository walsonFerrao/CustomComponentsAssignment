import logo from './logo.svg';
import './App.css';
import {InputCompo} from './Components/Input'

function App() {
  return (
    <div className="App">
      
     <InputCompo numbers={5} maximumvalue={5}/>

    </div>
  );
}

export default App;
