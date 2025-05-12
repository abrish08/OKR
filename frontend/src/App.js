import { Routes, Route, Link } from 'react-router-dom';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from "react-bootstrap/Container";
import './index.css';
import Login from './Components/Login';
import { Helmet } from "react-helmet";
import Registration from './Components/Registration';
import User from './Components/Admin/user';
import Dashboard from './Components/Admin/dashboard';

const Styles = {
  header: {
    backgroundColor: 'teal',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    padding: '10px 20px', 
    height: '80px',
  },
  footer: {
    backgroundColor: '#f8f9fa',
    padding: '20px 0',
    width: '100%',
    boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
  },
  anchor: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  siteContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: 1,
    paddingBottom: '60px', // Adjust based on footer height
  }
};

function App() {
  return (
    <div className='d-flex flex-column siteContainer' style={Styles.siteContainer}>
      <header style={Styles.header}>
        <div style={Styles.anchor}>
          <Link to="/" className="text-white text-decoration-none">EEC</Link>
          <Link to="/Login" className="text-white text-decoration-none">Login</Link>
        </div>
      </header>

      <Helmet>
        <title>EEC-Construction</title>
      </Helmet>

      <main style={Styles.mainContent}>
        <Routes>
<Route path='/' element={<Dashboard/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Registration />} />
        </Routes>
      </main>

      <footer style={Styles.footer}>
        <Container>
          <Row className="text-center text-md-start">
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <h5>About Us</h5>
              <p className="text-muted small">Construction services since 2005</p>
            </Col>
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <h5>Contact</h5>
              <p className="text-muted small">info@eec.com<br />+1 (555) 123-4567</p>
            </Col>
            <Col xs={12} md={4}>
              <h5>Follow Us</h5>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <a href="#" className="text-decoration-none">Facebook</a>
                <a href="#" className="text-decoration-none">Twitter</a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-3">
              <p className="small text-muted mb-0">© {new Date().getFullYear()} EEC Construction. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;