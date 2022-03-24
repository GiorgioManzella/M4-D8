import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Navbar } from "react-bootstrap";

const CustomFooter = () => {
  return (
    <Navbar className="footer" bg="info" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default CustomFooter;
