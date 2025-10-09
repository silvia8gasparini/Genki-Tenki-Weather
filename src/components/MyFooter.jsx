import { Container } from "react-bootstrap";

const MyFooter = () => (
  <footer
    className="text-dark py-3 mt-5"
    style={{ background: "rgb(242, 242,242)" }}
  >
    <Container className="text-center mt-4">
      <p>&copy; {new Date().getFullYear()} Genki Tenki - All rights reserved</p>
    </Container>
  </footer>
);

export default MyFooter;
