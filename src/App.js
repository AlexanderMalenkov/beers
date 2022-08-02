
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import BeerPage from './components/BeerPage';


function App() {
  return (
   <BrowserRouter>
    <Header/>
   <Routes>
    <Route path="/" element={<Main/>} />
    <Route path=":id" element={<BeerPage/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;

