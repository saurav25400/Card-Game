import './App.css';
import { Card } from './component/Card.js';
function App() {
  return (
    <div className="App">
     <h1 className='bg-orange-400 h-[50px] my-3 w-1/2 mx-auto rounded-md text-white text-center'><span className='my-8'>Card Assignment</span></h1>
     <Card/>
    </div>
  );
}

export default App;
