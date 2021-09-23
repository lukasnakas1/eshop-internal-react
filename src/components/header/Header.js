import { Col, Image, Row } from "react-bootstrap";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./Header.css";

const Header = () => {
  return (
    <Row className="header">
      <Col xs={1}>
        <Image className="header-logo" src="images/logo.png" fluid />
      </Col>
      <Col xs={7}></Col>
      <Col xs={3} className="align-self-center">
        <TextField
          variant="outlined"
          label="Search"
          size="small"
          fullWidth
          disabled
        />
      </Col>
      <Col xs={1} className="align-self-center">
        <Button variant="contained" disabled>
          Login
        </Button>
      </Col>
    </Row>
  );
};

export default Header;
