import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ViewFriends from './components/ViewFriends';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ViewFriends/>}/>
        <Route path='/addfriend' element={<AddFriend/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
