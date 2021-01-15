// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Form} from 'react-bootstrap';

function App() {
  return (
    <div className="App mt-5">
      <Container>
        <Row>
          <div className="col-md-4 m-auto p-4 border">
            <h2>Welcome!</h2>
            <p className="text-muted">Sign in using your Account ID</p>
            <Form>
         <Form.Group>
           <label for="username">Username</label>
         <input type="text" id="username" name="username" className="form-control" placeholder="Enter your username" required/>
         </Form.Group>
         <Form.Group>
         <label for="password">Password </label>
         <a href="!#" className="float-right text-danger">Forgot ?</a>
         <input type="password" id="password" name="pwd" className="form-control" placeholder="Enter your password" required/>
         </Form.Group>
         <Form.Group>
         <label for="rm"><input type="checkbox" className="mr-2" name="rm" id="rm"/>Remember Me</label>
         </Form.Group>

         <Form.Group>
           <button type="submit" className="form-control btn btn-primary float-right">Sign In</button>
         </Form.Group>
         </Form>
         <br clear="all"/>
         <br clear="all"/>
         <p className="text-muted text-center">Not a user yet? <a href="newaccount">Create a New Account</a></p>
          </div>
        </Row>
      </Container>

    </div>
  );
}

export default App;
