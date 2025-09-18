import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Spinner, Alert, Card, Row, Col } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";
import MyFooter from "./MyFooter";

const API_KEY = "1581a091224b70d721b2caa794ff06f1";

export default function DetailsPage() {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${API_KEY}&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [city]);

  return (
    <div
      className="d-flex flex-column"
      style={{
        maxWidth: "100%",
      }}
    >
      <CustomNavbar tema="light" />
      <main className="flex-grow-1 py-2">
        <Container>
          {loading ? (
            <div className="text-center my-5">
              <Spinner animation="border" variant="warning" />
            </div>
          ) : error ? (
            <Alert variant="danger" className="text-center">
              {error}
            </Alert>
          ) : (
            <Row className="d-flex align-items-center mb-2">
              <div className="d-flex align-items-center justify-content-center flex-wrap">
                <img
                  src="/totoro1.png"
                  className="rounded-circle py-2"
                  alt="totoro"
                  style={{
                    height: "300px",
                  }}
                />
                <div>
                  <h2>Today's weather!</h2>
                </div>
              </div>
              <Col md={6} lg={12}>
                <Card
                  className="mx-auto"
                  style={{
                    maxWidth: "400px",
                    background: "rgb(253, 235, 212)",
                  }}
                >
                  <Card.Body className="text-center">
                    <Card.Title className="mb-3 display-6">
                      {weatherData.name}, {weatherData.sys.country}
                    </Card.Title>
                    <img
                      src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                      alt={weatherData.weather[0].description}
                    />
                    <h3>{weatherData.main.temp}°C</h3>
                    <p className="text-muted">
                      {weatherData.weather[0].description}
                    </p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind: {weatherData.wind.speed} m/s</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      </main>
      <MyFooter />
    </div>
  );
}
