import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

const Welcome = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Container
      className="welcome-section text-center mt-3 rounded-5"
      style={{
        background: "radial-gradient(rgb(253, 235, 212)",
        color: "orange",
      }}
    >
      <div className="d-flex align-items-center justify-content-center gap-1 flex-wrap">
        <img
          src="/totoro.JPG"
          className="rounded-circle py-3 mb-3 mb-md-0 me-lg-5"
          alt="totoro"
          style={{ height: "250px" }}
        />
        <div>
          <h1
            style={{
              fontSize: isMobile ? "1.5rem" : "2.3rem",
            }}
          >
            Welcome to Genki Tenki!
          </h1>
          <p
            style={{
              fontSize: isMobile ? "1rem" : "1.2rem",
            }}
          >
            Golden sunbeam strikes, drops slide down the windowpane — a soft,
            glowing hush.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Welcome;
