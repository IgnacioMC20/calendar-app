import React from 'react'
import { LoginScreen } from '../components/auth/LoginScreen'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
  return (
      <Router>
          <div>
              <Switch>
                  <Route exact path="/" component={ CalendarScreen } />
                  <Route exact path="/login" component={ LoginScreen } />

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
