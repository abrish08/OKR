import {  Routes, Route,Link} from 'react-router-dom';
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Container from "react-bootstrap/Container";
import Login from './Components/Login';
import './index.css'
//import Home from './Components/Home';
import {Helmet} from "react-helmet";
import Registration from './Components/Registration';
import Home from './Components/Home';

const Styles = {
  header: {
    backgroundColor: 'teal',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    padding: '10px 20px', 
  },
  footer: {
    backgroundColor: '#808080',
    marginTop: '100vh', 
    display: 'flex', 
  },
  anchor: {
    display: 'flex',
    flexDirection: 'row', // Corrected from 'çolumn' to 'row'
    justifyContent: 'space-between', // Align items properly
    width: '100%', // Ensure the anchor takes full width
  },
};
function App() {
  return (
    <div className='d-flex flex-column siteContainer'>
    <header style={Styles.header}>

      <div style={Styles.anchor}>
<Link to="/">EEC</Link>
<Link to="/Login" >Login</Link>
</div>
    </header>
    <Helmet>
  <title>
    EEC-Construction
  </title>
</Helmet>
  <main>
  <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/register' element={<Registration/>}/>
 <Route path='/Login'  element={<Login/>}/>
  </Routes>
  </main>
    <div className="App">
    </div>
    <footer style={Styles.footer} className='d-flex flex-column'>
      <Container >
<Row className='' >
  <Col>Footer
  </Col>
  <Col>Footer
  </Col>
  <Col>Fotter
  </Col>
</Row>
<p className='text-center'>All Rights Reserved</p>
</Container>
    </footer>
    </div>
  );
}

export default App; 

