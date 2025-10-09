import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
import CustomNavbar from "./CustomNavbar";
import MyFooter from "./MyFooter";
import { cities } from "../data/cities";
import { countryCodeMap } from "../data/countryCodes";

export default function CountryPage() {
  const { country } = useParams();
  const navigate = useNavigate();

  const filteredCities = cities.filter(
    (city) => city.country.toLowerCase() === country.toLowerCase()
  );

  const countryCode = countryCodeMap[country];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <CustomNavbar />
      <Container className="flex-grow-1 py-4">
        <h3 className="text-center mb-4">
          {country}
          {countryCode && (
            <ReactCountryFlag
              countryCode={countryCode}
              svg
              style={{
                width: "2em",
                height: "1.5em",
                marginRight: "0.5em",
                marginLeft: "0.5em",
                verticalAlign: "middle",
              }}
            />
          )}
        </h3>

        <Row className="g-4 justify-content-center">
          {filteredCities.length > 0 ? (
            filteredCities.map((city, i) => (
              <Col key={i} xs={12} sm={6} md={4} lg={3}>
                <Card style={{ background: "rgb(253, 235, 212)" }}>
                  <Card.Img
                    variant="top"
                    src={city.image}
                    alt={city.name}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <Card.Body className="d-flex flex-column justify-content-between gap-3">
                    <div>
                      <Card.Title>{city.name}</Card.Title>
                      <Card.Text>{city.country}</Card.Text>
                    </div>
                    <Button
                      variant="warning"
                      onClick={() => navigate(`/details/${city.name}`)}
                    >
                      Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center">No cities found for {country}.</p>
          )}
        </Row>
      </Container>
      <MyFooter />
    </div>
  );
}
