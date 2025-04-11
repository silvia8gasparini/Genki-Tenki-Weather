import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Carousel, Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./CustomNavbar";
import MyFooter from "./MyFooter";
import Welcome from "./Welcome";

const cities = [
  {
    name: "Nairobi",
    image: "/nairobi.jpg",
    continent: "Africa",
    country: "Kenya",
  },
  {
    name: "Cape Town",
    image: "/capetown.jpg",
    continent: "Africa",
    country: "South Africa",
  },
  { name: "Cairo", image: "/cairo.jpg", continent: "Africa", country: "Egypt" },
  {
    name: "Algiers",
    image: "/algiers.jpg",
    continent: "Africa",
    country: "Algeria",
  },
  {
    name: "Addis Ababa",
    image: "/addisabeba.jpg",
    continent: "Africa",
    country: "Ethiopia",
  },
  {
    name: "Tunis",
    image: "/tunis.jpg",
    continent: "Africa",
    country: "Tunisia",
  },
  {
    name: "Casablanca",
    image: "/casablanca.webp",
    continent: "Africa",
    country: "Morocco",
  },
  {
    name: "Beijing",
    image: "/beijing.jpg",
    continent: "Asia",
    country: "China",
  },
  {
    name: "Shanghai",
    image: "/shanghai.jpg",
    continent: "Asia",
    country: "China",
  },
  { name: "Tokyo", image: "/tokyo.webp", continent: "Asia", country: "Japan" },
  { name: "Osaka", image: "/osaka.jpg", continent: "Asia", country: "Japan" },
  { name: "Kyoto", image: "/kyoto.jpg", continent: "Asia", country: "Japan" },
  {
    name: "Seoul",
    image: "/seoul.jpg",
    continent: "Asia",
    country: "South Korea",
  },
  {
    name: "Busan",
    image: "/busan.jpg",
    continent: "Asia",
    country: "South Korea",
  },
  {
    name: "Paris",
    image: "/paris.webp",
    continent: "Europe",
    country: "France",
  },
  {
    name: "Venezia",
    image: "/venice.jpg",
    continent: "Europe",
    country: "Italy",
  },
  {
    name: "Barcelona",
    image: "/barcelona.jpg",
    continent: "Europe",
    country: "Spain",
  },
  {
    name: "Berlin",
    image: "/berlin.jpg",
    continent: "Europe",
    country: "Germany",
  },
  {
    name: "Amsterdam",
    image: "/amsterdam.jpg",
    continent: "Europe",
    country: "Netherlands",
  },
  {
    name: "Vienna",
    image: "/vienna.jpg",
    continent: "Europe",
    country: "Austria",
  },
  {
    name: "Prague",
    image: "/prague.jpg",
    continent: "Europe",
    country: "Czech Republic",
  },
  {
    name: "Lisbon",
    image: "/lisbon.webp",
    continent: "Europe",
    country: "Portugal",
  },
  {
    name: "Athens",
    image: "/athens.jpg",
    continent: "Europe",
    country: "Greece",
  },
  {
    name: "Budapest",
    image: "/budapest.jpg",
    continent: "Europe",
    country: "Hungary",
  },
  {
    name: "Los Angeles",
    image: "/la.jpg",
    continent: "North America",
    country: "United States",
  },
  {
    name: "Chicago",
    image: "/chicago.jpg",
    continent: "North America",
    country: "United States",
  },
  {
    name: "Houston",
    image: "/houston.jpg",
    continent: "North America",
    country: "United States",
  },
  {
    name: "Vancouver",
    image: "/vancouver.jpg",
    continent: "North America",
    country: "Canada",
  },
  {
    name: "Miami",
    image: "/miami.jpg",
    continent: "North America",
    country: "United States",
  },
  {
    name: "San Francisco",
    image: "/sanfrancisco.jpg",
    continent: "North America",
    country: "United States",
  },
  {
    name: "Washington",
    image: "/washington.JPG",
    continent: "North America",
    country: "United States",
  },
  {
    name: "Lima",
    image: "/lima.jpg",
    continent: "South America",
    country: "Peru",
  },
  {
    name: "Santiago",
    image: "/santiago.jpg",
    continent: "South America",
    country: "Chile",
  },
  {
    name: "Buenos Aires",
    image: "/buenosaires.jpg",
    continent: "South America",
    country: "Argentina",
  },
  {
    name: "Caracas",
    image: "/caracas.jpg",
    continent: "South America",
    country: "Venezuela",
  },
  {
    name: "Brasília",
    image: "/brasilia.jpg",
    continent: "South America",
    country: "Brazil",
  },
  {
    name: "Bogotá",
    image: "/bogota.jpg",
    continent: "South America",
    country: "Colombia",
  },
  {
    name: "Auckland",
    image: "/auckland.jpg",
    continent: "Oceania",
    country: "New Zealand",
  },
  {
    name: "Wellington",
    image: "/wellington.jpg",
    continent: "Oceania",
    country: "New Zealand",
  },
  {
    name: "Brisbane",
    image: "/brisbane.jpg",
    continent: "Oceania",
    country: "Australia",
  },
  {
    name: "Melbourne",
    image: "/melbourne.jpeg",
    continent: "Oceania",
    country: "Australia",
  },
  {
    name: "Perth",
    image: "/perth.jpg",
    continent: "Oceania",
    country: "Australia",
  },
  {
    name: "Adelaide",
    image: "/adelaide.jpg",
    continent: "Oceania",
    country: "Australia",
  },
  {
    name: "Canberra",
    image: "/canberra.jpg",
    continent: "Oceania",
    country: "Australia",
  },
];

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
                                  <Card.Title>{city.name}</Card.Title>
                                  <Card.Text>{city.country}</Card.Text>
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
