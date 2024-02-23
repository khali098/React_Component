import logo from './logo.svg';
import './App.css';
import Left from './Components/Left_Part'
import Right from './Components/Right_Part'
import Buttonfunction from './Components/Button_Compo'




function App() {
  return (
    <div className="App">
      <div className='Left_Container'>
        <Left/>

      </div>
      <Right/>
      
    </div>
  );
}

export default App;
