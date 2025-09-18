import {
  Container,
  Nav,
  Navbar,
  Form,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const CustomNavbar = function () {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/details/${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <Navbar
      className="custom-navbar border-bottom"
      collapseOnSelect
      expand="lg"
      style={{ background: "rgb(242, 242,242)" }}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src="/totorologo.svg" alt="logo" style={{ height: "80px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Africa" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Egipt</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Madagascar</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Morocco</NavDropdown.Item>
              <NavDropdown.Item href="#action3">South Africa</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Asia" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">China</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Japan</NavDropdown.Item>
              <NavDropdown.Item href="#action5">South Korea</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Europe" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action5">France</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Italy</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Germany</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Spain</NavDropdown.Item>
              <NavDropdown.Item href="#action4">UK</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="North America" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Canada</NavDropdown.Item>
              <NavDropdown.Item href="#action3">USA</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="South America" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Argentina</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Brazil</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Chile</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Colombia</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Oceania" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Australia</NavDropdown.Item>
              <NavDropdown.Item href="#action3">New Zeland</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="ms-auto d-flex">
            <Form className="d-flex me-2" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="outline-warning" type="submit">
                Search
              </Button>
            </Form>
          </div>
          <Button variant="outline-warning" type="submit">
            Sign In
          </Button>
          <NavDropdown
            className="me-3"
            title={
              <span>
                <img
                  className="mx-2"
                  src="/totoroicon.png"
                  alt="totoroicon"
                  style={{ height: "60px" }}
                />
                Account
              </span>
            }
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action3">Log In</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
