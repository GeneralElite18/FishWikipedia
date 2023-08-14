import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { HomePage, FishPage, AddFishPage, FishDetailPage } from './pages';
import './stylings/App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"} className={"navLinks"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/fish"} className={"navLinks"}>Fish</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/fish' element={<FishPage />}></Route>
        <Route path='/addFish' element={<AddFishPage />}></Route>
        <Route path='/fish/editFish/:id' element={<FishDetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
