import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ViewFriends from './components/ViewFriends';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ViewFriends/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
