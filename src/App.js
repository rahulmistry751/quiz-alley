import {Routes,Route} from 'react-router-dom';
import { Home, Quiz,Result,Rules} from './pages';
import './App.css';
import { Navbar } from './components';
function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/quiz/:categoryName" element={<Quiz/>}></Route>
        <Route path="/result/:categoryName" element={<Result/>}></Route>
        <Route path="/rules/:categoryName" element={<Rules/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
