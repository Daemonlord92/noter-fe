import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/login/login';
import NotePage from './components/notes/NotePage';
import NavBarComponent from './components/navbar/navBarComponent';
import AddNote from './components/notes/AddNote';
import EditNote from './components/notes/EditNote';
import PrivateRoute from './utils/privateRoute';
import { Container, Col } from 'reactstrap';
import './components/notes/note.css';

function App() {
  return (
    <Router>
      <Container >
        <div>
          <NavBarComponent />
        </div>
        <Col md="3" className="w-25"/>
        <Col md="10" className="" style={{}}>
          <Switch>
            <PrivateRoute extact path='/notes/new' component={AddNote}/>
            <PrivateRoute extact path='/notes/:id' component={EditNote}/>
            <PrivateRoute extact path='/notes' component={NotePage} />
            <Route component={Login}/>
          </Switch>
        </Col>
        <Col md="3" />  
      </Container>
    </Router>
  );
}

export default App;
