import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Carousel, Card, Button, Row, Col } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./CustomNavbar";
import MyFooter from "./MyFooter";
import Welcome from "./Welcome";
import { cities } from "../data/cities";
import { countryCodeMap } from "../data/countryCodes";

export default function HomePage() {
  const [cardsPerSlide, setCardsPerSlide] = useState(6);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCardsPerSlide = () => {
      const width = window.innerWidth;
      if (width < 576) setCardsPerSlide(1);
      else if (width < 768) setCardsPerSlide(2);
      else setCardsPerSlide(6);
    };
    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const groupByContinent = (citiesArray) => {
    return citiesArray.reduce((acc, city) => {
      acc[city.continent] = acc[city.continent] || [];
      acc[city.continent].push(city);
      return acc;
    }, {});
  };

  const handleDetailsClick = (cityName) => {
    navigate(`/details/${encodeURIComponent(cityName)}`);
  };

  const citiesByContinent = groupByContinent(cities);

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <CustomNavbar tema="light" />
      <Container fluid className="flex-grow-1 px-4">
        <Welcome />
        <h4 className="text-center my-3">
          Select a city to see the weather forecast!
        </h4>
        {Object.entries(citiesByContinent).map(
          ([continent, citiesList], idx) => {
            const slides = [];
            for (let i = 0; i < citiesList.length; i += cardsPerSlide) {
              slides.push(citiesList.slice(i, i + cardsPerSlide));
            }
            return (
              <div key={idx} className="mb-5 mt-3">
                <h4 className="text-center mb-3">{continent}</h4>
                <Carousel indicators={false} interval={null}>
                  {slides.map((group, slideIndex) => (
                    <Carousel.Item key={slideIndex}>
                      <Row className="g-4 justify-content-center px-5">
                        {group.map((city, cityIdx) => (
                          <Col key={cityIdx} xs={12} sm={12} md={6} lg={2}>
                            <Card
                              className="h-100"
                              style={{ background: "rgb(253, 235, 212)" }}
                            >
                              <Card.Img
                                variant="top"
                                src={city.image}
                                alt={city.name}
                                style={{ height: "180px", objectFit: "cover" }}
                              />
                              <Card.Body className="d-flex flex-column justify-content-between">
                                <div>
                                  <Card.Title
                                    style={{
                                      flexWrap: "nowrap",
                                      whiteSpace: "nowrap",
                                    }}
                                  >
                                    {city.name}
                                  </Card.Title>
                                  <Card.Text
                                    className="d-flex align-items-center gap-2"
                                    style={{
                                      flexWrap: "nowrap",
                                      whiteSpace: "nowrap",
                                    }}
                                  >
                                    <span>{city.country}</span>
                                    {countryCodeMap[city.country] && (
                                      <ReactCountryFlag
                                        countryCode={
                                          countryCodeMap[city.country]
                                        }
                                        svg
                                        style={{
                                          width: "1.5em",
                                          height: "1.5em",
                                          borderRadius: "2px",
                                        }}
                                      />
                                    )}
                                  </Card.Text>

                                  <Card.Text className="text-muted small">
                                    {city.continent}
                                  </Card.Text>
                                </div>
                                <Button
                                  className="mt-3"
                                  variant="warning"
                                  onClick={() => handleDetailsClick(city.name)}
                                >
                                  Details
                                </Button>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            );
          }
        )}
      </Container>
      <MyFooter />
    </div>
  );
}
