import { Container } from "react-bootstrap";

const Welcome = () => (
  <Container
    className="welcome-section text-center mt-3
     rounded-5"
    style={{
      background: "radial-gradient(rgb(253, 235, 212)",
      color: "orange",
    }}
  >
    <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap">
      <img
        src="/totoro.JPG"
        className="rounded-circle py-3 me-5"
        alt="totoro"
        style={{
          height: "250px",
        }}
      />
      <div>
        <h1>Welcome to Genki Tenki!</h1>
        <p className="fs-5">
          Golden sunbeam strikes, drops slide down the windowpane — a soft,
          glowing hush.
        </p>
      </div>
    </div>
  </Container>
);

export default Welcome;
