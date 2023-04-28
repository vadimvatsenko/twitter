import HomePage from "pages/HomePage/";
import TweetsPage from "pages/TweetsPage";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Route, Routes} from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />} >
        <Route path='/' element={<HomePage />} />
        <Route path='tweets' element={<TweetsPage/>}/>
        <Route path='*' element={<div>Not Found</div>} />
      </Route>

    </Routes>
  );
};
