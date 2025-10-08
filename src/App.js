import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import VehicleDetails from './pages/VehicleDetails';
import Booking from './pages/Booking';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';

// Create a green electric theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green
    },
    secondary: {
      main: '#81C784', // Light Green
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/vehicles" component={Vehicles} />
          <Route path="/vehicles/:id" component={VehicleDetails} />
          <Route path="/booking" component={Booking} />
          <Route path="/signin" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={UserDashboard} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;