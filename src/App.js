import React,{ Suspense } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import './App.css';
import { Route , Switch} from 'react-router-dom'
import {UserContext,DateContext} from './context'
const Calendar = React.lazy(() => import('./components/UI/Calendar/Calendar'));
const UsersList = React.lazy(() => import('./components/Users/UsersList'));


const App = () => {
  const [user,setUser] = React.useState(null)
  const [active,setActive] = React.useState(null)
  return (
    <div>
    <Suspense
      fallback={<Loader
          style={{backgroundColor:'white',position:'absolute'}}
           type="Rings"
           color="#00BFFF"
           height={window.innerHeight}
           width={window.innerWidth}
           timeout={3000}
        />}>
        <Switch>
            <UserContext.Provider value={{user,setUser}}>
            <DateContext.Provider value={{active,setActive}}>
                 <Route path='/active' exact component={Calendar} />
                 <Route path='/full_throttle' exact component={UsersList} />
            </DateContext.Provider>
            </UserContext.Provider>
        </Switch>
    </Suspense>
    </div>
  );
}

export default App;
