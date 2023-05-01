import HomePage from "pages/HomePage/";
import TweetsPage from "pages/TweetsPage";
import SharedLayout from "./SharedLayout/";
import { Route, Routes, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />} >
        <Route path='/' element={<HomePage />} />
        <Route path='tweets' element={<TweetsPage/>}/>
         <Route path='*' element={<Navigate to='/' />} />
      </Route>

    </Routes>
  );
};
