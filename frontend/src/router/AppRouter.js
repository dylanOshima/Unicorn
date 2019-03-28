import React from 'react'; // eslint-disable-line no-unused-vars
import { Router, Route, Switch } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import createHistory from 'history/createBrowserHistory'; 
import UnicornNavbar from './../components/UnicornNavbar';
import DirectoryPage from './../components/DirectoryPage';
import AboutPage from './../components/AboutPage';
import ConnectPage from './../components/ConnectPage';
import LoginPage from './../components/LoginPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <React.Fragment>
      <UnicornNavbar />
      <Switch>
        <Route path='/directory' component={DirectoryPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/connect' component={ConnectPage} />
        <Route path='/login' component={LoginPage} />
        {/* <Route path="/program-specific-evaluation/:id" component={DashboardPage} />
        <Route path="/classes" component={ClassesPage} exact={true}/>
        <Route path="/classes/:id" component={ClassDashboardPage} exact={true}/>
        <Route path="/classes/:id/attendance" component={AttendancePage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route component={NotFoundPage}/> */}
      </Switch>
    </React.Fragment>    
  </Router>
);

export default AppRouter;
