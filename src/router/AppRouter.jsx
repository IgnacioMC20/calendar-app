import React, { useEffect } from 'react'
import { LoginScreen } from '../components/auth/LoginScreen'
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';
import { Loading } from '../components/loading/Loading';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  
  const dispatch = useDispatch();
  const { checking, uid } = useSelector( state => state.auth);

  useEffect(() => {
    setTimeout(() => {
      dispatch( startChecking() );
    }, 1000);
  }, [dispatch])
  
  if(checking) {
    return <Loading />;
   
  }

  return (
      <Router>
          <div>
              <Switch>
                  <PrivateRoute exact path="/" component={ CalendarScreen }  isAuthenticated={ !!uid }/>
                  <PublicRoute exact path="/login" component={ LoginScreen } isAuthenticated={ !!uid } />

                  <Redirect to="/" />
              </Switch>

              {/* 
          // exact /login -> LoginScreen
          // exact / -> CalendarScreen
        */}

          </div>
      </Router>
  )
}
