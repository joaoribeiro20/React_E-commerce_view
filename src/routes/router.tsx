import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Store from '../pages/Store';
import NotFound from '../pages/NotFound';
import Account from '../pages/Account';
import PopUp from '../components/PopUp';

function router() {
  return  (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Store' element={<Store />}/>
          <Route path='/Account' element={<Account />}/>
          <Route path='/popUp' element={<PopUp />}/>
          <Route path='*' element={<NotFound />}/>
         {/*  <Route path='/Login' element={<PageRegister />}/>-=--
         a
          <Route path='/account' element={<PageRegister />}/> */}
        </Routes>
      </Router>
    </>
      
  );
}

export default router