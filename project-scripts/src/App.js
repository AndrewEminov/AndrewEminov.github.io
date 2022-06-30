import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import styled from 'styled-components/macro';

import TypesClothesMain from './pages/TypesClothesMain';
import TypesClothesStepOne from './pages/TypesClothesStepOne';
import TypesClothesStepTwo from './pages/TypesClothesStepTwo';
import TypesClothesFinish from './pages/TypesClothesFinish';
import CurrentTypeClothStepTwo from './pages/CurrentTypeClothStepTwo';
import CurrentTypeClothStepOne from './pages/CurrentTypeClothStepOne';
import DifficultyGroups from './pages/DifficultyGroups';
import CurrentDifficultyGroup from './pages/CurrentDifficultyGroup';
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header/>   

      <Routes>
        <Route path="/" element={<TypesClothesMain/>}/>
        <Route exact path="/types-clothes/difficulty-groups" element={<DifficultyGroups/>}/>
        <Route exact path="/types-clothes/difficulty-groups/:id" element={<CurrentDifficultyGroup/>}/>
        <Route exact path="/types-clothes/step1" element={<TypesClothesStepOne/>}/>
        <Route exact path="/types-clothes/step1/:id" element={<CurrentTypeClothStepOne/>}/>
        <Route exact path="/types-clothes/step2" element={<TypesClothesStepTwo/>}/>
        <Route exact path="/types-clothes/step2/:id" element={<CurrentTypeClothStepTwo/>}/>
        <Route exact path="/types-clothes/finish" element={<TypesClothesFinish/>}/>
        {/* <Route path="/" element={<Navigate to="/types-clothes" replace/>}/> */}
        <Route path="*" element={<div>Page not found</div>}/>
      </Routes>
    </Router>
  );
}

export default App;