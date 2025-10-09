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
              <NavDropdown.Item onClick={() => navigate("/country/Algeria")}>
                Algeria
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Egypt")}>
                Egypt
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Ethiopia")}>
                Ethiopia
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Ghana")}>
                Ghana
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Kenya")}>
                Kenya
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Libya")}>
                Libya
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Madagascar")}>
                Madagascar
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Morocco")}>
                Morocco
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Nigeria")}>
                Nigeria
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Rwanda")}>
                Rwanda
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Senegal")}>
                Senegal
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => navigate("/country/South Africa")}
              >
                South Africa
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Sudan")}>
                Sudan
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Tanzania")}>
                Tanzania
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Uganda")}>
                Uganda
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Zambia")}>
                Zambia
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Zimbabwe")}>
                Zimbabwe
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Asia" id="navbarScrollingDropdown">
              <NavDropdown.Item
                onClick={() => navigate("/country/Afghanistan")}
              >
                Afghanistan
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Armenia")}>
                Armenia
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Azerbaijan")}>
                Azerbaijan
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/China")}>
                China
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Georgia")}>
                Georgia
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/India")}>
                India
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Indonesia")}>
                Indonesia
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Iran")}>
                Iran
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Iraq")}>
                Iraq
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Japan")}>
                Japan
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Jordan")}>
                Jordan
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Kazakhstan")}>
                Kazakhstan
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Lebanon")}>
                Lebanon
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Malaysia")}>
                Malaysia
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Nepal")}>
                Nepal
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Pakistan")}>
                Pakistan
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Palestine")}>
                Palestine
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => navigate("/country/Philippines")}
              >
                Philippines
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Singapore")}>
                Singapore
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => navigate("/country/South Korea")}
              >
                South Korea
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Syria")}>
                Syria
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Thailand")}>
                Thailand
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Turkey")}>
                Turkey
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Vietnam")}>
                Vietnam
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Uzbekistan")}>
                Uzbekistan
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Yemen")}>
                Yemen
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Europe" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate("/country/Albania")}>
                Albania
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Austria")}>
                Austria
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Belgium")}>
                Belgium
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Bulgaria")}>
                Bulgaria
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Croatia")}>
                Croatia
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Czechia")}>
                Czechia
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Austria")}>
                Denmark
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Belgium")}>
                Estonia
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Finland")}>
                Finland
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/France")}>
                France
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Germany")}>
                Germany
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Greece")}>
                Greece
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Hungary")}>
                Hungary
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Croatia")}>
                Iceland
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Ireland")}>
                Ireland
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Italy")}>
                Italy
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Lithuania")}>
                Lithuania
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Luxembourg")}>
                Luxembourg
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => navigate("/country/Netherlands")}
              >
                Netherlands
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Norway")}>
                Norway
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Poland")}>
                Poland
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Portugal")}>
                Portugal
              </NavDropdown.Item>

              <NavDropdown.Item onClick={() => navigate("/country/Romania")}>
                Romania
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Russia")}>
                Russia
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Serbia")}>
                Serbia
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Slovakia")}>
                Slovakia
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Slovenia")}>
                Slovenia
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Spain")}>
                Spain
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Sweden")}>
                Sweden
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => navigate("/country/Switzerland")}
              >
                Switzerland
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Ukraine")}>
                Ukraine
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/UK")}>
                UK
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="North America" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate("/country/Bahamas")}>
                Bahamas
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Canada")}>
                Canada
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Costa Rica")}>
                Costa Rica
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Cuba")}>
                Cuba
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Guatemala")}>
                Guatemala
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Haiti")}>
                Haiti
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Jamaica")}>
                Jamaica
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Mexico")}>
                Mexico
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/USA")}>
                USA
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="South America" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate("/country/Argentina")}>
                Argentina
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Bolivia")}>
                Bolivia
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Brazil")}>
                Brazil
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Chile")}>
                Chile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Colombia")}>
                Colombia
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Ecuador")}>
                Ecuador
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Paraguay")}>
                Paraguay
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Peru")}>
                Peru
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Uruguay")}>
                Uruguay
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Venezuela")}>
                Venezuela
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Oceania" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate("/country/Australia")}>
                Australia
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/Fiji")}>
                Fiji
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/country/New Zeland")}>
                New Zeland
              </NavDropdown.Item>
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
          <Button className="my-3" variant="outline-warning" type="submit">
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
