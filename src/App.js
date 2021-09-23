import Header from "./components/header/Header";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/footer/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Container>
        <LandingPage />
      </Container>
      <Footer />
    </>
  );
}

export default App;
