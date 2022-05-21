import {Routes,Route, useLocation} from 'react-router-dom';
import { Home, Quiz,Result,Rules} from './pages';
import './App.css';
import { Navbar } from './components';
import { useTheme } from './context/theme-context';
function App() {
  const {theme}=useTheme();
  return (
    <div className={`App ${theme==="dark" && "dark-App"}`}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/quiz/:categoryName" element={<Quiz/>}></Route>
        <Route path="/result/:categoryName" element={<Result/>}></Route>
        <Route path="/rules/:categoryName" element={<Rules/>}/>
      </Routes>
    </div>
  );
}

export default App;
