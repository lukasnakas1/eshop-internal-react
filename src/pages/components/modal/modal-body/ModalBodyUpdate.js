import { Form } from "react-bootstrap";

const ModalBodyUpdate = ({ values, setValues, handleChange }) => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Make</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter car's make"
          name="make"
          required
          value={values.make}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Model</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter car's model"
          name="model"
          required
          value={values.model}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Power (in kW)</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter car's power"
          name="power"
          required
          value={values.power}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Power (in kW)</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter car's top speed"
          name="topSpeed"
          required
          value={values.topSpeed}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price (in Eur)</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter car's price"
          name="price"
          required
          value={values.price}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};

export default ModalBodyUpdate;
